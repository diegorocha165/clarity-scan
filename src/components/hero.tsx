import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, FileCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.11_255_/_0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.55_0.11_195_/_0.06),_transparent_50%)]" />

      <div className="container-tight relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 bg-radia-muted/60 text-radia hover:bg-radia-muted">
            Ferramenta de apoio à radiologia odontológica
          </Badge>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Validação técnica de exames
            <span className="block text-radia">com apoio de IA</span>
          </h1>

          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            A Radia auxilia o radiologista e o cirurgião-dentista na avaliação da qualidade técnica
            de radiografias panorâmicas e periapicais, identificando problemas de posicionamento,
            contraste, nitidez e cobertura antes do laudo final.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-radia text-radia-foreground hover:bg-radia/90" asChild>
              <Link to="/analisar">
                Avaliar radiografia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/laudo">Ver modelo de laudo</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-muted text-teal">
                <Clock className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">Fluxo ágil</p>
              <p className="mt-1 text-sm text-muted-foreground">Pré-laudo estruturado gerado em segundos para revisão.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-radia-muted text-radia">
                <Shield className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">Segurança técnica</p>
              <p className="mt-1 text-sm text-muted-foreground">Erros de aquisição detectados antes da interpretação.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-muted text-teal">
                <FileCheck className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">Responsabilidade clínica</p>
              <p className="mt-1 text-sm text-muted-foreground">O profissional revisa, complementa e assina o laudo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
