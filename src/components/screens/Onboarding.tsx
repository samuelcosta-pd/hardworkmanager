import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Gauge,
  LayoutGrid,
  Lock,
  MessageSquare,
  Mic,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { useGameStore } from "@/store/gameStore";
import { SoftButton } from "@/components/ui/SoftButton";
import { Chip } from "@/components/game/Chip";
import { MENTOR } from "@/data/avatars";
import { cn } from "@/lib/utils";

function StepDots({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Passo ${step + 1} de ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-3 rounded-full transition-all",
            i === step ? "w-7 bg-primary" : "w-3 bg-muted",
          )}
        />
      ))}
    </div>
  );
}

function Tile({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-card p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-primary">
        {icon}
      </div>
      <span className="text-2xl font-black leading-tight">{title}</span>
      <span className="text-lg font-semibold leading-snug text-muted-foreground">{text}</span>
    </div>
  );
}

function StepCard({
  n,
  icon,
  title,
  time,
}: {
  n: number;
  icon: ReactNode;
  title: string;
  time: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-xl font-black text-primary-foreground">
          {n}
        </span>
        <span className="text-muted-foreground">{icon}</span>
      </div>
      <span className="text-xl font-black leading-tight">{title}</span>
      <div>
        <Chip>{time}</Chip>
      </div>
    </div>
  );
}

function Rule({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-1 items-center gap-3.5 rounded-2xl bg-muted p-4">
      <span className="shrink-0">{icon}</span>
      <span className="text-lg font-bold leading-snug">{children}</span>
    </div>
  );
}

/** Introdução em 2 passos: boas-vindas e como se joga. */
export function Onboarding() {
  const [step, setStep] = useState(0);
  const goTo = useGameStore((s) => s.goTo);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-8">
      {step === 0 ? (
        <main className="flex flex-1 flex-col justify-center gap-8 animate-float-in">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <img
              src={MENTOR.imagePath}
              alt="Helena, consultora do projeto"
              className="h-32 w-32 shrink-0 rounded-full bg-[#dce3f5] object-cover ring-4 ring-primary sm:h-36 sm:w-36"
            />
            <div className="flex flex-col gap-2">
              <span className="text-lg font-extrabold text-primary">HardWorkManager</span>
              <h1 className="m-0 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Olá! Eu sou a Helena.
              </h1>
              <p className="m-0 max-w-3xl text-xl font-semibold text-muted-foreground">
                Vou acompanhar vocês na modernização do sistema acadêmico da universidade.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Tile
              icon={<Users className="h-7 w-7" />}
              title="Vocês são o comitê"
              text="Três ou quatro pessoas no mesmo dispositivo, cada uma com um papel."
            />
            <Tile
              icon={<LayoutGrid className="h-7 w-7" />}
              title="6 dilemas"
              text="Problemas reais sobre pessoas, ferramentas e infraestrutura."
            />
            <Tile
              icon={<Gauge className="h-7 w-7" />}
              title="4 métricas"
              text="Cada decisão mexe nelas. Se uma cair demais, o projeto para."
            />
          </div>
        </main>
      ) : (
        <main className="flex flex-1 flex-col justify-center gap-6 animate-float-in">
          <h1 className="m-0 text-4xl font-black tracking-tight sm:text-5xl">Como se joga</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard
              n={1}
              icon={<MessageSquare className="h-7 w-7" />}
              title="Leiam o dilema juntos"
              time="2 min"
            />
            <StepCard
              n={2}
              icon={<Lock className="h-7 w-7" />}
              title="Votem em segredo"
              time="45 s cada"
            />
            <StepCard
              n={3}
              icon={<Mic className="h-7 w-7" />}
              title="Debatam se discordarem"
              time="30 s cada · GP por último"
            />
            <StepCard
              n={4}
              icon={<Gauge className="h-7 w-7" />}
              title="Vejam a consequência"
              time="métricas mudam"
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Rule icon={<AlertTriangle className="h-7 w-7 text-critical" />}>
              <strong>Fim de jogo:</strong> Entrega, Qualidade ou Equipe abaixo de 40.
            </Rule>
            <Rule icon={<BookOpen className="h-7 w-7 text-warning" />}>
              <strong>Conhecimento</strong> abaixo de 20 dobra as perdas de Entrega.
            </Rule>
            <Rule icon={<Users className="h-7 w-7 text-primary" />}>
              <strong>Empate</strong> na votação final: o GP decide.
            </Rule>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={MENTOR.imagePath}
              alt=""
              className="h-14 w-14 shrink-0 rounded-full bg-[#dce3f5] object-cover"
            />
            <p className="m-0 text-lg font-bold text-muted-foreground">
              Nem toda boa decisão sai de graça: às vezes vale aceitar um custo agora para proteger
              o projeto depois.
            </p>
          </div>
        </main>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        {step === 0 ? (
          <SoftButton variant="ghost" onClick={() => goTo("setup")}>
            Pular introdução
          </SoftButton>
        ) : (
          <SoftButton variant="ghost" onClick={() => setStep(0)}>
            <ArrowLeft className="h-5 w-5" /> Voltar
          </SoftButton>
        )}
        <StepDots step={step} total={2} />
        {step === 0 ? (
          <SoftButton size="lg" onClick={() => setStep(1)}>
            Como se joga <ArrowRight className="h-5 w-5" />
          </SoftButton>
        ) : (
          <SoftButton size="lg" onClick={() => goTo("setup")}>
            Montar a equipe <ArrowRight className="h-5 w-5" />
          </SoftButton>
        )}
      </div>
    </div>
  );
}
