import { useGameStore } from '@/store/gameStore';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, TrendingUp, Award, RotateCcw } from 'lucide-react';
import { ALL_DYNAMIC_EVENTS as GAME_EVENTS } from '@/data/dynamicEvents';
import { metricLevel } from '@/lib/gameLogic';
import { MENTOR } from '@/data/avatars';

export function DebriefingFinal() {
  const { decisions, metrics, gameOverReason, quitGame } = useGameStore();

  const allLearnings = decisions.map((d) => {
    const event = GAME_EVENTS.find((e) => e.id === d.eventId);
    const alt = event?.alternatives.find((a) => a.key === d.chosenAlternative);
    return {
      eventTitle: d.eventTitle,
      pmbokConcept: alt?.pmbokConcept ?? '',
      learnings: alt?.learnings?.join('. ') ?? '',
    };
  });

  const efLevel = metricLevel(metrics.capacidadeEntrega);
  const quaLevel = metricLevel(metrics.qualidadeProduto);
  const seLevel = metricLevel(metrics.saudeEquipe);

  const isSuccess = !gameOverReason;

  const reflectionText = (() => {
    const good: string[] = [];
    const bad: string[] = [];
    if (efLevel === 'stable') good.push('Capacidade de Entrega (Velocity)');
    else if (efLevel === 'critical') bad.push('Capacidade de Entrega (Velocity)');
    if (quaLevel === 'stable') good.push('Qualidade do Produto');
    else if (quaLevel === 'critical') bad.push('Qualidade do Produto');
    if (seLevel === 'stable') good.push('Saúde da Equipe');
    else if (seLevel === 'critical') bad.push('Saúde da Equipe');
    return { good, bad };
  })();

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      {/* Helena's closing */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 animate-float-in">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
          <AvatarFallback>HE</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Debriefing Final : {MENTOR.name}</h2>
          <p className="text-slate-600">
            {isSuccess
              ? '"Parabéns, equipe! Vocês concluíram o projeto. Vamos revisar juntos o que aprendemos para consolidar o conhecimento."'
              : `"Infelizmente o projeto não pôde ser concluído. Motivo: ${gameOverReason}. Mas o mais importante agora é refletir sobre as decisões tomadas."`}
          </p>
        </div>
      </div>

      <div className="mb-8 text-center animate-float-in">
        <h1 className="text-3xl font-bold tracking-tight">
          {isSuccess ? '🎉 Projeto Concluído' : '⚠️ Projeto Encerrado'}
        </h1>
      </div>

      {/* Resumo da Simulação */}
      <SoftCard className="mb-6 animate-float-in">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Resumo da Simulação</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-muted rounded-2xl p-4">
            <p className="text-2xl font-bold">{decisions.length}</p>
            <p className="text-xs text-muted-foreground">Decisões Tomadas</p>
          </div>
          <div className="bg-muted rounded-2xl p-4">
            <p className="text-2xl font-bold">{decisions.filter((d) => d.wasUnanimous).length}</p>
            <p className="text-xs text-muted-foreground">Decisões Unânimes</p>
          </div>
          <div className="bg-muted rounded-2xl p-4">
            <p className="text-2xl font-bold">{decisions.length}</p>
            <p className="text-xs text-muted-foreground">Eventos Enfrentados</p>
          </div>
        </div>
      </SoftCard>

      {/* Desempenho Geral */}
      <SoftCard className="mb-6 animate-float-in">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Desempenho Geral</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Capacidade de Entrega', value: metrics.capacidadeEntrega, level: efLevel },
            { label: 'Qualidade do Produto', value: metrics.qualidadeProduto, level: quaLevel },
            { label: 'Saúde da Equipe', value: metrics.saudeEquipe, level: seLevel },
          ].map((m) => (
            <div
              key={m.label}
              className={`rounded-2xl p-4 text-center ${
                m.level === 'critical'
                  ? 'bg-red-50 border border-red-200'
                  : m.level === 'warning'
                    ? 'bg-amber-50 border border-amber-200'
                    : 'bg-green-50 border border-green-200'
              }`}
            >
              <p className="text-sm text-muted-foreground">{m.label}</p>
              <p className="text-3xl font-bold mt-1">{m.value}</p>
            </div>
          ))}
        </div>
      </SoftCard>

      {/* Reflexão */}
      <SoftCard className="mb-6 animate-float-in">
        <h2 className="text-lg font-semibold mb-3">Reflexão Final</h2>
        {reflectionText.good.length > 0 && (
          <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg mb-2">
            ✅ <strong>Pontos fortes:</strong> A equipe manteve {reflectionText.good.join(', ')} em bom nível ao longo da simulação.
          </p>
        )}
        {reflectionText.bad.length > 0 && (
          <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg mb-2">
            ❌ <strong>Atenção:</strong> {reflectionText.bad.join(', ')} atingiu nível crítico. Reflitam sobre quais decisões levaram a isso.
          </p>
        )}
      </SoftCard>

      {/* Conceitos PMBOK Aprendidos */}
      <SoftCard className="mb-6 animate-float-in">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Conceitos PMBOK Aprendidos</h2>
        </div>
        <div className="space-y-3">
          {allLearnings.map((l, i) => (
            <div key={i} className="bg-muted rounded-xl p-4">
              <p className="text-sm font-semibold text-foreground">{l.eventTitle}</p>
              <p className="text-xs text-primary mt-1">📘 {l.pmbokConcept}</p>
              <p className="text-sm text-muted-foreground mt-1">{l.learnings}</p>
            </div>
          ))}
        </div>
      </SoftCard>

      {/* Aplicação Profissional */}
      <SoftCard className="mb-8 animate-float-in border-t-4 border-t-primary">
        <h2 className="text-lg font-semibold mb-3">Aplicação Profissional</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Os cenários que vocês enfrentaram refletem dilemas reais do dia a dia de projetos de software. A habilidade de equilibrar eficiência operacional,
          qualidade técnica e saúde da equipe é central no Domínio de Desempenho <strong>Trabalho do Projeto</strong> (PMBOK 7). Em projetos reais, busquem
          sempre negociar prazos com dados concretos, proteger o fluxo de trabalho do time contra interrupções não planejadas, e investir na melhoria contínua
          dos processos, exatamente como vocês praticaram aqui.
        </p>
      </SoftCard>

      <div className="flex justify-center animate-float-in">
        <SoftButton size="lg" onClick={quitGame}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Reiniciar Simulação
        </SoftButton>
      </div>
    </div>
  );
}
