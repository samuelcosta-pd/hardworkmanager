import { LogOut } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export function ExitButton() {
  const quitGame = useGameStore((s) => s.quitGame);
  const phase = useGameStore((s) => s.phase);

  // Do not show exit button if already on the intro screen
  if (phase === 'intro') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="icon" className="rounded-full shadow-lg h-10 w-10 opacity-70 hover:opacity-100 transition-opacity">
            <LogOut className="h-5 w-5" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja sair da simulação?</AlertDialogTitle>
            <AlertDialogDescription>
              Isso encerrará sua sessão atual e todo o progresso será perdido. Você retornará para a tela inicial.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continuar jogando</AlertDialogCancel>
            <AlertDialogAction onClick={quitGame} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Sair da simulação
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
