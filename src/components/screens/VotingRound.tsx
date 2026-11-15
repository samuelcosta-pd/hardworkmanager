import { useState } from "react";
import { ArrowRight, EyeOff, Lock, UserX } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { SoftCard } from "@/components/ui/SoftCard";
import { Avatar3D } from "@/components/ui/Avatar3D";
import { ALT_BG, AltShape } from "@/components/game/AltShape";
import { GameScreen } from "@/components/game/GameScreen";
import { HelpButton } from "@/components/game/ResponsibleBadge";
import { TeamBar, type PlayerStatus } from "@/components/game/TeamBar";
import { TimerRing } from "@/components/game/TimerRing";
import { useCountdown } from "@/hooks/useCountdown";
import { useGameStore } from "@/store/gameStore";
import { ROLE_LABELS, type VoteChoice } from "@/types";
import { detectTechTerms } from "@/data/glossary";
import { shortTitle } from "@/lib/text";

interface Props {
  round: 1 | 2;
}

/** Voto secreto: o dispositivo passa de mão em mão; cada alternativa é um bloco grande com cor e forma. */
export function VotingRound({ round }: Props) {
  const {
    players,
    events,
    currentEventIndex,
    currentVoterIndex,
    votes,
    timerSettings,
    castVote,
    finalizeRound1,
    finalizeRound2,
    goTo,
  } = useGameStore();

  const event = events[currentEventIndex] ?? events[0];
  const [handoff, setHandoff] = useState(true);

  const allVoted = players.length > 0 && currentVoterIndex >= players.length;
  const player = players[currentVoterIndex] ?? null;

  // Regra de desempate: na 2ª votação o GP não pode se abster.
  const mustVote = round === 2 && player?.role === "pm";

  const handleVote = (choice: VoteChoice) => {
    if (choice === "abstain" && mustVote) return;
    castVote(choice);
    setHandoff(true);
  };

  const countdown = useCountdown({
    durationSeconds: timerSettings.votingSeconds,
    enabled: !handoff && !allVoted && timerSettings.enabled && timerSettings.votingSeconds > 0,
    onExpire: () => handleVote("abstain"),
  });

  const roundVotes = votes.filter((v) => v.round === round);
  const status: Record<string, PlayerStatus> = {};
  players.forEach((p, i) => {
    const v = roundVotes.find((x) => x.playerId === p.id);
    status[p.id] = v
      ? v.alternative === "abstain"
        ? "absteve"
        : "votou"
      : i === currentVoterIndex
        ? "vez"
        : "aguarda";
  });
  const footer = <TeamBar status={status} />;

  if (allVoted) {
    return (
      <GameScreen footer={footer} className="items-center justify-center">
        <SoftCard className="w-full max-w-xl p-10 text-center animate-pop-in">
          <Lock className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-4 text-3xl font-black">Todos votaram</h2>
          <p className="mt-2 text-lg font-semibold text-muted-foreground">
            {round === 1
              ? "Reúnam-se em volta da tela para ver o resultado."
              : "Vamos aplicar a decisão da equipe."}
          </p>
          <SoftButton
            className="mt-6"
            size="lg"
            onClick={round === 1 ? finalizeRound1 : finalizeRound2}
          >
            {round === 1 ? "Revelar votos" : "Aplicar decisão"} <ArrowRight className="h-5 w-5" />
          </SoftButton>
        </SoftCard>
      </GameScreen>
    );
  }

  if (!event || !player) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <SoftCard className="w-full p-8">
          <h2 className="text-2xl font-black">Votação sem jogadores</h2>
          <SoftButton className="mt-6" size="lg" onClick={() => goTo("setup")}>
            Montar a equipe
          </SoftButton>
        </SoftCard>
      </div>
    );
  }

  if (handoff) {
    return (
      <GameScreen footer={footer} className="items-center justify-center">
        <div className="flex w-full max-w-md flex-col items-center gap-5 text-center animate-pop-in">
          <span className="flex items-center gap-2 text-lg font-extrabold text-primary">
            <EyeOff className="h-6 w-6" /> Voto secreto · rodada {round}
          </span>
          <h2 className="m-0 text-3xl font-black">Passe o dispositivo para</h2>
          <div className="rounded-full ring-4 ring-primary">
            <Avatar3D
              initials={player.name.slice(0, 2)}
              role={player.role}
              imageUrl={player.avatarImage}
              size="lg"
              className="h-28 w-28 text-3xl"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black">{player.name}</span>
            <span className="text-lg font-extrabold text-muted-foreground">
              {ROLE_LABELS[player.role]}
            </span>
          </div>
          <p className="m-0 text-base font-semibold text-muted-foreground">
            Os outros não olham a tela. O tempo começa quando você tocar no botão.
          </p>
          <SoftButton size="lg" className="w-full" onClick={() => setHandoff(false)}>
            Sou {player.name}, vou votar
          </SoftButton>
        </div>
      </GameScreen>
    );
  }

  const terms = detectTechTerms(event.alternatives.map((a) => a.text).join(" "), 4);

  return (
    <GameScreen footer={footer} className="max-w-7xl">
      <div className="flex flex-wrap items-center gap-5">
        <div className="rounded-full ring-4 ring-primary">
          <Avatar3D
            initials={player.name.slice(0, 2)}
            role={player.role}
            imageUrl={player.avatarImage}
            size="lg"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="flex items-center gap-1.5 text-base font-extrabold text-muted-foreground">
            <Lock className="h-4 w-4 shrink-0" /> Voto secreto · rodada {round}
            <span className="hidden sm:inline">· {shortTitle(event.title)}</span>
          </span>
          <span className="text-2xl font-black sm:text-3xl">
            {player.name}, qual é a sua escolha?
          </span>
        </div>
        {timerSettings.enabled && timerSettings.votingSeconds > 0 && (
          <TimerRing
            secondsLeft={countdown.secondsLeft}
            totalSeconds={timerSettings.votingSeconds}
            label="Seu tempo"
            size={96}
          />
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {event.alternatives.map((alt, i) => (
          <button
            key={alt.key}
            type="button"
            onClick={() => handleVote(alt.key)}
            className={`${ALT_BG[alt.key]} flex min-h-40 flex-col gap-4 rounded-3xl p-6 text-left text-white shadow-[0_6px_0_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary animate-float-in lg:min-h-72`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="flex items-center gap-3">
              <AltShape k={alt.key} size={28} />
              <span className="text-3xl font-black uppercase">{alt.key}</span>
            </span>
            <span className="text-xl font-extrabold leading-relaxed sm:text-2xl">{alt.text}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {terms.length > 0 && (
          <span className="flex items-center gap-2 text-base font-bold text-muted-foreground">
            <HelpButton label="Termos técnicos das alternativas">
              <div className="flex flex-col gap-3">
                {terms.map(({ term, definition }) => (
                  <div key={term}>
                    <p className="m-0 font-extrabold capitalize">{term}</p>
                    <p className="m-0 text-sm font-semibold">{definition}</p>
                  </div>
                ))}
              </div>
            </HelpButton>
            Termos
          </span>
        )}
        {mustVote ? (
          <span className="rounded-2xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-center text-base font-extrabold text-primary">
            {countdown.isExpired
              ? "Tempo esgotado. Como GP, você precisa votar: em caso de empate, seu voto decide."
              : "Como GP, você não pode se abster nesta votação: em caso de empate, seu voto decide."}
          </span>
        ) : (
          <SoftButton variant="ghost" size="sm" onClick={() => handleVote("abstain")}>
            <UserX className="h-5 w-5" /> Não sei escolher · abster-me
          </SoftButton>
        )}
      </div>
    </GameScreen>
  );
}
