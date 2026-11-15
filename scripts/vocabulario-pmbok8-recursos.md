# Domínio Recursos (PMBOK 8): referência para o jogo

> **Status da fonte.** Este arquivo foi montado a partir do resumo publicado em
> https://escritoriodeprojetos.com.br/dominio-de-recursos/ (fonte secundária, escrita em
> português, que cita o Guia PMBOK 8) e do documento de adaptação do projeto. A seção
> "Trechos oficiais" ao final foi conferida com o Guia PMBOK 8 (Seção 2.6, `pmbok8.pdf` na raiz
> do projeto) e tem precedência sobre o resumo.

## Escopo do domínio

O domínio trata de como a equipe planeja e usa de forma eficaz e eficiente os recursos disponíveis. Há dois tipos:

| `resourceType` | O que é | Exemplos no cenário SIGAA |
|---|---|---|
| `humano` | Pessoas com papéis e responsabilidades que trabalham por um objetivo comum | Desenvolvedores, QA, UX, bolsistas e estagiários, gerente de projetos |
| `fisico_virtual` | Qualquer recurso que não seja pessoa: equipamentos, materiais, instalações, infraestrutura, software, ambientes de teste, licenças, serviços, informações | Servidores e nuvem, banco de dados, ambiente de homologação, licenças, ferramentas de CI/CD |

**Terminologia.** O guia fala em recursos "físicos ou virtuais". O documento de adaptação usa "tecnológicos". No código use `fisico_virtual`; nos textos do jogo, "recursos de infraestrutura e ferramentas" ou "recursos físicos e virtuais" são ambos aceitáveis.

## Os 5 processos (`resourceProcess`)

| Valor | Processo | Em uma frase |
|---|---|---|
| `planejar` | Planejar o Gerenciamento dos Recursos | Definir como estimar, adquirir, liderar e usar recursos, considerando escassez e competição |
| `estimar` | Estimar Recursos | Estimar tipo, quantidade e características dos recursos necessários |
| `adquirir` | Adquirir Recursos | Obter e atribuir recursos, negociando e influenciando quem os fornece |
| `liderar` | Liderar a Equipe | Desenvolver, motivar e orientar a equipe; resolver problemas e mudanças na equipe |
| `monitorar` | Monitorar e Controlar Recursos | Acompanhar o uso planejado vs. real de recursos físicos/virtuais e agir; é contínuo |

Observação importante: **Monitorar e Controlar trata de recursos físicos e virtuais**. As pessoas são tratadas em Liderar a Equipe.

## Os 7 resultados esperados

| Cód. | Resultado | Como o jogo o enxerga |
|---|---|---|
| R1 | Propriedade compartilhada do projeto | Equipe conhece a visão e assume as entregas |
| R2 | Equipe de alto desempenho | Confiança, colaboração, adaptação, resiliência |
| R3 | Utilização eficaz de recursos | Uso real próximo do planejado |
| R4 | Percentual aceitável de inatividade | Pouco tempo ocioso de pessoas e recursos |
| R5 | Equipe produtiva | Entregas proporcionais ao esforço, KPIs revisados |
| R6 | Gestão eficiente de recursos físicos/virtuais | Pouco retrabalho e desperdício |
| R7 | Gestão de aquisição de recursos | Aquisições conduzidas com sucesso |

## Mapeamento com as 4 métricas do jogo

| Métrica | Resultados esperados mais ligados |
|---|---|
| `saudeEquipe` | R2 (alto desempenho), bem-estar (burnout, desengajamento) |
| `conhecimentoOrganizacional` | R1 (propriedade compartilhada), papéis claros e lacunas de conhecimento |
| `capacidadeEntrega` | R3, R4, R5 (utilização, inatividade, produtividade) |
| `qualidadeProduto` | R6 (retrabalho e desperdício) |

Conceitos de qualidade de software (dívida técnica, refatoração, testes) **não são do domínio Recursos**. Em dilemas de qualidade, enquadre-os pelo efeito sobre recursos: retrabalho consome capacidade da equipe, código difícil de manter exige mais esforço futuro, ambiente de testes indisponível gera ociosidade.

## Fatores de equipes de alto desempenho

Comunicação aberta, entendimento compartilhado, propriedade compartilhada, confiança, colaboração (contra silos), adaptabilidade, resiliência, empoderamento/delegação/autonomia e reconhecimento.

## Vocabulário permitido para `pmbokConcept`

Use **exatamente** estes nomes (ou combine no máximo dois, ligados por " e "). Cada alternativa recebe um conceito que descreve o que a decisão *ilustra*, não o que ela *é*.

**Planejar**
- Matriz de responsabilidades (RAM) e papéis claros
- Análise SWOT de recursos
- Planejamento de recursos sob escassez e competição entre projetos
- Abordagem de recursos adaptada ao projeto (tailoring)
- Plano de gerenciamento dos recursos
- Teoria organizacional
- Visão baseada em recursos
- Gestão verde de recursos humanos

**Estimar**
- Estimativa bottom-up de recursos
- Estimativa análoga e paramétrica
- Análise de alternativas na estimativa
- Antecipação de escassez ou excedente
- Calendário de recursos
- Calendários de recursos
- Requisitos de recursos e base das estimativas
- Estrutura analítica dos recursos (EAR)
- Opinião especializada na estimativa

**Adquirir**
- Negociação e influência para obter recursos
- Recursos alternativos com riscos reconhecidos
- Impacto da indisponibilidade de recursos nos demais planos
- Aquisição de recursos físicos ou virtuais
- Gestão eficiente de recursos físicos e virtuais
- Gerente de recursos e ambiente matricial
- Análise de decisão multicritério
- Pré-designação de recursos
- Recursos internos e externos

**Liderar a Equipe**
- Visão e objetivos compartilhados
- Papéis, responsabilidades e lacunas de conhecimento
- Generalista-especialista
- Treinamento, mentoria e coaching
- Team charter e operações da equipe
- Liderança servidora
- Liderança distribuída e centralizada
- Empoderamento, delegação e autonomia
- Reconhecimento e recompensas
- Retrospectivas
- Equipes virtuais
- Bem-estar e prevenção de burnout
- Ambiente seguro e transparência sobre vieses
- Resolução de problemas e conflitos
- Propriedade compartilhada do projeto
- Colocação
- Inteligência emocional
- Seis Chapéus do Pensamento
- Escada de Tuckman
- Avaliação de desempenho da equipe
- Maturidade dos membros da equipe
- Desengajamento silencioso (quiet quitting)
- Atividades de gestão e de liderança

**Monitorar e Controlar**
- Uso planejado vs. real de recursos
- Escassez e excedente de recursos
- Utilização e inatividade de recursos
- Análise de custo-benefício e de tendências
- Teoria das restrições e gargalos
- Melhoria contínua
- Liberação de recursos conforme o plano
- Retrabalho e desperdício como indicadores de eficiência
- Mapeamento do fluxo de valor
- Gráficos de controle
- Revisões de desempenho

**Transversais**
- Sustentabilidade na gestão de recursos
- Coordenação entre Recursos, Cronograma, Finanças e Risco
- Competição entre projetos pelos mesmos recursos
- Integridade e transparência do gerente de projetos

## Tailoring (considerações do domínio)

Abordagem preditiva (planejamento antecipado) vs. adaptativa (equipes auto-organizadas); maturidade da cultura e dos membros da equipe; transparência sobre vieses; papel do gerente de projetos em manter ambiente seguro; contexto da indústria (lean, Kaizen, teoria das restrições); governança organizacional; sustentabilidade; equipes virtuais; ênfase em bem-estar (burnout, desengajamento).

## Trechos oficiais

Paráfrase fiel da Seção 2.6 do Guia PMBOK 8 (sem citar página nos textos do jogo).

- **Definição.** O domínio trata de quão eficaz e eficientemente a equipe planeja e usa os recursos disponíveis: humanos (a própria equipe) e físicos ou virtuais (equipamentos, materiais, instalações, infraestrutura, software, ambientes de teste, licenças, serviços, informações, documentos). Cobre disponibilidade, utilização e manutenção.
- **Gerente de projetos.** Como líder da equipe, responde pela formação e operação da equipe como grupo eficaz; investe em adquirir, gerenciar, motivar e empoderar a equipe; observa ambiente, localização, comunicação, política, cultura; desenvolve proativamente competências e mantém comportamento ético. Sua principal preocupação, ao integrar os domínios, é liderar a equipe para alcançar os objetivos.
- **Gerente de recursos.** Pessoa com autoridade sobre um ou mais recursos. A equipe pode não controlar a seleção (acordos coletivos, subcontratados, ambiente matricial). Recursos internos são designados por gerentes funcionais/de recursos; externos vêm de parcerias ou aquisições.
- **Membros da equipe.** Envolvê-los no planejamento e nas decisões fortalece o comprometimento. A liderança pode ser centralizada (de cima para baixo) ou distribuída (auto-organização, decisão descentralizada).
- **Planejar o Gerenciamento dos Recursos.** Define como estimar, adquirir, liderar e usar recursos; considera disponibilidade e competição por recursos escassos. Técnicas: RAM, teoria organizacional, gestão verde de RH, visão baseada em recursos, SWOT. Saídas: plano de gerenciamento dos recursos, team charter.
- **Estimar Recursos.** Identifica tipo, quantidade e características; antecipa escassez ou excedente. Entradas: plano de recursos e calendários de recursos. Técnicas: bottom-up, análoga, paramétrica, análise de alternativas, PMIS, opinião especializada. Saídas: requisitos de recursos, base das estimativas, estrutura analítica dos recursos. Muito ligado a Cronograma e a Estimar Custos (Finanças).
- **Adquirir Recursos.** Obtém e atribui recursos às atividades; periódico. O GP deve colaborar, negociar e influenciar quem fornece. Falhar em adquirir afeta cronograma, orçamento, qualidade e risco, e pode cancelar o projeto. Recursos alternativos (outras competências ou custos) são aceitáveis se os riscos forem reconhecidos e critérios legais/regulatórios não forem violados; documentar o impacto da indisponibilidade nos planos. Técnicas: análise de decisão multicritério, negociação, resolução de problemas, pré-designação, equipes virtuais. Saídas: designações, calendários de recursos, solicitações de mudança.
- **Liderar a Equipe.** Atividades de gestão (processos, planejamento, coordenação, medição) e de liderança (influenciar, motivar, ouvir, capacitar); o GP ajusta o estilo à disposição e capacidade dos membros. Aspectos: visão e objetivos, papéis e responsabilidades (lacunas tratadas com treinamento, mentoria, coaching; RAM), operações da equipe (team charter, normas), orientação, crescimento. Fatores de alto desempenho: comunicação aberta, entendimento compartilhado, propriedade compartilhada, confiança, colaboração (não silos), adaptabilidade, resiliência, empoderamento/delegação/autonomia, reconhecimento. Técnicas: colocação, equipes virtuais, reconhecimento e recompensas, treinamento, avaliações individuais e de equipe, inteligência emocional, liderança distribuída/centralizada/servidora, coaching e mentoria, inteligência cultural, ferramentas de colaboração virtual, retrospectivas, pensamento crítico, Seis Chapéus, escada de Tuckman. Saída: avaliações de desempenho da equipe.
- **Monitorar e Controlar Recursos.** Contínuo; garante que recursos físicos/virtuais estejam disponíveis como planejado, no lugar e momento certos, e sejam liberados quando não forem mais necessários; compara uso planejado e real e age. Pessoas são tratadas em Liderar a Equipe. Preocupações: gastos, escassez e excedente tempestivos, uso e liberação conforme o plano, informar partes interessadas, influenciar fatores de mudança de utilização. Riscos: não garantir infraestrutura crítica a tempo, insumos de baixa qualidade geram retrabalho, estoque excessivo ou insuficiente. Técnicas: análise de alternativas, custo-benefício, revisões de desempenho, análise de tendências, negociação, influência, mapeamento do fluxo de valor, melhoria contínua, teoria das restrições, gráficos de controle.
- **Tailoring.** Preditivo (recursos planejados cedo) vs. adaptativo (equipes auto-organizadas com generalistas-especialistas); projeto novo pede liderança mais direta; maturidade da cultura e dos membros; transparência sobre vieses; GP modela transparência, integridade (dar más notícias cedo, status reais), respeito, discurso positivo (diálogo, não debate), apoio, coragem, celebrar sucessos; contexto da indústria (lean, just-in-time, Kaizen, TPM, teoria das restrições); governança; sustentabilidade; equipes virtuais; bem-estar (burnout, quiet quitting).
- **Interações.** Interage com todos os domínios; Partes Interessadas, Recursos e Risco impactam muito o resultado; projetos competem pelos mesmos recursos.
- **Resultados (verificação).** Propriedade compartilhada; equipe de alto desempenho; utilização eficaz (real vs. planejado); inatividade aceitável; equipe produtiva (KPIs revisados); gestão eficiente de recursos físicos/virtuais (materiais, sucata, retrabalho); gestão de aquisição conduzida.
