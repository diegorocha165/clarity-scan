import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/60 bg-background">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-radia text-radia-foreground">
              <Activity className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">Radia</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Suporte inteligente ao controle de qualidade em radiologia odontológica. Ferramenta de
            apoio — a responsabilidade clínica permanece com o profissional habilitado.
          </p>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Plataforma</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/analisar" className="hover:text-foreground">Avaliação de exame</Link></li>
            <li><Link to="/laudo" className="hover:text-foreground">Modelo de laudo</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Institucional</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>Termos de uso</li>
            <li>Privacidade e LGPD</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Radia. Todos os direitos reservados.</p>
          <p>Ferramenta de apoio à decisão — não substitui avaliação profissional.</p>
        </div>
      </div>
    </footer>
  );
}
