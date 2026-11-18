import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Dices, Pencil, Plus, Trash2, X } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { Chip } from "@/components/game/Chip";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS, type PlayerRole } from "@/types";
import { AVAILABLE_AVATARES } from "@/data/avatars";
import { ROLE_CARDS } from "@/data/roles";
import { shuffle } from "@/lib/gameLogic";
import { cn } from "@/lib/utils";

interface Draft {
  name: string;
  avatarId?: string;
  avatarName?: string;
  avatarImage?: string;
}

const ROLE_TITLE = (role: PlayerRole) =>
  role === "pm" ? "Gerente de Projetos (GP)" : ROLE_LABELS[role];

/**
 * Sorteio dos papéis: sempre há um GP (ele desempata a votação); os demais jogadores recebem,
 * também por sorteio, Líder Técnico e/ou Líder de Design e Telas, sem repetir.
 */
function drawRoles(count: number): PlayerRole[] {
  const others = shuffle<PlayerRole>(["techLead", "uxLead"]);
  const roles = (["pm", ...others] as PlayerRole[]).slice(0, count);
  return shuffle(roles);
}

const ROLE_CYCLE: PlayerRole[] = ["pm", "techLead", "uxLead"];

export function PlayerSetup() {
  const setupPlayers = useGameStore((s) => s.setupPlayers);
  const goTo = useGameStore((s) => s.goTo);
  // 2 jogadores obrigatórios e um 3º opcional; os papéis são sorteados depois do cadastro.
  const [drafts, setDrafts] = useState<Draft[]>([{ name: "" }, { name: "" }]);
  const [drawn, setDrawn] = useState<PlayerRole[] | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [tick, setTick] = useState(0);
  const [avatarModalOpenFor, setAvatarModalOpenFor] = useState<number | null>(null);

  const updateDraft = (i: number, patch: Partial<Draft>) =>
    setDrafts(drafts.map((d, idx) => (idx === i ? { ...d, ...patch } : d)));

  const missing = drafts
    .map((d, i) => ({ d, i }))
    .filter(({ d }) => !d.name.trim() || !d.avatarId)
    .map(({ d, i }) => {
      const what =
        !d.name.trim() && !d.avatarId
          ? "o nome e o avatar"
          : !d.name.trim()
            ? "o nome"
            : "o avatar";
      return `${what} do Jogador ${i + 1}`;
    });
  // Nomes repetidos confundem a votação e o debate ("Ana" e "Ana").
  const names = drafts.map((d) => d.name.trim().toLocaleLowerCase("pt-BR")).filter(Boolean);
  const hasDuplicateName = new Set(names).size !== names.length;
  const allValid = missing.length === 0 && !hasDuplicateName;

  const takenBy = (avatarId: string, current: number) => {
    const i = drafts.findIndex((d, idx) => d.avatarId === avatarId && idx !== current);
    if (i === -1) return null;
    return drafts[i].name.trim() || `Jogador ${i + 1}`;
  };

  // Animação do sorteio: os papéis "giram" por ~2,5 s e depois param no resultado.
  useEffect(() => {
    if (!drawn || revealed) return;
    const spin = setInterval(() => setTick((t) => t + 1), 120);
    const stop = setTimeout(() => setRevealed(true), 2600);
    return () => {
      clearInterval(spin);
      clearTimeout(stop);
    };
  }, [drawn, revealed]);

  const startDraw = () => {
    if (!allValid) return;
    setRevealed(false);
    setDrawn(drawRoles(drafts.length));
  };

  if (drawn) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 py-8 text-center sm:px-8">
        <div className="flex flex-col items-center gap-3 animate-pop-in">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Dices className={cn("h-10 w-10", !revealed && "animate-spin")} />
          </span>
          <h1 className="m-0 text-4xl font-black tracking-tight sm:text-5xl" role="status">
            {revealed ? "Papéis sorteados!" : "Sorteando os papéis…"}
          </h1>
          <span className="text-lg font-bold text-muted-foreground">
            {revealed
              ? "Cada pessoa defende o ponto de vista do seu papel. Todos votam com o mesmo peso."
              : "O jogo escolhe ao acaso quem será o GP e quem serão os líderes."}
          </span>
        </div>
        <div
          className={cn(
            "grid w-full gap-4",
            drafts.length === 3
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 sm:max-w-3xl",
          )}
        >
          {drafts.map((d, i) => {
            const role = revealed ? drawn[i] : ROLE_CYCLE[(tick + i) % ROLE_CYCLE.length];
            return (
              <div
                key={i}
                className={cn(
                  "flex flex-col items-center gap-3 rounded-3xl border-2 bg-card p-6 transition",
                  revealed ? "border-primary" : "border-border",
                )}
              >
                <img
                  src={d.avatarImage}
                  alt=""
                  className="h-24 w-24 rounded-full bg-[#dce3f5] object-cover ring-4 ring-primary"
                />
                <span className="text-2xl font-black">{d.name.trim()}</span>
                <span
                  className={cn(
                    "min-h-[3.5rem] text-xl font-black leading-tight",
                    revealed ? "text-primary animate-pop-in" : "text-muted-foreground",
                  )}
                >
                  {ROLE_TITLE(role)}
                </span>
                {revealed && (
                  <span className="text-base font-bold text-muted-foreground">
                    {ROLE_CARDS[role].headline}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        {revealed && (
          <div className="flex flex-wrap items-center justify-center gap-4 animate-float-in">
            {/* Sem "voltar": refazer o cadastro permitiria sortear de novo até cair no papel desejado */}
            <SoftButton
              size="lg"
              onClick={() => setupPlayers(drafts.map((d, i) => ({ ...d, role: drawn[i] })))}
            >
              Ver os papéis <ArrowRight className="h-5 w-5" />
            </SoftButton>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 animate-float-in">
        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 text-4xl font-black tracking-tight sm:text-5xl">Montem a equipe</h1>
          <span className="text-lg font-bold text-muted-foreground">
            2 ou 3 jogadores (o 3º é opcional). Os papéis são sorteados depois. Um computador por
            equipe, sem dono: ele passa de mão em mão na hora do voto.
          </span>
        </div>
        <div className="flex gap-2">
          <Chip>2 min de leitura</Chip>
          <Chip>1 min por voto</Chip>
        </div>
      </div>

      <div className="mt-8 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {drafts.map((d, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-5 text-center animate-float-in"
            >
              <div className="flex h-10 w-full items-center justify-end">
                {i === 2 && (
                  <button
                    type="button"
                    onClick={() => setDrafts(drafts.slice(0, 2))}
                    aria-label="Remover 3º jogador"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={() => setAvatarModalOpenFor(i)}
                aria-label={d.avatarId ? "Trocar avatar" : "Escolher avatar"}
                title={d.avatarId ? "Clique para trocar o avatar" : "Clique para escolher o avatar"}
                className="relative rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60"
              >
                {d.avatarImage ? (
                  <>
                    <img
                      src={d.avatarImage}
                      alt=""
                      className="h-24 w-24 rounded-full bg-[#dce3f5] object-cover ring-4 ring-primary"
                    />
                    {/* Indica que o círculo é clicável para trocar o avatar */}
                    <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-card">
                      <Pencil className="h-4 w-4" />
                    </span>
                  </>
                ) : (
                  <span className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-dashed border-border text-muted-foreground">
                    <Plus className="h-9 w-9" />
                  </span>
                )}
              </button>
              <span className="flex items-center text-xl font-black leading-tight">
                Jogador {i + 1}
              </span>
              <span className="text-base font-bold text-muted-foreground">
                {i === 2 ? "Opcional" : "Papel sorteado depois"}
              </span>
              <label className="flex w-full flex-col gap-1.5 text-left">
                <span className="text-sm font-extrabold text-muted-foreground">Nome</span>
                <input
                  type="text"
                  value={d.name}
                  placeholder="Digite o nome"
                  maxLength={20}
                  onChange={(e) => updateDraft(i, { name: e.target.value })}
                  className="h-12 w-full rounded-xl border-2 border-border bg-background px-4 text-lg font-extrabold text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
                />
              </label>
            </div>
          );
        })}
        {drafts.length < 3 && (
          <button
            type="button"
            onClick={() => setDrafts([...drafts, { name: "" }])}
            className="flex min-h-48 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-border p-5 text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            <Plus className="h-9 w-9" />
            <span className="text-lg font-extrabold">3º jogador</span>
            <span className="text-sm font-bold">opcional</span>
          </button>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <SoftButton variant="ghost" onClick={() => goTo("intro")}>
          <ArrowLeft className="h-5 w-5" /> Voltar
        </SoftButton>
        {!allValid && (
          <span className="text-base font-bold text-warning" role="status">
            {missing.length > 0
              ? `Falta ${missing[0]}${missing.length > 1 ? ` (+${missing.length - 1})` : ""}`
              : "Cada jogador precisa de um nome diferente"}
          </span>
        )}
        <SoftButton size="lg" onClick={startDraw} disabled={!allValid}>
          <Dices className="h-5 w-5" /> Sortear papéis
        </SoftButton>
      </div>

      {avatarModalOpenFor !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Escolher avatar"
        >
          <div className="w-full max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div>
                <h2 className="m-0 text-2xl font-black">Escolha o avatar</h2>
                <p className="m-0 mt-1 text-base font-bold text-muted-foreground">
                  {drafts[avatarModalOpenFor].name || `Jogador ${avatarModalOpenFor + 1}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAvatarModalOpenFor(null)}
                aria-label="Fechar"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid max-h-[60vh] grid-cols-2 gap-3 overflow-y-auto p-1 sm:grid-cols-4">
              {AVAILABLE_AVATARES.map((avatar) => {
                const owner = takenBy(avatar.id, avatarModalOpenFor);
                const mine = drafts[avatarModalOpenFor].avatarId === avatar.id;
                return (
                  <button
                    key={avatar.id}
                    type="button"
                    disabled={!!owner}
                    onClick={() => {
                      updateDraft(avatarModalOpenFor, {
                        avatarId: avatar.id,
                        avatarName: avatar.name,
                        avatarImage: avatar.imagePath,
                      });
                      setAvatarModalOpenFor(null);
                    }}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-2xl border-2 p-3 transition",
                      mine
                        ? "border-primary bg-primary/10"
                        : owner
                          ? "cursor-not-allowed border-transparent opacity-50"
                          : "border-border hover:border-primary",
                    )}
                  >
                    <img
                      src={avatar.imagePath}
                      alt=""
                      className={cn(
                        "h-20 w-20 rounded-full bg-[#dce3f5] object-cover",
                        owner && "grayscale",
                      )}
                    />
                    {owner && (
                      <span className="text-xs font-bold text-muted-foreground">
                        com {owner.split(" ")[0]}
                      </span>
                    )}
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
