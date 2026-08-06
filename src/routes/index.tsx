import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radia — IA para Radiologia Odontológica" },
      {
        name: "description",
        content:
          "Radia analisa automaticamente a qualidade de radiografias panorâmicas e periapicais e gera pré-laudos estruturados para clínicas odontológicas.",
      },
      { property: "og:title", content: "Radia — IA para Radiologia Odontológica" },
      {
        property: "og:description",
        content:
          "Análise automática de qualidade radiográfica e pré-laudos estruturados para clínicas odontológicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />

      <section className="border-y border-border/60 bg-secondary/30 py-20 md:py-28">
        <div className="container-tight">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A qualidade técnica é a base do diagnóstico
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Estudos clínicos apontam taxas de rejeição de até 16% em radiografias periapicais e
                repetição de 37% em exames de endodontia. Cada nova exposição aumenta a dose do
                paciente, retarda o atendimento e eleva os custos da clínica.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A Radia atua como uma ferramenta de controle de qualidade, auxiliando o radiologista e
                o cirurgião-dentista a identificar inadequações técnicas antes da interpretação e do
                laudo final.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-radia text-radia-foreground hover:bg-radia/90" asChild>
                  <Link to="/analisar">
                    Avaliar radiografia
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-radia-muted/40 p-5 text-center">
                  <p className="text-3xl font-bold text-radia">16%</p>
                  <p className="mt-1 text-sm text-muted-foreground">rejeição média em periapicais</p>
                </div>
                <div className="rounded-xl bg-teal-muted/40 p-5 text-center">
                  <p className="text-3xl font-bold text-teal">37%</p>
                  <p className="mt-1 text-sm text-muted-foreground">repetição em endodontia</p>
                </div>
                <div className="rounded-xl bg-secondary p-5 text-center">
                  <p className="text-3xl font-bold text-foreground">61 mil</p>
                  <p className="mt-1 text-sm text-muted-foreground">clínicas odontológicas no Brasil</p>
                </div>
                <div className="rounded-xl bg-secondary p-5 text-center">
                  <p className="text-3xl font-bold text-foreground">LGPD</p>
                  <p className="mt-1 text-sm text-muted-foreground">privacidade do paciente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-radia-muted text-radia">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              Aprimore o controle de qualidade da sua clínica
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Teste a demonstração e veja como a Radia pode integrar-se ao fluxo de trabalho de
              radiologistas e dentistas, reduzindo retrabalho e padronizando laudos.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="bg-radia text-radia-foreground hover:bg-radia/90" asChild>
                <Link to="/analisar">
                  Acessar avaliação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/laudo">Ver modelo de laudo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
