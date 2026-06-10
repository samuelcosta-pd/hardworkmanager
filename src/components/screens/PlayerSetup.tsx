import { useState } from 'react';
import { Plus, Sparkles, Trash2, Users, X, Pencil } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { SoftButton } from '@/components/ui/SoftButton';
import { useGameStore } from '@/store/gameStore';
import { ROLE_LABELS, type PlayerRole, GameDifficulty } from '@/types';
import { AVAILABLE_AVATARES } from '@/data/avatars';

interface Draft {
  name: string;
  role: PlayerRole;
  avatarId?: string;
  avatarName?: string;
  avatarImage?: string;
}

const DEFAULT_ROLES: PlayerRole[] = ['pm', 'techLead', 'uxLead'];

export function PlayerSetup() {
  const setupPlayers = useGameStore((s) => s.setupPlayers);
  const setGameDifficulty = useGameStore((s) => s.setGameDifficulty);
  const gameDifficulty = useGameStore((s) => s.gameDifficulty);
  
  const [drafts, setDrafts] = useState<Draft[]>([
    { name: '', role: 'pm' },
    { name: '', role: 'techLead' },
    { name: '', role: 'uxLead' },
  ]);

  const [avatarModalOpenFor, setAvatarModalOpenFor] = useState<number | null>(null);

  const canAdd = drafts.length < 4;
  const canRemove = drafts.length > 3;

  const addPlayer = () => {
    if (!canAdd) return;
    setDrafts([...drafts, { name: '', role: 'uxLead' }]);
  };

  const removeLast = () => {
    if (!canRemove) return;
    setDrafts(drafts.slice(0, -1));
  };

  const updateDraft = (i: number, patch: Partial<Draft>) => {
    setDrafts(drafts.map((d, idx) => (idx === i ? { ...d, ...patch } : d)));
  };

  const allValid = drafts.every((d) => d.name.trim().length > 0 && !!d.avatarId);

  const getAvatarAssignedTo = (avatarId: string, currentDraftIndex: number) => {
    const foundIndex = drafts.findIndex((d, idx) => d.avatarId === avatarId && idx !== currentDraftIndex);
    if (foundIndex !== -1 && drafts[foundIndex].name.trim()) {
      return drafts[foundIndex].name.trim();
    }
    if (foundIndex !== -1) {
      return `Jogador ${foundIndex + 1}`;
    }
    return null;
  };

  const handleStart = () => {
    if (!allValid) return;
    // Force 4th player to uxLead
    const final = drafts.map((d, i) => (i === 3 ? { ...d, role: 'uxLead' as PlayerRole } : d));
    setupPlayers(final);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-10">
      <div className="mb-8 text-center animate-float-in">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-card shadow-[var(--shadow-soft)]">
          <Sparkles className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Hard Work Manager</h1>
        <p className="mt-2 text-muted-foreground">
          Simulador do domínio Trabalho do Projeto do PMBOK 7ª Edição
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
                  className="flex-1 rounded-2xl bg-card px-4 py-3 text-sm outline-none ring-0 shadow-[var(--shadow-inset-soft)] focus:shadow-[var(--shadow-soft)] min-w-[140px]"
                />
                {isFourth ? (
                  <div className="rounded-2xl bg-card px-4 py-3 text-sm text-muted-foreground shadow-[var(--shadow-soft)] shrink-0">
                    {ROLE_LABELS.uxLead} (obrigatório)
                  </div>
                ) : (
                  <select
                    value={d.role}
                    onChange={(e) => updateDraft(i, { role: e.target.value as PlayerRole })}
                    className="rounded-2xl bg-card px-4 py-3 text-sm outline-none shadow-[var(--shadow-soft)] shrink-0"
                  >
                    {DEFAULT_ROLES.map((r) => (
                      <option key={r} value={r}>
                        {ROLE_LABELS[r]}
                      </option>
                    ))}
                  </select>
                )}
                
                {/* Avatar & Action */}
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-none border-slate-200">
                  {d.avatarImage ? (
                    <div className="flex items-center gap-2 bg-white rounded-full pr-3 p-1 shadow-[var(--shadow-soft)] border border-slate-100">
                      <img 
                        src={d.avatarImage} 
                        alt={d.avatarName} 
                        className="h-8 w-8 rounded-full object-cover bg-slate-100" 
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-white rounded-full pr-3 p-1 shadow-[var(--shadow-soft)] border border-slate-100">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <Users className="h-4 w-4" />
                      </div>
                      <span className="text-xs text-muted-foreground hidden lg:inline-block">Nenhum</span>
                    </div>
                  )}
                  <SoftButton 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => setAvatarModalOpenFor(i)}
                    className="px-3 h-10 ml-auto sm:ml-0"
                  >
                    {d.avatarId ? (
                      <><Pencil className="h-4 w-4 mr-1.5" /> Alterar</>
                    ) : (
                      <><Plus className="h-4 w-4 mr-1.5" /> Escolher</>
                    )}
                  </SoftButton>
                </div>
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

        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Dificuldade da Partida</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: GameDifficulty.EASY, label: 'Fácil', desc: 'Mais eventos operacionais simples e menor quantidade de riscos complexos.' },
              { id: GameDifficulty.MEDIUM, label: 'Médio', desc: 'Equilíbrio entre problemas operacionais, técnicos e organizacionais.' },
              { id: GameDifficulty.HARD, label: 'Difícil', desc: 'Maior presença de crises, conflitos, riscos institucionais e consequências indiretas.' }
            ].map(diff => (
              <label 
                key={diff.id} 
                className={`cursor-pointer rounded-xl border p-4 text-sm flex flex-col gap-1 transition-all ${
                  gameDifficulty === diff.id 
                    ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <input 
                    type="radio" 
                    name="gameDifficulty" 
                    value={diff.id} 
                    checked={gameDifficulty === diff.id}
                    onChange={() => setGameDifficulty(diff.id as GameDifficulty)}
                    className="accent-primary w-4 h-4"
                  />
                  <span className="font-bold text-slate-800">{diff.label}</span>
                </div>
                <span className="text-muted-foreground text-xs leading-relaxed mt-1">{diff.desc}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <SoftButton size="lg" onClick={handleStart} disabled={!allValid}>
            Avançar para os papéis
          </SoftButton>
        </div>
      </SoftCard>
      {avatarModalOpenFor !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl animate-in zoom-in-95">
            <div className="mb-6 flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Escolha o Avatar
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Jogador: {drafts[avatarModalOpenFor].name || `Jogador ${avatarModalOpenFor + 1}`}
                </p>
              </div>
              <button 
                onClick={() => setAvatarModalOpenFor(null)} 
                className="rounded-full p-2 hover:bg-slate-100 transition-colors"
              >
                <X className="h-6 w-6 text-slate-500" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto p-1 custom-scrollbar">
              {AVAILABLE_AVATARES.map(avatar => {
                const assignedTo = getAvatarAssignedTo(avatar.id, avatarModalOpenFor);
                const isSelectedByMe = drafts[avatarModalOpenFor].avatarId === avatar.id;
                const isUnavailable = !!assignedTo;
                
                return (
                  <button
                    key={avatar.id}
                    onClick={() => {
                      if (!isUnavailable) {
                        updateDraft(avatarModalOpenFor, { 
                          avatarId: avatar.id, 
                          avatarName: avatar.name, 
                          avatarImage: avatar.imagePath 
                        });
                        setAvatarModalOpenFor(null);
                      }
                    }}
                    disabled={isUnavailable}
                    className={`group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-4 text-center transition-all duration-200 ${
                      isSelectedByMe 
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm' 
                        : isUnavailable
                          ? 'border-slate-100 bg-slate-50/50 opacity-60 cursor-not-allowed'
                          : 'border-slate-200 bg-white hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    <img 
                      src={avatar.imagePath} 
                      alt={avatar.name}
                      className={`h-20 w-20 rounded-full object-cover shadow-sm bg-slate-100 transition-transform duration-200 ${
                        isUnavailable ? 'grayscale' : 'group-hover:scale-105'
                      }`}
                    />
                    <div>
                      <p className={`font-bold ${isUnavailable ? 'text-slate-500' : 'text-slate-800'}`}>
                        {avatar.name}
                      </p>
                      {isUnavailable ? (
                        <p className="mt-1 text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full inline-block">
                          Selecionado por {assignedTo.split(' ')[0]}
                        </p>
                      ) : avatar.preferredRoles ? (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {avatar.preferredRoles.map(r => ROLE_LABELS[r].split(' ')[0]).join(', ')}
                        </p>
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
