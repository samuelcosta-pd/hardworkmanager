import { Award, RotateCcw, Skull } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { Avatar3D } from '@/components/ui/Avatar3D';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS } from '@/types';

interface Props {
  outcome: 'gameover' | 'completed';
}

export function GameOver({ outcome }: Props) {
  const { decisions, metrics, gameOverReason, reset } = useGameStore();
  const isFail = outcome === 'gameover';

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-12">
      <SoftCard
        className={`mb-8 text-center animate-pop-in ${
          isFail ? 'shadow-[var(--shadow-critical)]' : 'shadow-[var(--shadow-success)]'
        }`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-muted">
          {isFail ? (
            <Skull className="h-7 w-7 text-critical-foreground" />
          ) : (
            <Award className="h-7 w-7 text-success-foreground" />
          )}
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {isFail ? 'Game Over' : 'Sucesso'}
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          {isFail ? 'O Projeto Sistema de Gerenciamento Acadêmico não chegou ao fim' : 'O Projeto Sistema de Gerenciamento Acadêmico foi concluído com sucesso'}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {isFail
            ? gameOverReason ?? 'A pressão foi maior que a capacidade da equipe.'
            : 'A equipe equilibrou orçamento, qualidade e moral até a entrega final. A Reitoria e a PROGRAD estão orgulhosas.'}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {(['capacidadeEntrega', 'qualidadeProduto', 'saudeEquipe'] as const).map((k) => (
            <div key={k} className="rounded-2xl bg-muted p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {k === 'capacidadeEntrega' ? 'Capacidade de Entrega' : k === 'qualidadeProduto' ? 'Qualidade do Produto' : 'Saúde da Equipe'}
              </p>
              <p className="mt-1 text-2xl font-bold tabular-nums">{metrics[k]}</p>
            </div>
          ))}
        </div>
      </SoftCard>

      <h2 className="mb-3 px-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Histórico de decisões
      </h2>
      <div className="space-y-3">
        {decisions.map((d, i) => (
          <SoftCard key={i} className="animate-float-in" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-accent text-sm font-bold text-accent-foreground">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{d.eventTitle}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  Alternativa {d.chosenAlternative.toUpperCase()} ·{' '}
                  {d.wasUnanimous ? 'unânime' : 'com divergência'}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{d.chosenText}</p>
                {!d.wasUnanimous && d.dissentingPlayer && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Avatar3D
                      initials={d.dissentingPlayer.name.slice(0, 2)}
                      role={d.dissentingPlayer.role}
                      imageUrl={d.dissentingPlayer.avatarImage}
                      size="sm"
                    />
                    Voto divergente:{' '}
                    <span className="font-medium text-foreground">
                      {d.dissentingPlayer.name}
                    </span>{' '}
                    ({ROLE_LABELS[d.dissentingPlayer.role]}) em{' '}
                    {d.dissentingAlternative?.toUpperCase()}
                  </div>
                )}
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-muted px-3 py-1">
                    Capacidade de Entrega: <b>{d.metricsAfter.capacidadeEntrega}</b>
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1">
                    Qualidade: <b>{d.metricsAfter.qualidadeProduto}</b>
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1">
                    Saúde da Equipe: <b>{d.metricsAfter.saudeEquipe}</b>
                  </span>
                </div>
              </div>
            </div>
          </SoftCard>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <SoftButton size="lg" onClick={reset}>
          <RotateCcw className="h-4 w-4" /> Jogar novamente
        </SoftButton>
      </div>
    </div>
  );
}
