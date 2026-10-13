# Domínio Recursos (PMBOK 8): referência para o jogo

> **Status da fonte.** Este arquivo foi montado a partir do resumo publicado em
> https://escritoriodeprojetos.com.br/dominio-de-recursos/ (fonte secundária, escrita em
> português, que cita o Guia PMBOK 8) e do documento de adaptação do projeto. **Não é o texto
> oficial.** Conferir os pontos críticos com o guia ou com o orientador e, quando houver trechos
> oficiais, acrescentá-los na seção "Trechos oficiais" ao final.

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

**Estimar**
- Estimativa bottom-up de recursos
- Estimativa análoga e paramétrica
- Análise de alternativas na estimativa
- Antecipação de escassez ou excedente

**Adquirir**
- Negociação e influência para obter recursos
- Recursos alternativos com riscos reconhecidos
- Impacto da indisponibilidade de recursos nos demais planos
- Aquisição de recursos físicos ou virtuais
- Gerente de recursos e ambiente matricial

**Liderar a Equipe**
- Visão e objetivos compartilhados
- Papéis, responsabilidades e lacunas de conhecimento
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

**Monitorar e Controlar**
- Uso planejado vs. real de recursos
- Escassez e excedente de recursos
- Utilização e inatividade de recursos
- Análise de custo-benefício e de tendências
- Teoria das restrições e gargalos
- Melhoria contínua
- Liberação de recursos conforme o plano
- Retrabalho e desperdício como indicadores de eficiência

**Transversais**
- Sustentabilidade na gestão de recursos
- Coordenação entre Recursos, Cronograma, Finanças e Risco

## Tailoring (considerações do domínio)

Abordagem preditiva (planejamento antecipado) vs. adaptativa (equipes auto-organizadas); maturidade da cultura e dos membros da equipe; transparência sobre vieses; papel do gerente de projetos em manter ambiente seguro; contexto da indústria (lean, Kaizen, teoria das restrições); governança organizacional; sustentabilidade; equipes virtuais; ênfase em bem-estar (burnout, desengajamento).

## Trechos oficiais

_(Cole aqui trechos do Guia PMBOK 8, com a seção, quando estiverem disponíveis. Eles têm precedência sobre o resumo acima.)_
