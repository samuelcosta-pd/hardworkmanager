import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS } from '@/types';
import { ROLES_DETAILS } from '@/data/roles';

export function RoleExplanation() {
  const players = useGameStore((s) => s.players);
  const startGame = useGameStore((s) => s.startGame);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <div className="mb-10 text-center animate-float-in">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3.5 py-1.5 rounded-full">
          PMBOK 8ª Edição · Domínio de Recursos
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Papéis dos Jogadores na Partida
        </h1>
        <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Cada participante assume uma perspectiva essencial do Domínio de Recursos. Conheça as responsabilidades, alçadas e a lente decisória de cada papel no comitê gestor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {players.map((p, i) => {
          const detail = ROLES_DETAILS[p.role];

          return (
            <SoftCard
              key={p.id}
              className="flex flex-col text-left p-7 relative overflow-hidden animate-float-in bg-card border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Cabeçalho do Jogador */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <Avatar3D initials={p.name.slice(0, 2)} role={p.role} imageUrl={p.avatarImage} size="md" />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-foreground truncate">{p.name}</h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mt-0.5">
                    {ROLE_LABELS[p.role]}
                  </p>
                </div>
              </div>

              {/* Badge de Mindset */}
              <div className="my-4 inline-block rounded-xl bg-muted px-3.5 py-2 text-xs font-semibold text-foreground">
                {detail.mindset}
              </div>

              {/* Descrição / Resumo */}
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {detail.summary}
              </p>

              {/* Responsabilidades Principais */}
              <div className="space-y-2 text-sm text-slate-700 flex-1">
                <p className="font-bold text-muted-foreground uppercase tracking-wider text-xs">
                  O que você decide:
                </p>
                {detail.responsibilities.slice(0, 2).map((r, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{r}</span>
                  </div>
                ))}
              </div>

              {/* O que NÃO é de sua responsabilidade */}
              <div className="mt-5 pt-4 border-t border-slate-100 text-sm text-slate-600">
                <p className="font-bold text-muted-foreground uppercase tracking-wider text-xs mb-1.5">
                  O que NÃO é sua alçada:
                </p>
                <div className="flex items-start gap-2 text-slate-500">
                  <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{detail.notResponsibleFor[0]}</span>
                </div>
              </div>

              {/* Pergunta de Ouro */}
              <div className="mt-5 rounded-2xl bg-slate-50 p-3.5 text-sm italic text-slate-700 border border-slate-200/60 leading-relaxed">
                "{detail.keyQuestion}"
              </div>
            </SoftCard>
          );
        })}
      </div>

      <div className="flex justify-center">
        <SoftButton size="lg" onClick={startGame}>
          Entendido, avançar para o Briefing do Projeto <ArrowRight className="ml-2 h-4 w-4" />
        </SoftButton>
      </div>
    </div>
  );
}
