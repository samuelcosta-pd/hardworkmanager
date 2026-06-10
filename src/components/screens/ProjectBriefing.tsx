import { Calendar, GraduationCap, MapPin, ShieldCheck, Target, User, Users, CheckCircle, XCircle, Clock } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { useGameStore } from '@/store/gameStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MENTOR } from '@/data/avatars';

export function ProjectBriefing() {
  const beginEvent = useGameStore((s) => s.beginEvent);

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <div className="mb-8 animate-float-in">
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Briefing Inicial com Helena</h2>
            <p className="text-slate-600">
              "Atenção, equipe. O cenário é crítico. O projeto anterior de modernização fracassou por falta de alinhamento. Agora, a responsabilidade é de vocês. Leiam o escopo com atenção antes de começarmos."
            </p>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-primary">Contexto do Projeto</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Modernização do Sistema de Gestão Acadêmica</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O sistema atual da instituição sofre com quedas nos períodos de matrícula, usabilidade defasada e alto acoplamento de código. 
          O desafio de vocês é entregar a nova versão equilibrando a <strong>Eficiência</strong>, a <strong>Qualidade Técnica</strong> e a <strong>Saúde da Equipe</strong> frente a imprevistos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <SoftCard className="animate-float-in">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Seu Papel na Simulação</h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                <li><strong>Quem você representa:</strong> O Comitê Gestor (Liderança do Projeto).</li>
                <li><strong>Sua responsabilidade:</strong> Tomar decisões táticas e colegiadas para gerenciar crises.</li>
                <li><strong>Impacto:</strong> Suas decisões definem o futuro tecnológico da instituição e o bem-estar dos desenvolvedores.</li>
              </ul>
            </div>
          </div>
        </SoftCard>

        <SoftCard className="animate-float-in">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">O Que Precisa Ser Entregue</h2>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                <li>Novo módulo de matrículas online.</li>
                <li>Emissão otimizada de históricos.</li>
                <li>Integração com novo sistema de bolsas.</li>
              </ul>
            </div>
          </div>
        </SoftCard>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <SoftCard className="animate-float-in">
          <Clock className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Prazo</p>
          <p className="mt-1 font-semibold text-sm">3 Meses</p>
        </SoftCard>
        <SoftCard className="animate-float-in">
          <Calendar className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Sprints</p>
          <p className="mt-1 font-semibold text-sm">6 Sprints (15 dias)</p>
        </SoftCard>
        <SoftCard className="animate-float-in">
          <Users className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Stakeholders</p>
          <p className="mt-1 font-semibold text-sm">Reitoria e Pró-Reitoria</p>
        </SoftCard>
        <SoftCard className="animate-float-in">
          <GraduationCap className="mb-3 h-5 w-5 text-primary" />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Público</p>
          <p className="mt-1 font-semibold text-sm">Alunos e Docentes</p>
        </SoftCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <SoftCard className="animate-float-in border-l-4 border-l-green-500">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
            <div>
              <h2 className="text-md font-semibold">Critérios de Sucesso</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Entregar os módulos críticos mantendo Eficiência, Qualidade e Saúde da Equipe acima de 40 pontos no término da simulação.
              </p>
            </div>
          </div>
        </SoftCard>
        <SoftCard className="animate-float-in border-l-4 border-l-red-500">
          <div className="flex items-start gap-4">
            <XCircle className="h-6 w-6 text-red-500 shrink-0" />
            <div>
              <h2 className="text-md font-semibold">Critérios de Falha</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Qualquer uma das três métricas principais chegar abaixo de 40 pontos (nível crítico) durante os eventos.
              </p>
            </div>
          </div>
        </SoftCard>
      </div>

      <SoftCard className="mb-8 animate-float-in" variant="inset">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Métricas Iniciais
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Eficiência', text: 'Estável' },
            { label: 'Qualidade', text: 'Estável' },
            { label: 'Saúde da Equipe', text: 'Estável' },
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
          Abrir caixa de entrada e Começar
        </SoftButton>
      </div>
    </div>
  );
}
