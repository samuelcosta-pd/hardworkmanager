import { useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, AlertTriangle, ArrowRight, ArrowLeft, SkipForward } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Helena&backgroundColor=e2e8f0" alt="Helena" />
            <AvatarFallback>HE</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Olá! Eu sou a Helena.</h2>
            <p className="text-slate-600">
              Sou Consultora Ágil e serei a mediadora da sua equipe. Vou guiar vocês pelos desafios do Domínio Trabalho do Projeto (PMBOK 7).
            </p>
          </div>
        </div>

        <Card className="border-t-4 border-t-primary shadow-lg relative overflow-hidden">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }} />
          
          <CardHeader className="text-center pb-2 pt-8">
            <CardTitle className="text-3xl font-bold text-slate-800">
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
                    <h3 className="text-lg font-bold">O que é este jogo?</h3>
                    <p>Uma simulação colaborativa baseada no PMBOK 7. Vocês assumirão a liderança da modernização de um Sistema de Gerenciamento Acadêmico.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Aprendizado Colaborativo</h3>
                    <p>O foco é o Domínio de Desempenho <strong>Trabalho do Projeto</strong>. Vocês aprenderão a gerenciar processos, recursos e a manter o time engajado.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Ações têm Consequências</h3>
                    <p>Cada decisão afeta a Eficiência, a Qualidade e a Saúde da Equipe. Decisões ruins podem levar ao fracasso do projeto.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 text-slate-700 w-full text-lg">
                <ul className="space-y-3 list-disc list-inside marker:text-primary">
                  <li><strong>Jogadores:</strong> A equipe é formada por 3 líderes (GP, Tech Lead, UX Lead).</li>
                  <li><strong>Eventos:</strong> Vocês enfrentarão uma série de cenários de crise e decisões táticas.</li>
                  <li><strong>Debate e Votação:</strong> Diante de um problema, vocês debatem e votam na melhor solução. Empates são decididos pelo Gerente de Projetos.</li>
                  <li><strong>Métricas:</strong> Vocês devem equilibrar Eficiência Operacional, Qualidade Técnica e Saúde da Equipe.</li>
                  <li><strong>Duração:</strong> A simulação dura cerca de 15-20 minutos.</li>
                  <li><strong>Fim de Jogo:</strong> O projeto falha se qualquer métrica chegar a zero, ou é concluído após todos os eventos.</li>
                </ul>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-slate-700 w-full">
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Trade-offs são Inevitáveis
                  </h3>
                  <p className="text-amber-700">
                    Nem toda decisão possui uma saída perfeita. Às vezes, para garantir a qualidade, vocês precisarão sacrificar a eficiência. O objetivo é maximizar o valor e a sustentabilidade do projeto.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-slate-800">GP</h4>
                    <p className="text-sm text-slate-600">Foca nos Recursos e Eficiência</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-slate-800">Tech Lead</h4>
                    <p className="text-sm text-slate-600">Foca na Qualidade e Débito Técnico</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg text-center">
                    <h4 className="font-bold text-slate-800">UX Lead</h4>
                    <p className="text-sm text-slate-600">Foca no Usuário e Engajamento</p>
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
