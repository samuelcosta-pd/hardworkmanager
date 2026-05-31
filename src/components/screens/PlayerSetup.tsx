import { useState } from 'react';
import { Plus, Sparkles, Trash2, Users } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS, type PlayerRole } from '@/types';

interface Draft {
  name: string;
  role: PlayerRole;
}

const DEFAULT_ROLES: PlayerRole[] = ['pm', 'commsManager', 'opsManager'];

export function PlayerSetup() {
  const setupPlayers = useGameStore((s) => s.setupPlayers);
  const [drafts, setDrafts] = useState<Draft[]>([
    { name: '', role: 'pm' },
    { name: '', role: 'commsManager' },
    { name: '', role: 'opsManager' },
  ]);

  const canAdd = drafts.length < 4;
  const canRemove = drafts.length > 3;

  const addPlayer = () => {
    if (!canAdd) return;
    setDrafts([...drafts, { name: '', role: 'opsManager' }]);
  };

  const removeLast = () => {
    if (!canRemove) return;
    setDrafts(drafts.slice(0, -1));
  };

  const updateDraft = (i: number, patch: Partial<Draft>) => {
    setDrafts(drafts.map((d, idx) => (idx === i ? { ...d, ...patch } : d)));
  };

  const allValid = drafts.every((d) => d.name.trim().length > 0);

  const handleStart = () => {
    if (!allValid) return;
    // Force 4th player to opsManager
    const final = drafts.map((d, i) => (i === 3 ? { ...d, role: 'opsManager' as PlayerRole } : d));
    setupPlayers(final);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-10">
      <div className="mb-8 text-center animate-float-in">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-card shadow-[var(--shadow-soft)]">
          <Sparkles className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">HardWorkManager</h1>
        <p className="mt-2 text-muted-foreground">
          Simulador colaborativo do domínio Trabalho do Projeto — PMBOK 7
        </p>
      </div>

      <SoftCard className="animate-float-in">
        <div className="mb-6 flex items-center gap-3">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Configuração da Equipe</h2>
          <span className="ml-auto text-xs text-muted-foreground">3 a 4 jogadores</span>
        </div>

        <div className="space-y-4">
          {drafts.map((d, i) => {
            const isFourth = i === 3;
            return (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl bg-muted p-4 sm:flex-row sm:items-center"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-card text-sm font-bold text-primary shadow-[var(--shadow-soft)]">
                  {i + 1}
                </div>
                <input
                  type="text"
                  placeholder={`Nome do jogador ${i + 1}`}
                  value={d.name}
                  onChange={(e) => updateDraft(i, { name: e.target.value })}
                  className="flex-1 rounded-2xl bg-card px-4 py-3 text-sm outline-none ring-0 shadow-[var(--shadow-inset-soft)] focus:shadow-[var(--shadow-soft)]"
                />
                {isFourth ? (
                  <div className="rounded-2xl bg-card px-4 py-3 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
                    {ROLE_LABELS.opsManager} (obrigatório)
                  </div>
                ) : (
                  <select
                    value={d.role}
                    onChange={(e) => updateDraft(i, { role: e.target.value as PlayerRole })}
                    className="rounded-2xl bg-card px-4 py-3 text-sm outline-none shadow-[var(--shadow-soft)]"
                  >
                    {DEFAULT_ROLES.map((r) => (
                      <option key={r} value={r}>
                        {ROLE_LABELS[r]}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <SoftButton variant="ghost" size="sm" onClick={addPlayer} disabled={!canAdd}>
            <Plus className="h-4 w-4" /> Adicionar 4º jogador
          </SoftButton>
          {canRemove && (
            <SoftButton variant="ghost" size="sm" onClick={removeLast}>
              <Trash2 className="h-4 w-4" /> Remover último
            </SoftButton>
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <SoftButton size="lg" onClick={handleStart} disabled={!allValid}>
            Avançar para os papéis
          </SoftButton>
        </div>
      </SoftCard>
    </div>
  );
}
