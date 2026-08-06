import { Activity } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/60 bg-background py-10">
      <div className="container-tight flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-radia text-radia-foreground">
            <Activity className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Radia</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Radia. Suporte inteligente para radiologia odontológica.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>Termos</span>
          <span>Privacidade</span>
          <span>Contato</span>
        </div>
      </div>
    </footer>
  );
}
