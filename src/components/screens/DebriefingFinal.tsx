import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, Check, RotateCcw, X } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { AltBadge } from "@/components/game/AltShape";
import { Chip } from "@/components/game/Chip";
import { LEVEL_BG, LEVEL_LABEL, LEVEL_TEXT, METRIC_META, levelOf } from "@/components/game/GameHud";
import { useGameStore } from "@/store/gameStore";
import { ALL_DYNAMIC_EVENTS as GAME_EVENTS } from "@/data/dynamicEvents";
import { MENTOR } from "@/data/avatars";
import { shortTitle } from "@/lib/text";
import { cn } from "@/lib/utils";

const STEPS = ["Resultado", "Conceitos do PMBOK 8", "Na vida profissional"] as const;

/** Debriefing em 3 passos curtos: resultado, conceitos trabalhados e aplicação profissional. */
export function DebriefingFinal() {
  const [step, setStep] = useState(0);
  const { decisions, metrics, gameOverReason, matchDeck, events, quitGame } = useGameStore();
  const isSuccess = !gameOverReason;

  const go = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const learnings = decisions.map((d) => {
    const ev =
      matchDeck.find((e) => e.id === d.eventId) ||
      events.find((e) => e.id === d.eventId) ||
      GAME_EVENTS.find((e) => e.id === d.eventId);
    const alt = ev?.alternatives.find((a) => a.key === d.chosenAlternative);
    return {
      title: shortTitle(d.eventTitle),
      key: d.chosenAlternative,
      good: alt?.goodBad === "good",
      concept: alt?.pmbokConcept ?? "",
      lesson: alt?.learnings?.[0] ?? "",
    };
  });
  const goodCount = learnings.filter((l) => l.good).length;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8">
      <nav className="flex flex-wrap items-center gap-2 pr-16" aria-label="Etapas do debriefing">
        {STEPS.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => go(i)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-base font-extrabold transition",
              i === step
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
            aria-current={i === step ? "step" : undefined}
          >
            <span>{i + 1}</span>
            {label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center animate-float-in">
        <img
          src={MENTOR.imagePath}
          alt="Helena"
          className="h-20 w-20 shrink-0 rounded-full bg-[#dce3f5] object-cover ring-4 ring-primary"
        />
        <div className="flex flex-col gap-1">
          <span
            className={cn("text-lg font-extrabold", isSuccess ? "text-success" : "text-critical")}
          >
            {isSuccess ? "Projeto concluído" : "O projeto parou"}
          </span>
          <h1 className="m-0 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            {step === 0 &&
              (isSuccess
                ? "Vocês chegaram ao fim. Vamos olhar o caminho."
                : "Vamos entender o que levou a isso.")}
            {step === 1 && "O que cada decisão ensinou"}
            {step === 2 && "E fora do jogo?"}
          </h1>
        </div>
      </div>

      {step === 0 && (
        <div className="flex flex-col gap-5 animate-float-in">
          {gameOverReason && (
            <p className="m-0 rounded-2xl bg-critical p-4 text-lg font-bold text-[#0e1633]">
              {gameOverReason}
            </p>
          )}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-muted p-4">
              <div className="text-4xl font-black tabular-nums">{decisions.length}</div>
              <div className="text-base font-bold text-muted-foreground">decisões</div>
            </div>
            <div className="rounded-2xl bg-muted p-4">
              <div className="text-4xl font-black tabular-nums">
                {decisions.filter((d) => d.wasUnanimous).length}
              </div>
              <div className="text-base font-bold text-muted-foreground">unânimes</div>
            </div>
            <div className="rounded-2xl bg-muted p-4">
              <div className="text-4xl font-black tabular-nums">{goodCount}</div>
              <div className="text-base font-bold text-muted-foreground">recomendadas</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {METRIC_META.map((m) => {
              const v = metrics[m.key];
              const level = levelOf(m.key, v);
              return (
                <div
                  key={m.key}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-4"
                >
                  <span
                    className={cn(
                      "flex items-center gap-2 text-base font-extrabold",
                      LEVEL_TEXT[level],
                    )}
                  >
                    {m.icon}
                    <span className="text-muted-foreground">{m.long}</span>
                  </span>
                  <span className="text-4xl font-black tabular-nums">{v}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn("h-full rounded-full", LEVEL_BG[level])}
                      style={{ width: `${v}%` }}
                    />
                  </div>
                  <span className={cn("text-sm font-extrabold", LEVEL_TEXT[level])}>
                    {LEVEL_LABEL[level]}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-5">
            <span className="text-xl font-black">Decisões da partida</span>
            {learnings.map((l, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl bg-muted p-3">
                <AltBadge k={l.key} size="sm" />
                <span className="flex-1 text-base font-bold">{l.title}</span>
                {l.good ? (
                  <Chip tone="success">
                    <Check className="h-4 w-4" strokeWidth={3} /> recomendada
                  </Chip>
                ) : (
                  <Chip tone="warning">
                    <X className="h-4 w-4" strokeWidth={3} /> arriscada
                  </Chip>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 animate-float-in">
          {learnings.length === 0 && (
            <p className="text-lg text-muted-foreground">Nenhum conceito registrado.</p>
          )}
          {learnings.map((l, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-5"
            >
              <span className="text-base font-bold text-muted-foreground">{l.title}</span>
              <span className="flex items-center gap-2 text-xl font-black text-primary">
                <BookOpen className="h-5 w-5 shrink-0" /> {l.concept}
              </span>
              {l.lesson && <p className="m-0 text-lg font-semibold leading-relaxed">{l.lesson}</p>}
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 animate-float-in">
          <span className="flex items-center gap-2 text-xl font-black">
            <Briefcase className="h-6 w-6 text-primary" /> Em projetos reais
          </span>
          <ul className="m-0 flex flex-col gap-3 pl-6 text-xl font-semibold leading-relaxed">
            <li>Garantam as pessoas e os recursos certos no momento certo.</li>
            <li>Negociem prazos com base na capacidade real da equipe.</li>
            <li>Protejam o time contra sobrecarga e horas extras crônicas.</li>
            <li>Documentem e compartilhem conhecimento para não depender de uma só pessoa.</li>
            <li>Acompanhem o uso real de ambientes, ferramentas e licenças.</li>
          </ul>
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
        {step > 0 ? (
          <SoftButton variant="ghost" onClick={() => go(step - 1)}>
            <ArrowLeft className="h-5 w-5" /> Voltar
          </SoftButton>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <SoftButton size="lg" onClick={() => go(step + 1)}>
            {STEPS[step + 1]} <ArrowRight className="h-5 w-5" />
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={quitGame}>
            <RotateCcw className="h-5 w-5" /> Jogar de novo
          </SoftButton>
        )}
      </div>
    </div>
  );
}
