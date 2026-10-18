import { useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, AlertTriangle, ArrowRight, ArrowLeft, SkipForward, Lightbulb } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MENTOR } from '@/data/avatars';

export function Onboarding() {
  const [step, setStep] = useState(1);
  const goTo = useGameStore((s) => s.goTo);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else goTo('setup');
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const skip = () => {
    goTo('setup');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-6">

        {/* Mediator Introduction Header */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={MENTOR.imagePath} alt={MENTOR.name} />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Olá! Eu sou a Helena.</h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-1">
              Sou Consultora de Projetos e serei a mediadora da sua equipe. Vou guiar vocês pelos desafios do Domínio de Recursos do PMBOK 8, equilibrando pessoas, ferramentas e infraestrutura.
            </p>
          </div>
        </div>

        <Card className="border-t-4 border-t-primary shadow-lg relative overflow-hidden">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />

          <CardHeader className="text-center pb-2 pt-8">
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-slate-800">
              {step === 1 && "Bem-vindo ao Hard Work Manager"}
              {step === 2 && "Como funciona a dinâmica"}
              {step === 3 && "Regras e Expectativas"}
            </CardTitle>
          </CardHeader>

          <CardContent className="min-h-[300px] flex items-center justify-center p-6">
            {step === 1 && (
              <div className="space-y-6 text-slate-700 w-full">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">O que é este jogo?</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-slate-600">Uma simulação colaborativa baseada no PMBOK 8. Vocês assumirão a liderança da modernização de um Sistema de Gerenciamento Acadêmico.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">Aprendizado Colaborativo</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-slate-600">O foco é o Domínio de Desempenho <strong>Recursos</strong>. Vocês aprenderão a planejar, liderar e monitorar recursos humanos, ambientes e ferramentas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">Ações têm Consequências</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-slate-600">Cada decisão afeta a Eficiência, a Qualidade e a Saúde da Equipe. Decisões ruins podem levar ao fracasso do projeto.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 text-slate-700 w-full text-base sm:text-lg leading-relaxed">
                <ul className="space-y-3.5 list-disc list-inside marker:text-primary">
                  <li><strong>Lideranças:</strong> A equipe é formada por 3 papéis decisores: Gerente de Projetos, Líder Técnico e Líder de Design e Telas.</li>
                  <li><strong>Dilemas:</strong> Vocês enfrentarão uma sequência de cenários de crise e decisões táticas sobre recursos humanos, virtuais e físicos.</li>
                  <li><strong>Debate e Votação:</strong> Diante de cada problema, votem secretamente. Em caso de divergência, um debate estruturado com tempo regulado precede a votação final (empates são decididos pelo Voto de Minerva do GP).</li>
                  <li><strong>Métricas:</strong> Equilibre Capacidade de Entrega, Qualidade do Produto, Saúde da Equipe e Conhecimento Organizacional.</li>
                  <li><strong>Duração:</strong> A simulação percorre os dilemas sorteados equilibrando os 5 processos de Recursos do PMBOK 8.</li>
                  <li><strong>Fim de Jogo:</strong> O projeto colapsa se qualquer métrica principal cair abaixo de 40 pontos (zona crítica). O sucesso é alcançado ao concluir os dilemas mantendo o equilíbrio sustentável.</li>
                </ul>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-slate-700 w-full">
                <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-1.5 flex items-center gap-1.5">
                    <Lightbulb className="w-5 h-5" />
                    Dica da Mentora Helena
                  </p>
                  <p className="text-amber-900 text-base sm:text-lg leading-relaxed font-medium">
                    Nem toda decisão possui uma saída perfeita. Às vezes, para garantir a sustentabilidade da equipe ou a robustez da infraestrutura, será necessário aceitar custos no curto prazo. O objetivo é a sustentabilidade a longo prazo.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
                    <h4 className="font-bold text-blue-800 text-base sm:text-lg">GP</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Recursos Humanos, Clima e Voto de Minerva</p>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
                    <h4 className="font-bold text-emerald-800 text-base sm:text-lg">Tech Lead</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Recursos Físicos/Virtuais, Servidores e Retrabalho</p>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-xl text-center border border-slate-200">
                    <h4 className="font-bold text-purple-800 text-base sm:text-lg">UX Lead</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Experiência, Acessibilidade e Inclusão</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t bg-slate-50 p-4">
            <Button variant="ghost" onClick={skip} className="text-slate-500 hover:text-slate-700">
              <SkipForward className="w-4 h-4 mr-2" />
              Pular introdução
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Button onClick={nextStep} className="min-w-[120px]">
                {step === 3 ? "Configurar Equipe" : "Próximo"}
                {step < 3 && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
