import { Briefcase, Terminal, Palette } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS, type PlayerRole } from '@/types';

const ROLE_INFO: Record<PlayerRole, { icon: React.ReactNode; mindset: string; description: string }> = {
  pm: {
    icon: <Briefcase className="h-5 w-5" />,
    mindset: 'Visão Estratégica e Liderança',
    description:
      'Você assume a responsabilidade geral pelo sucesso do projeto. Tenha iniciativa para remover impedimentos, proteger a equipe contra demandas desnecessárias e alinhar as partes interessadas.',
  },
  techLead: {
    icon: <Terminal className="h-5 w-5" />,
    mindset: 'Guardião da Estabilidade Técnica',
    description:
      'O sistema antigo é complexo e frágil. Sua missão é garantir a robustez da estrutura do sistema, evitar retrabalho crônico e manter a infraestrutura de servidores estável.',
  },
  uxLead: {
    icon: <Palette className="h-5 w-5" />,
    mindset: 'Defensor do Usuário e da Inclusão',
    description:
      'O sistema atual é difícil de usar. Você luta por telas intuitivas, design acessível a pessoas com deficiência e pela melhoria contínua da experiência de alunos e professores.',
  },
};

export function RoleExplanation() {
  const players = useGameStore((s) => s.players);
  const startGame = useGameStore((s) => s.startGame);

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <div className="mb-10 text-center animate-float-in">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Os Três Papéis</h1>
        <p className="mt-2 text-base sm:text-lg text-muted-foreground">
          A mentalidade exigida de cada liderança para equilibrar os recursos do projeto
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {players.map((p, i) => {
          const info = ROLE_INFO[p.role];
          return (
            <SoftCard
              key={p.id}
              className="flex flex-col items-center text-center animate-float-in p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Avatar3D initials={p.name.slice(0, 2)} role={p.role} imageUrl={p.avatarImage} size="lg" />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-foreground">{p.name}</h3>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                {ROLE_LABELS[p.role]}
              </p>
              <div className="my-4 flex items-center gap-2 rounded-2xl bg-muted px-4 py-2 text-base font-semibold text-primary">
                {info.icon}
                {info.mindset}
              </div>
              <p className="text-base leading-relaxed text-slate-600">{info.description}</p>
            </SoftCard>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center animate-float-in">
        <SoftButton size="lg" onClick={startGame}>
          Entendido, assumir responsabilidades
        </SoftButton>
      </div>
    </div>
  );
}
