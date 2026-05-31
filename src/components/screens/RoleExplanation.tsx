import { Briefcase, MessageSquareHeart, Wrench } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS, type PlayerRole } from '@/types';

const ROLE_INFO: Record<PlayerRole, { icon: React.ReactNode; mindset: string; description: string }> = {
  pm: {
    icon: <Briefcase className="h-5 w-5" />,
    mindset: 'Mindset de Dono',
    description:
      'Você assume a responsabilidade final. Tenha iniciativa proativa para remover impedimentos e blindar a equipe.',
  },
  commsManager: {
    icon: <MessageSquareHeart className="h-5 w-5" />,
    mindset: 'Guardião da Experiência',
    description:
      'O design e as mídias sociais ditam a percepção de Qualidade do evento.',
  },
  opsManager: {
    icon: <Wrench className="h-5 w-5" />,
    mindset: 'O Motor do Evento',
    description:
      'Lida com a logística real. A moral dos bolsistas depende da sua capacidade de distribuir tarefas.',
  },
};

export function RoleExplanation() {
  const players = useGameStore((s) => s.players);
  const startGame = useGameStore((s) => s.startGame);

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <div className="mb-10 text-center animate-float-in">
        <h1 className="text-3xl font-bold tracking-tight">Os Três Papéis</h1>
        <p className="mt-2 text-muted-foreground">
          A mentalidade exigida de cada um para conduzir o WTISC
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {players.map((p, i) => {
          const info = ROLE_INFO[p.role];
          return (
            <SoftCard
              key={p.id}
              className="flex flex-col items-center text-center animate-float-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Avatar3D initials={p.name.slice(0, 2)} role={p.role} size="lg" />
              <h3 className="mt-4 text-base font-semibold">{p.name}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {ROLE_LABELS[p.role]}
              </p>
              <div className="my-4 flex items-center gap-2 rounded-2xl bg-muted px-3 py-2 text-sm font-medium text-primary">
                {info.icon}
                {info.mindset}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{info.description}</p>
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
