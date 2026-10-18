import { useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { SoftCard } from "@/components/ui/SoftCard";
import { SoftButton } from "@/components/ui/SoftButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  TrendingUp,
  Award,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { ALL_DYNAMIC_EVENTS as GAME_EVENTS } from "@/data/dynamicEvents";
import { metricLevel } from "@/lib/gameLogic";
import { MENTOR } from "@/data/avatars";

export function DebriefingFinal() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { decisions, metrics, gameOverReason, matchDeck, events, quitGame } = useGameStore();

  const handleSetStep = (newStep: 1 | 2 | 3) => {
    setStep(newStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allLearnings = decisions.map((d) => {
    const event =
      matchDeck?.find((e) => e.id === d.eventId) ||
      events?.find((e) => e.id === d.eventId) ||
      GAME_EVENTS.find((e) => e.id === d.eventId);
    const alt = event?.alternatives.find((a) => a.key === d.chosenAlternative);
    return {
      eventTitle: d.eventTitle,
      pmbokConcept: alt?.pmbokConcept ?? "",
      learnings: alt?.learnings?.join(". ") ?? "",
    };
  });


  const efLevel = metricLevel(metrics.capacidadeEntrega);
  const quaLevel = metricLevel(metrics.qualidadeProduto);
  const seLevel = metricLevel(metrics.saudeEquipe);

  const isSuccess = !gameOverReason;

  const reflectionText = (() => {
    const good: string[] = [];
    const bad: string[] = [];
    if (efLevel === "stable") good.push("Capacidade de Entrega (Velocity)");
    else if (efLevel === "critical") bad.push("Capacidade de Entrega (Velocity)");
    if (quaLevel === "stable") good.push("Qualidade do Produto");
    else if (quaLevel === "critical") bad.push("Qualidade do Produto");
    if (seLevel === "stable") good.push("Saúde da Equipe");
    else if (seLevel === "critical") bad.push("Saúde da Equipe");
    return { good, bad };
  })();

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      {/* Indicador de Etapas do Debriefing */}
      <div className="mb-8 animate-float-in">
        <div className="flex items-center justify-between max-w-xl mx-auto mb-2">
          {[
            { stepNumber: 1, label: "Resumo & Reflexão" },
            { stepNumber: 2, label: "Conceitos PMBOK 8" },
            { stepNumber: 3, label: "Aplicação Profissional" },
          ].map((item, index) => {
            const isActive = step === item.stepNumber;
            const isPassed = step > item.stepNumber;
            return (
              <div key={item.stepNumber} className="flex items-center flex-1 last:flex-none">
                <button
                  type="button"
                  onClick={() => handleSetStep(item.stepNumber as 1 | 2 | 3)}
                  className={`flex items-center gap-2 group focus:outline-none transition-colors cursor-pointer ${
                    isActive
                      ? "text-primary font-bold"
                      : isPassed
                        ? "text-slate-700 font-medium"
                        : "text-slate-400"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20"
                        : isPassed
                          ? "bg-primary/20 text-primary"
                          : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {item.stepNumber}
                  </span>
                  <span className="text-xs sm:text-sm hidden sm:inline">{item.label}</span>
                </button>
                {index < 2 && (
                  <div
                    className={`flex-1 h-0.5 mx-3 transition-all ${
                      step > index + 1 ? "bg-primary" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* TELA 1: Informações até "Reflexão Final" */}
      {step === 1 && (
        <div className="animate-float-in">
          {/* Helena's closing */}
          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-8 animate-float-in">
            <Avatar className="h-16 w-16 border-2 border-primary/20 shrink-0">
              <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
              <AvatarFallback>HE</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Debriefing Final : {MENTOR.name}</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-1">
                {isSuccess
                  ? '"Parabéns, equipe! Vocês concluíram o projeto. Vamos revisar juntos o que aprendemos para consolidar o conhecimento."'
                  : `"Infelizmente o projeto não pôde ser concluído. Motivo: ${gameOverReason}. Mas o mais importante agora é refletir sobre as decisões tomadas."`}
              </p>
            </div>
          </div>

          <div className="mb-8 text-center animate-float-in">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {isSuccess ? "🎉 Projeto Concluído" : "⚠️ Projeto Encerrado"}
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
                <p className="text-2xl font-bold">
                  {decisions.filter((d) => d.wasUnanimous).length}
                </p>
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
                {
                  label: "Capacidade de Entrega",
                  value: metrics.capacidadeEntrega,
                  level: efLevel,
                },
                { label: "Qualidade do Produto", value: metrics.qualidadeProduto, level: quaLevel },
                { label: "Saúde da Equipe", value: metrics.saudeEquipe, level: seLevel },
              ].map((m) => (
                <div
                  key={m.label}
                  className={`rounded-2xl p-4 text-center ${
                    m.level === "critical"
                      ? "bg-red-50 border border-red-200"
                      : m.level === "warning"
                        ? "bg-amber-50 border border-amber-200"
                        : "bg-green-50 border border-green-200"
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
                ✅ <strong>Pontos fortes:</strong> A equipe manteve {reflectionText.good.join(", ")}{" "}
                em bom nível ao longo da simulação.
              </p>
            )}
            {reflectionText.bad.length > 0 && (
              <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg mb-2">
                ❌ <strong>Atenção:</strong> {reflectionText.bad.join(", ")} atingiu nível crítico.
                Reflitam sobre quais decisões levaram a isso.
              </p>
            )}
            {reflectionText.good.length === 0 && reflectionText.bad.length === 0 && (
              <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg mb-2">
                ℹ️ <strong>Equilíbrio:</strong> A equipe manteve os indicadores em níveis
                intermediários ao longo do projeto.
              </p>
            )}
          </SoftCard>

          {/* Botão de Navegação para Tela 2 */}
          <div className="flex justify-end animate-float-in mt-8">
            <SoftButton size="lg" onClick={() => handleSetStep(2)}>
              Avançar para Conceitos PMBOK 8
              <ArrowRight className="h-4 w-4 ml-2" />
            </SoftButton>
          </div>
        </div>
      )}

      {/* TELA 2: Somente os Conceitos PMBOK 8 Aprendidos */}
      {step === 2 && (
        <div className="animate-float-in">
          {/* Helena's closing - Contexto PMBOK */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 animate-float-in">
            <Avatar className="h-16 w-16 border-2 border-primary/20">
              <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
              <AvatarFallback>HE</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Debriefing Final : {MENTOR.name}</h2>
              <p className="text-slate-600">
                "Cada desafio enfrentado pelo time esteve diretamente conectado aos processos e
                práticas essenciais do Domínio de Recursos (PMBOK 8). Vejam a síntese dos conceitos trabalhados:"
              </p>
            </div>
          </div>

          <div className="mb-8 text-center animate-float-in">
            <h1 className="text-3xl font-bold tracking-tight">📘 Conceitos de Recursos (PMBOK 8) Aprendidos</h1>
          </div>

          {/* Conceitos PMBOK Aprendidos */}
          <SoftCard className="mb-8 animate-float-in">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Conceitos de Recursos Aprendidos</h2>
            </div>
            {allLearnings.length === 0 ? (
              <p className="text-base text-slate-500 italic p-4 text-center">
                Nenhum conceito registrado nesta rodada.
              </p>
            ) : (
              <div className="space-y-4">
                {allLearnings.map((l, i) => (
                  <div key={i} className="bg-muted rounded-xl p-4 sm:p-5">
                    <p className="text-base sm:text-lg font-bold text-foreground">{l.eventTitle}</p>
                    <p className="text-sm sm:text-base text-primary mt-1 font-bold">📘 {l.pmbokConcept}</p>
                    <p className="text-base text-muted-foreground mt-1.5 leading-relaxed">
                      {l.learnings}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </SoftCard>

          {/* Botões de Navegação */}
          <div className="flex items-center justify-between animate-float-in mt-8 gap-4">
            <SoftButton variant="ghost" size="lg" onClick={() => handleSetStep(1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Resumo
            </SoftButton>
            <SoftButton size="lg" onClick={() => handleSetStep(3)}>
              Avançar para Aplicação Profissional
              <ArrowRight className="h-4 w-4 ml-2" />
            </SoftButton>
          </div>
        </div>
      )}

      {/* TELA 3: Aplicação Profissional */}
      {step === 3 && (
        <div className="animate-float-in">
          {/* Helena's closing - Contexto Aplicação Profissional */}
          <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-8 animate-float-in">
            <Avatar className="h-16 w-16 border-2 border-primary/20 shrink-0">
              <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
              <AvatarFallback>HE</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Debriefing Final : {MENTOR.name}</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-1">
                "Para consolidar nossa jornada, vejam como as lições deste projeto se traduzem na
                prática profissional e no dia a dia da liderança ágil."
              </p>
            </div>
          </div>

          <div className="mb-8 text-center animate-float-in">
            <h1 className="text-3xl font-bold tracking-tight">💼 Aplicação Profissional</h1>
          </div>

          {/* Aplicação Profissional */}
          <SoftCard className="mb-8 animate-float-in border-t-4 border-t-primary p-6">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Aplicação Profissional</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Os cenários que vocês enfrentaram refletem dilemas reais do dia a dia de projetos de
              software. A habilidade de equilibrar eficiência operacional, qualidade técnica e saúde
              da equipe é central no Domínio de Desempenho <strong>Recursos</strong>{" "}
              (PMBOK 8). Em projetos reais, busquem sempre garantir os recursos certos no momento e
              lugar certos, negociar prazos com base na capacidade real, proteger o time contra
              sobrecarga e investir na eficiência dos ambientes e ferramentas, exatamente como vocês praticaram aqui.
            </p>
          </SoftCard>

          {/* Botões de Ação Final */}
          <div className="flex items-center justify-between animate-float-in mt-8 gap-4">
            <SoftButton variant="ghost" size="lg" onClick={() => handleSetStep(2)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Conceitos PMBOK
            </SoftButton>
            <SoftButton size="lg" onClick={quitGame}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reiniciar Simulação
            </SoftButton>
          </div>
        </div>
      )}
    </div>
  );
}
