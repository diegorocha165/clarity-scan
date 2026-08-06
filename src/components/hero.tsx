import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Sparkles, Clock } from "lucide-react";
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
            Suporte inteligente para radiologistas odontológicos
          </Badge>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Qualidade radiográfica
            <span className="block text-radia">validada por IA</span>
          </h1>

          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            A Radia analisa automaticamente radiografias panorâmicas e periapicais, identifica
            problemas técnicos e gera pré-laudos estruturados — reduzindo retrabalho e aumentando a
            confiabilidade dos exames.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="bg-radia text-radia-foreground hover:bg-radia/90" asChild>
              <Link to="/analisar">
                Analisar radiografia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/laudo">Ver pré-laudo</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-muted text-teal">
                <Clock className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">Economia de tempo</p>
              <p className="mt-1 text-sm text-muted-foreground">Laudos padronizados em segundos.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-radia-muted text-radia">
                <Shield className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">Mais segurança</p>
              <p className="mt-1 text-sm text-muted-foreground">Erros técnicos detectados antes do diagnóstico.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4 text-left shadow-sm">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-muted text-teal">
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-foreground">Suporte, não substituto</p>
              <p className="mt-1 text-sm text-muted-foreground">O radiologista mantém o controle final.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
