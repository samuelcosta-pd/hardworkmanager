import { useState } from 'react';
import { Mail, MessageSquare, Ticket, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { SoftCard } from '@/components/ui/SoftCard';
import { Avatar3D } from '@/components/ui/Avatar3D';
import type { GameEvent } from '@/types';

interface Props {
  event: GameEvent;
}

export function EmailView({ event }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const subjectMatch = event.description.match(/^Assunto:\s*([^.]+)\./i);
  const subject = subjectMatch ? subjectMatch[1] : event.title;
  const fullBody = subjectMatch ? event.description.replace(subjectMatch[0], '').trim() : event.description;

  // Obter a primeira frase marcante do corpo
  const sentences = fullBody.split('. ');
  const mainSentence = sentences[0] + (sentences.length > 1 ? '.' : '');
  const remainingText = sentences.slice(1).join('. ');

  return (
    <SoftCard className="animate-float-in">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-1.5 font-semibold text-primary">
          <Mail className="h-4 w-4" /> Caixa de Entrada · Reitoria / PROGRAD
        </span>
        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
          {event.domainTag}
        </span>
      </div>

      <div className="rounded-3xl bg-muted/60 p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <Avatar3D initials={event.senderInitials} imageUrl={event.avatarImage} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold text-foreground text-base">{event.senderName}</p>
              <span className="text-xs text-muted-foreground font-medium">Urgente</span>
            </div>
            <p className="text-xs text-muted-foreground">{event.senderRole}</p>
            
            <h2 className="mt-2 text-base font-bold text-foreground">{subject}</h2>
            
            {/* Balão de Fala Conciso */}
            <div className="mt-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)] border-l-4 border-primary">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                "{mainSentence}"
              </p>
            </div>

            {/* Sanfona Retrátil para Detalhes Técnicos */}
            {remainingText && (
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-all"
                >
                  <FileText className="h-4 w-4" />
                  {showDetails ? 'Recolher detalhes técnicos' : 'Ver contexto completo do e-mail'}
                  {showDetails ? <ChevronUp className="h-4 w-4 ml-0.5" /> : <ChevronDown className="h-4 w-4 ml-0.5" />}
                </button>
                
                {showDetails && (
                  <div className="mt-2 rounded-xl bg-card/60 p-3 text-sm leading-relaxed text-muted-foreground animate-in fade-in">
                    {remainingText}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </SoftCard>
  );
}

export function SlackView({ event }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const sentences = event.description.split('. ');
  const mainSentence = sentences[0] + (sentences.length > 1 ? '.' : '');
  const remainingText = sentences.slice(1).join('. ');

  return (
    <SoftCard className="animate-float-in">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-1.5 font-semibold text-primary">
          <MessageSquare className="h-4 w-4" /> #sga-time-engenharia
        </span>
        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
          {event.domainTag}
        </span>
      </div>

      <div className="flex items-start gap-4">
        <Avatar3D initials={event.senderInitials} imageUrl={event.avatarImage} size="lg" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="font-bold text-foreground">{event.senderName}</p>
            <span className="text-xs text-muted-foreground">· {event.senderRole}</span>
            <span className="text-xs text-muted-foreground">· agora</span>
          </div>

          {/* Balão de Mensagem Direta */}
          <div className="relative mt-2 inline-block rounded-3xl rounded-tl-md bg-card px-5 py-4 shadow-[var(--shadow-soft)] border border-slate-100 max-w-full">
            <p className="text-sm font-medium leading-relaxed text-foreground">
              {mainSentence}
            </p>
          </div>

          {/* Sanfona Retrátil para Detalhes Técnicos */}
          {remainingText && (
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-all"
              >
                <FileText className="h-4 w-4" />
                {showDetails ? 'Recolher detalhes' : 'Ver contexto completo da mensagem'}
                {showDetails ? <ChevronUp className="h-4 w-4 ml-0.5" /> : <ChevronDown className="h-4 w-4 ml-0.5" />}
              </button>
              
              {showDetails && (
                <div className="mt-2 rounded-xl bg-muted/60 p-3 text-sm leading-relaxed text-muted-foreground animate-in fade-in">
                  {remainingText}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </SoftCard>
  );
}

export function TicketView({ event }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const sentences = event.description.split('. ');
  const mainSentence = sentences[0] + (sentences.length > 1 ? '.' : '');
  const remainingText = sentences.slice(1).join('. ');

  return (
    <SoftCard className="animate-float-in">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-2 font-semibold text-primary">
          <Ticket className="h-4 w-4" /> Chamado Técnico / Kanban
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-800">
          Prioridade Alta
        </span>
      </div>

      <div className="rounded-3xl bg-muted/60 p-5 shadow-sm">
        <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {event.domainTag}
        </div>
        
        <h2 className="text-lg font-bold text-foreground">{event.title}</h2>
        
        <div className="mt-3 flex items-center gap-3">
          <Avatar3D initials={event.senderInitials} imageUrl={event.avatarImage} size="sm" />
          <div>
            <p className="text-sm font-semibold text-foreground">{event.senderName}</p>
            <p className="text-xs text-muted-foreground">{event.senderRole}</p>
          </div>
        </div>

        {/* Resumo Direto do Ticket */}
        <div className="mt-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-soft)] border-l-4 border-amber-500">
          <p className="text-sm font-medium leading-relaxed text-foreground">
            {mainSentence}
          </p>
        </div>

        {/* Sanfona Retrátil para Logs/Detalhes */}
        {remainingText && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-all"
            >
              <FileText className="h-4 w-4" />
              {showDetails ? 'Ocultar logs técnicos' : 'Ver logs e descrição detalhada do ticket'}
              {showDetails ? <ChevronUp className="h-4 w-4 ml-0.5" /> : <ChevronDown className="h-4 w-4 ml-0.5" />}
            </button>
            
            {showDetails && (
              <div className="mt-2 rounded-xl bg-card/60 p-3 text-sm leading-relaxed text-muted-foreground animate-in fade-in font-mono">
                {remainingText}
              </div>
            )}
          </div>
        )}
      </div>
    </SoftCard>
  );
}
