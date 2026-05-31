import { Calendar, GraduationCap, MapPin, ShieldCheck, Target } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { useGameStore } from '@/store/gameStore';

export function ProjectBriefing() {
  const beginEvent = useGameStore((s) => s.beginEvent);

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <div className="mb-8 animate-float-in">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Briefing do Projeto</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Projeto SIGAA: Modernização e Performance</h1>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Vocês são o comitê gestor responsável por reconstruir o SIGAA. O sistema legado sofre com quedas nos períodos críticos, UX defasada e alto acoplamento. O desafio de vocês é entregar a nova versão equilibrando o Orçamento do projeto, a Qualidade do software e a Moral da equipe de desenvolvimento frente a imprevistos e stakeholders exigentes.
        </p>
      </div>

      <SoftCard className="mb-6 animate-float-in">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Módulos Críticos</h2>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Matrículas online, emissão de históricos, integração com bolsas e redesenho completo de fluxos para alunos e docentes.
            </p>
          </div>
        </div>
      </SoftCard>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <SoftCard className="animate-float-in">
          <Calendar className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Prazo Limite</p>
          <p className="mt-1 font-semibold">Período de Matrículas</p>
        </SoftCard>
        <SoftCard className="animate-float-in">
          <MapPin className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Infraestrutura</p>
          <p className="mt-1 font-semibold">Nuvem da UFC</p>
        </SoftCard>
        <SoftCard className="animate-float-in">
          <GraduationCap className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Público-Alvo</p>
          <p className="mt-1 font-semibold">Alunos e Professores</p>
        </SoftCard>
      </div>

      <SoftCard className="mb-6 animate-float-in">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--pm)]/20 text-[var(--pm)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Expectativas dos Stakeholders</h2>
            <p className="mt-1 leading-relaxed text-sm text-muted-foreground">
              A <strong className="text-foreground">Reitoria e a PROGRAD</strong> exigem alta estabilidade nas matrículas e uma UX que reduza os chamados de suporte técnico. Sob forte pressão de orçamento, qualidade e moral, vocês têm autonomia para decidir como atingir esses objetivos.
            </p>
          </div>
        </div>
      </SoftCard>

      <SoftCard className="mb-8 animate-float-in" variant="inset">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Sinais Qualitativos Iniciais
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Orçamento', text: 'Estável' },
            { label: 'Qualidade', text: 'Estável' },
            { label: 'Moral', text: 'Estável' },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-card p-3 shadow-[var(--shadow-success)]">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="font-semibold text-success-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </SoftCard>

      <div className="flex justify-end">
        <SoftButton size="lg" onClick={beginEvent}>
          Abrir caixa de entrada
        </SoftButton>
      </div>
    </div>
  );
}
