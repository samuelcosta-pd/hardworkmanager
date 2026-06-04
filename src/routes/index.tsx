import { createFileRoute } from '@tanstack/react-router';
import { useGameStore } from '@/store/gameStore';
import { Onboarding } from '@/components/screens/Onboarding';
import { PlayerSetup } from '@/components/screens/PlayerSetup';
import { RoleExplanation } from '@/components/screens/RoleExplanation';
import { ProjectBriefing } from '@/components/screens/ProjectBriefing';
import { Dashboard } from '@/components/screens/Dashboard';
import { EventDisplay } from '@/components/screens/EventDisplay';
import { VotingRound } from '@/components/screens/VotingRound';
import { VoteReveal } from '@/components/screens/VoteReveal';
import { DebateStructured } from '@/components/screens/DebateStructured';
import { ConsequenceFeedback } from '@/components/screens/ConsequenceFeedback';
import { DebriefingFinal } from '@/components/screens/DebriefingFinal';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Hard Work Manager' },
      {
        name: 'description',
        content:
          'Jogo sério de gerenciamento de projetos de software colaborativo para o ensino do domínio Trabalho do Projeto do PMBOK 7.',
      },
      { property: 'og:title', content: 'Hard Work Manager' },
      {
        property: 'og:description',
        content: 'Simulador educacional colaborativo do domínio Trabalho do Projeto.',
      },
    ],
  }),
  component: Game,
});

function Game() {
  const phase = useGameStore((s) => s.phase);

  switch (phase) {
    case 'intro':
      return <Onboarding />;
    case 'setup':
      return <PlayerSetup />;
    case 'role_explanation':
      return <RoleExplanation />;
    case 'briefing':
      return <ProjectBriefing />;
    case 'dashboard':
      return <Dashboard />;
    case 'event_display':
      return <EventDisplay />;
    case 'voting_round_1':
      return <VotingRound round={1} />;
    case 'vote_reveal':
      return <VoteReveal />;
    case 'debate_structured':
      return <DebateStructured />;
    case 'voting_round_2':
      return <VotingRound round={2} />;
    case 'decision_resolved':
    case 'feedback_narrative':
      return <ConsequenceFeedback />;
    case 'debriefing':
      return <DebriefingFinal />;
    default:
      return <Onboarding />;
  }
}
