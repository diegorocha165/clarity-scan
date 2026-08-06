import { Link } from "@tanstack/react-router";
import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/analisar", label: "Analisar" },
  { to: "/laudo", label: "Laudo" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-radia text-radia-foreground">
            <Activity className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Radia</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground bg-accent" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-accent/50" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/analisar">Demonstração</Link>
          </Button>
          <Button size="sm" className="bg-radia text-radia-foreground hover:bg-radia/90" asChild>
            <Link to="/analisar">Começar agora</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container-tight flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
              <Button variant="outline" size="sm" asChild>
                <Link to="/analisar" onClick={() => setMobileOpen(false)}>
                  Demonstração
                </Link>
              </Button>
              <Button size="sm" className="bg-radia text-radia-foreground hover:bg-radia/90" asChild>
                <Link to="/analisar" onClick={() => setMobileOpen(false)}>
                  Começar agora
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
