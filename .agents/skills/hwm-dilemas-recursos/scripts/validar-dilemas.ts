/**
 * Validador de invariantes do catálogo de dilemas do Hard Work Manager.
 *
 * Uso (na raiz do projeto):
 *   npx tsx .agents/skills/hwm-dilemas-recursos/scripts/validar-dilemas.ts
 *
 * Opções:
 *   --dir <caminho>        pasta dos arquivos de eventos (padrão: src/data/events)
 *   --por-arquivo <n>      dilemas esperados por arquivo (padrão: 10)
 *   --recursos             exige resourceType e resourceProcess em todo dilema (Fase 1 concluída)
 *   --vocabulario <arq>    arquivo .md com o vocabulário de pmbokConcept (padrão: references/pmbok8-recursos.md
 *                          ao lado deste script); ativa a checagem de conceitos
 *   --json                 saída em JSON
 *
 * Código de saída: 0 se não houver FAIL; 1 caso contrário. WARN não reprova.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

type Status = 'PASS' | 'FAIL' | 'WARN' | 'SKIP';
interface Resultado {
  criterio: string;
  status: Status;
  detalhe: string;
}

const METRICAS = [
  'capacidadeEntrega',
  'qualidadeProduto',
  'saudeEquipe',
  'conhecimentoOrganizacional',
];
const OPERADORES = ['<', '>', '===', '<=', '>='];
const PAPEIS = ['pm', 'techLead', 'uxLead'];
const CANAIS = ['email', 'slack', 'ticket'];
const TIPOS_RECURSO = ['humano', 'fisico_virtual'];
const PROCESSOS = ['planejar', 'estimar', 'adquirir', 'liderar', 'monitorar'];
const RESIDUOS = [/pmbok\s*7/i, /trabalho do projeto/i, /work performance domain/i];

// ---------- argumentos ----------
const args = process.argv.slice(2);
const opt = (nome: string): string | undefined => {
  const i = args.indexOf(nome);
  return i >= 0 ? args[i + 1] : undefined;
};
const temFlag = (nome: string) => args.includes(nome);

const dirEventos = resolve(process.cwd(), opt('--dir') ?? 'src/data/events');
const porArquivo = Number(opt('--por-arquivo') ?? 10);
const exigeRecursos = temFlag('--recursos');
const saidaJson = temFlag('--json');
const aqui = dirname(fileURLToPath(import.meta.url));
const arquivoVocab = opt('--vocabulario')
  ? resolve(process.cwd(), opt('--vocabulario')!)
  : join(aqui, '..', 'references', 'pmbok8-recursos.md');

// ---------- utilidades ----------
const resultados: Resultado[] = [];
const add = (criterio: string, status: Status, detalhe = '') =>
  resultados.push({ criterio, status, detalhe });

function textos(ev: any): { campo: string; valor: string }[] {
  const out: { campo: string; valor: string }[] = [];
  const push = (campo: string, v: unknown) => {
    if (typeof v === 'string') out.push({ campo, valor: v });
    else if (Array.isArray(v)) v.forEach((x, i) => push(`${campo}[${i}]`, x));
  };
  ['title', 'description', 'learningObjective', 'domainTag', 'tags', 'senderRole'].forEach((c) =>
    push(`${ev.id}.${c}`, ev[c]),
  );
  for (const alt of ev.alternatives ?? []) {
    const p = `${ev.id}.${alt.key}`;
    ['text', 'feedbackNarrative', 'pmbokConcept', 'learnings', 'risksEvaded', 'otherConsequences'].forEach(
      (c) => push(`${p}.${c}`, alt[c]),
    );
    for (const [i, d] of (alt.delayedImpacts ?? []).entries()) push(`${p}.delayed[${i}].narrative`, d.narrative);
  }
  return out;
}

function somaImpactos(imp: Record<string, number> | undefined): number {
  return Object.values(imp ?? {}).reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0);
}

function carregarVocabulario(): Set<string> | null {
  if (!existsSync(arquivoVocab)) return null;
  const md = readFileSync(arquivoVocab, 'utf8');
  const inicio = md.indexOf('## Vocabulário permitido');
  if (inicio < 0) return null;
  const resto = md.slice(inicio + 1);
  const fim = resto.indexOf('\n## ');
  const bloco = fim >= 0 ? resto.slice(0, fim) : resto;
  const nomes = bloco
    .split('\n')
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim());
  return nomes.length ? new Set(nomes) : null;
}

// ---------- carga ----------
async function carregar(): Promise<{ arquivo: string; eventos: any[] }[]> {
  if (!existsSync(dirEventos)) {
    console.error(`Pasta não encontrada: ${dirEventos}. Rode na raiz do projeto ou use --dir.`);
    process.exit(2);
  }
  const arquivos = readdirSync(dirEventos).filter((f) => /\.(ts|tsx|js|mjs)$/.test(f)).sort();
  const lotes: { arquivo: string; eventos: any[] }[] = [];
  for (const arquivo of arquivos) {
    const mod = await import(pathToFileURL(join(dirEventos, arquivo)).href);
    const arrays = Object.values(mod).filter(
      (v) => Array.isArray(v) && v.length > 0 && (v as any[]).every((e) => e && typeof e === 'object' && 'alternatives' in e),
    ) as any[][];
    if (arrays.length === 0) {
      add(`Carga ${arquivo}`, 'WARN', 'nenhum array de dilemas exportado; arquivo ignorado');
      continue;
    }
    lotes.push({ arquivo, eventos: arrays[0] });
  }
  return lotes;
}

// ---------- checagens ----------
async function main() {
  const lotes = await carregar();
  const todos = lotes.flatMap((l) => l.eventos.map((e) => ({ ...e, __arquivo: l.arquivo })));

  // Contagens
  const contagem = lotes.map((l) => `${l.arquivo}: ${l.eventos.length}`).join('; ');
  const desvios = lotes.filter((l) => l.eventos.length !== porArquivo);
  add(
    `Dilemas por arquivo = ${porArquivo}`,
    desvios.length ? 'FAIL' : 'PASS',
    desvios.length ? desvios.map((l) => `${l.arquivo}=${l.eventos.length}`).join(', ') : contagem,
  );
  add(
    `Total = ${porArquivo * lotes.length}`,
    todos.length === porArquivo * lotes.length ? 'PASS' : 'FAIL',
    `encontrados ${todos.length}`,
  );

  // ids únicos
  const ids = new Map<string, number>();
  todos.forEach((e) => ids.set(e.id, (ids.get(e.id) ?? 0) + 1));
  const dupIds = [...ids].filter(([, n]) => n > 1).map(([id]) => id);
  add('ids únicos', dupIds.length ? 'FAIL' : 'PASS', dupIds.join(', '));

  // Campos obrigatórios
  const obrig = ['id', 'title', 'category', 'difficulty', 'learningObjective', 'communicationType', 'senderName', 'senderInitials', 'senderRole', 'domainTag', 'responsibleRole', 'description'];
  const faltando: string[] = [];
  todos.forEach((e) =>
    obrig.forEach((c) => {
      if (e[c] === undefined || e[c] === null || e[c] === '') faltando.push(`${e.id ?? '?'}.${c}`);
    }),
  );
  add('campos obrigatórios do dilema', faltando.length ? 'FAIL' : 'PASS', faltando.slice(0, 8).join(', '));

  const enumsRuins: string[] = [];
  todos.forEach((e) => {
    if (!PAPEIS.includes(e.responsibleRole)) enumsRuins.push(`${e.id}.responsibleRole=${e.responsibleRole}`);
    if (!CANAIS.includes(e.communicationType)) enumsRuins.push(`${e.id}.communicationType=${e.communicationType}`);
  });
  add('responsibleRole e communicationType válidos', enumsRuins.length ? 'FAIL' : 'PASS', enumsRuins.slice(0, 8).join(', '));

  // Estrutura das alternativas
  const estrutura: string[] = [];
  const goodBad: string[] = [];
  todos.forEach((e) => {
    const alts = e.alternatives ?? [];
    const keys = alts.map((a: any) => a.key).join('');
    if (alts.length !== 3 || keys !== 'abc') estrutura.push(`${e.id} (keys=${keys || 'vazio'})`);
    const good = alts.filter((a: any) => a.goodBad === 'good').length;
    const bad = alts.filter((a: any) => a.goodBad === 'bad').length;
    if (good !== 1 || bad !== 2) goodBad.push(`${e.id} (good=${good}, bad=${bad})`);
  });
  add('3 alternativas com keys a, b, c', estrutura.length ? 'FAIL' : 'PASS', estrutura.slice(0, 8).join('; '));
  add('exatamente 1 good e 2 bad', goodBad.length ? 'FAIL' : 'PASS', goodBad.slice(0, 8).join('; '));

  // Campos das alternativas
  const altFalta: string[] = [];
  todos.forEach((e) =>
    (e.alternatives ?? []).forEach((a: any) => {
      ['text', 'feedbackNarrative', 'pmbokConcept'].forEach((c) => {
        if (typeof a[c] !== 'string' || !a[c].trim()) altFalta.push(`${e.id}.${a.key}.${c}`);
      });
      ['learnings', 'risksEvaded', 'otherConsequences'].forEach((c) => {
        if (!Array.isArray(a[c]) || a[c].length === 0) altFalta.push(`${e.id}.${a.key}.${c}`);
      });
    }),
  );
  add('campos obrigatórios das alternativas', altFalta.length ? 'FAIL' : 'PASS', altFalta.slice(0, 8).join(', '));

  // Impactos
  const impRuins: string[] = [];
  const impAltos: string[] = [];
  const checaImpactos = (rotulo: string, imp: any) => {
    if (!imp || typeof imp !== 'object') {
      impRuins.push(`${rotulo} (ausente)`);
      return;
    }
    for (const [k, v] of Object.entries(imp)) {
      if (!METRICAS.includes(k)) impRuins.push(`${rotulo}.${k} (métrica inválida)`);
      else if (!Number.isInteger(v)) impRuins.push(`${rotulo}.${k}=${v} (não inteiro)`);
      else if (Math.abs(v as number) > 40) impAltos.push(`${rotulo}.${k}=${v}`);
    }
  };
  todos.forEach((e) =>
    (e.alternatives ?? []).forEach((a: any) => {
      checaImpactos(`${e.id}.${a.key}`, a.impacts);
      (a.delayedImpacts ?? []).forEach((d: any, i: number) => checaImpactos(`${e.id}.${a.key}.delayed[${i}]`, d.impacts));
    }),
  );
  add('impacts: só métricas válidas, inteiros', impRuins.length ? 'FAIL' : 'PASS', impRuins.slice(0, 8).join('; '));
  add('impacts: delta absoluto até 40 (máximo já usado no catálogo)', impAltos.length ? 'WARN' : 'PASS', impAltos.slice(0, 8).join('; '));

  // Delayed impacts
  const delRuins: string[] = [];
  todos.forEach((e) =>
    (e.alternatives ?? []).forEach((a: any) =>
      (a.delayedImpacts ?? []).forEach((d: any, i: number) => {
        const r = `${e.id}.${a.key}.delayed[${i}]`;
        if (!Number.isInteger(d.triggerAfterEvents) || d.triggerAfterEvents < 1) delRuins.push(`${r}.triggerAfterEvents`);
        if (typeof d.narrative !== 'string' || !d.narrative.trim()) delRuins.push(`${r}.narrative`);
        if (d.condition) {
          const c = d.condition;
          if (!METRICAS.includes(c.metric) || !OPERADORES.includes(c.operator) || typeof c.value !== 'number')
            delRuins.push(`${r}.condition`);
        }
      }),
    ),
  );
  add('delayedImpacts válidos', delRuins.length ? 'FAIL' : 'PASS', delRuins.slice(0, 8).join(', '));

  // delayedImpacts não é obrigatório: só entra como informativo
  const semEco = todos.filter((e) => !(e.alternatives ?? []).some((a: any) => a.goodBad === 'bad' && (a.delayedImpacts ?? []).length > 0));

  // pmbokConcept único
  const conceitos = new Map<string, string[]>();
  todos.forEach((e) =>
    (e.alternatives ?? []).forEach((a: any) => {
      const c = (a.pmbokConcept ?? '').trim();
      conceitos.set(c, [...(conceitos.get(c) ?? []), `${e.id}.${a.key}`]);
    }),
  );
  const repetidos = [...conceitos].filter(([, v]) => v.length > 1);
  add('pmbokConcept distinto em todas as alternativas', repetidos.length ? 'WARN' : 'PASS',
    repetidos.slice(0, 5).map(([c, v]) => `"${c}" em ${v.join(', ')}`).join('; '));

  // Vocabulário
  const vocab = carregarVocabulario();
  if (!vocab) {
    add('pmbokConcept dentro do vocabulário PMBOK 8', 'SKIP', `vocabulário não encontrado em ${arquivoVocab}`);
  } else {
    const fora: string[] = [];
    todos.forEach((e) =>
      (e.alternatives ?? []).forEach((a: any) => {
        const partes = String(a.pmbokConcept ?? '').split(' e ').map((s) => s.trim());
        const inteiro = String(a.pmbokConcept ?? '').trim();
        const ok = vocab.has(inteiro) || partes.every((p) => vocab.has(p));
        if (!ok) fora.push(`${e.id}.${a.key}="${a.pmbokConcept}"`);
      }),
    );
    add('pmbokConcept dentro do vocabulário PMBOK 8', fora.length ? 'FAIL' : 'PASS',
      fora.length ? `${fora.length} fora do vocabulário; ex.: ${fora.slice(0, 3).join('; ')}` : `${vocab.size} conceitos permitidos`);
  }

  // Campos de Recursos
  if (!exigeRecursos) {
    add('resourceType e resourceProcess presentes e válidos', 'SKIP', 'use --recursos após a Fase 1');
  } else {
    const ruins: string[] = [];
    todos.forEach((e) => {
      if (!TIPOS_RECURSO.includes(e.resourceType)) ruins.push(`${e.id}.resourceType=${e.resourceType}`);
      if (!PROCESSOS.includes(e.resourceProcess)) ruins.push(`${e.id}.resourceProcess=${e.resourceProcess}`);
    });
    add('resourceType e resourceProcess presentes e válidos', ruins.length ? 'FAIL' : 'PASS', ruins.slice(0, 8).join(', '));
  }

  // Resíduos do PMBOK 7
  const residuos: string[] = [];
  todos.forEach((e) =>
    textos(e).forEach(({ campo, valor }) => {
      if (RESIDUOS.some((r) => r.test(valor))) residuos.push(campo);
    }),
  );
  add('sem resíduos de "PMBOK 7" / "Trabalho do Projeto" nos dilemas', residuos.length ? 'FAIL' : 'PASS', residuos.slice(0, 8).join(', '));

  // Tamanho dos textos
  const compridos: string[] = [];
  todos.forEach((e) => {
    const n = (e.description ?? '').length;
    if (n < 180 || n > 350) compridos.push(`${e.id}.description=${n}`);
    (e.alternatives ?? []).forEach((a: any) => {
      const m = (a.text ?? '').length;
      if (m < 80 || m > 150) compridos.push(`${e.id}.${a.key}.text=${m}`);
    });
  });
  add('tamanhos de texto (description 180-350; alternativa 80-150)', compridos.length ? 'WARN' : 'PASS',
    compridos.length ? `${compridos.length} fora da faixa; ex.: ${compridos.slice(0, 3).join('; ')}` : '');

  // Sanidade de equilíbrio: good deve somar mais que cada bad (imediato + diferido)
  const desequilibrio: string[] = [];
  todos.forEach((e) => {
    const total = (a: any) =>
      somaImpactos(a.impacts) + (a.delayedImpacts ?? []).reduce((s: number, d: any) => s + somaImpactos(d.impacts), 0);
    const good = (e.alternatives ?? []).find((a: any) => a.goodBad === 'good');
    if (!good) return;
    (e.alternatives ?? [])
      .filter((a: any) => a.goodBad === 'bad')
      .forEach((b: any) => {
        if (total(b) >= total(good)) desequilibrio.push(`${e.id}.${b.key} (${total(b)}) >= good (${total(good)})`);
      });
  });
  add('equilíbrio: soma total da good > soma de cada bad', desequilibrio.length ? 'WARN' : 'PASS', desequilibrio.slice(0, 8).join('; '));

  // Distribuições (informativo)
  const dist = (chave: (e: any) => string) => {
    const m = new Map<string, number>();
    todos.forEach((e) => m.set(chave(e), (m.get(chave(e)) ?? 0) + 1));
    return [...m].map(([k, v]) => `${k}=${v}`).join(', ');
  };
  const informativo = {
    porResponsibleRole: dist((e) => e.responsibleRole ?? '?'),
    porResourceType: dist((e) => e.resourceType ?? '(sem)'),
    porResourceProcess: dist((e) => e.resourceProcess ?? '(sem)'),
    porCanal: dist((e) => e.communicationType ?? '?'),
    dilemasSemDelayedImpactsEmNenhumaBad: `${semEco.length} de ${todos.length}`,
  };

  // ---------- saída ----------
  const falhas = resultados.filter((r) => r.status === 'FAIL').length;
  const avisos = resultados.filter((r) => r.status === 'WARN').length;
  if (saidaJson) {
    console.log(JSON.stringify({ resultados, informativo, falhas, avisos }, null, 2));
  } else {
    console.log('\n| Critério | Status | Detalhe |\n|---|---|---|');
    resultados.forEach((r) => console.log(`| ${r.criterio} | ${r.status} | ${r.detalhe.replace(/\|/g, '/')} |`));
    console.log('\nDistribuições (informativo):');
    Object.entries(informativo).forEach(([k, v]) => console.log(`- ${k}: ${v}`));
    console.log(`\nResumo: ${falhas} FAIL, ${avisos} WARN, ${resultados.filter((r) => r.status === 'PASS').length} PASS.`);
  }
  process.exit(falhas > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
