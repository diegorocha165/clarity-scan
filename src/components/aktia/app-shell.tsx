import { Link, useNavigate } from "@tanstack/react-router";
import {
  BarChart3,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  ScanLine,
  Settings,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { AktiaLogo } from "@/components/aktia/logo";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/aktia/auth";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/nova-analise", label: "Nova Análise", icon: ScanLine, exact: false },
  { to: "/app/historico", label: "Histórico", icon: History, exact: false },
  { to: "/app/relatorios", label: "Relatórios", icon: BarChart3, exact: false },
  { to: "/app/configuracoes", label: "Configurações", icon: Settings, exact: false },
] as const;

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeOptions={{ exact: item.exact }}
          onClick={onNavigate}
          activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
          inactiveProps={{ className: "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground" }}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
        >
          <item.icon className="h-4.5 w-4.5" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function AppShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const navigate = useNavigate();

  const initials = (session?.name ?? "AK")
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  const handleSignOut = () => {
    signOut();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[268px] flex-col border-r border-sidebar-border bg-sidebar px-4 py-5 lg:flex">
        <Link to="/app" className="px-2">
          <AktiaLogo />
        </Link>
        <p className="mt-1 px-2 text-[11px] text-muted-foreground">Controle de qualidade radiográfica</p>

        <div className="mt-7 flex-1">
          <p className="px-3 pb-2 eyebrow text-muted-foreground">Plataforma</p>
          <NavItems />
        </div>

        <div className="rounded-2xl border border-sidebar-border bg-card p-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
              {initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{session?.name ?? "Convidado"}</p>
              <p className="truncate text-xs text-muted-foreground">{session?.clinic ?? "AktIA"}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="mt-2 w-full justify-start gap-2 text-muted-foreground" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" /> Sair
          </Button>
        </div>
      </aside>

      <div className="lg:pl-[268px]">
        <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
          <div className="flex items-center gap-3 px-5 py-4 lg:px-8">
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
            <div className="min-w-0 flex-1">
              <h1 className="truncate font-display text-xl font-semibold text-foreground">{title}</h1>
              {description && <p className="truncate text-sm text-muted-foreground">{description}</p>}
            </div>
            {actions}
          </div>
          {open && (
            <div className="border-t border-border bg-background px-4 py-3 lg:hidden">
              <NavItems onNavigate={() => setOpen(false)} />
              <Button variant="ghost" size="sm" className="mt-2 w-full justify-start gap-2 text-muted-foreground" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" /> Sair
              </Button>
            </div>
          )}
        </header>

        <main className={cn("px-5 py-6 lg:px-8 lg:py-8")}>{children}</main>

        <footer className="px-5 pb-8 text-xs text-muted-foreground lg:px-8">
          A AktIA realiza análise técnica da qualidade da imagem e não substitui a avaliação de profissionais de saúde.
        </footer>
      </div>
    </div>
  );
}
