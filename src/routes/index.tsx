import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, ScanLine, FileSignature } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radia — Controle de qualidade radiográfica com IA" },
      {
        name: "description",
        content:
          "Radia avalia a qualidade técnica de radiografias panorâmicas e periapicais e gera pré-laudos estruturados para radiologistas e cirurgiões-dentistas.",
      },
      { property: "og:title", content: "Radia — Controle de qualidade radiográfica com IA" },
      {
        property: "og:description",
        content:
          "Avaliação técnica de radiografias odontológicas e pré-laudo estruturado para revisão profissional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Envio do exame",
    text: "Panorâmica ou periapical em JPEG, PNG, TIFF ou DICOM, direto do fluxo da clínica.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Avaliação técnica",
    text: "Posicionamento, contraste, nitidez, cobertura e artefatos verificados em segundos.",
  },
  {
    icon: FileSignature,
    step: "03",
    title: "Pré-laudo para revisão",
    text: "Documento estruturado que o radiologista revisa, complementa e assina.",
  },
];

function Index() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />

      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-tight">
          <p className="eyebrow text-teal">Fluxo de trabalho</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Três etapas, sem sair da rotina da clínica
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="bg-card p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/70 text-radia">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-sm font-semibold text-muted-foreground/60">{s.step}</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-tight grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-radia">Evidência</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A qualidade técnica é a base do diagnóstico
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Estudos clínicos apontam taxas de rejeição de até 16% em radiografias periapicais e
              repetição de 37% em exames de endodontia. Cada nova exposição aumenta a dose do paciente,
              retarda o atendimento e eleva os custos da clínica.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A Radia atua como camada de controle de qualidade, identificando inadequações técnicas
              antes da interpretação e do laudo final.
            </p>
            <Button size="lg" className="mt-8 bg-radia text-radia-foreground hover:bg-radia/90" asChild>
              <Link to="/analisar">
                Avaliar radiografia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
            {[
              { k: "16%", v: "rejeição média em periapicais", accent: "text-radia" },
              { k: "37%", v: "repetição em endodontia", accent: "text-teal" },
              { k: "61 mil", v: "clínicas odontológicas no Brasil", accent: "text-foreground" },
              { k: "LGPD", v: "privacidade do paciente por padrão", accent: "text-foreground" },
            ].map((m) => (
              <div key={m.k} className="bg-card p-8">
                <p className={`font-display text-3xl font-semibold ${m.accent}`}>{m.k}</p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-10 md:p-16">
            <div className="absolute inset-0 grid-clinical opacity-50" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_oklch(0.72_0.11_200_/_0.18),_transparent_65%)]" />
            <div className="relative max-w-2xl">
              <p className="eyebrow text-teal">Comece agora</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Aprimore o controle de qualidade da sua clínica
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Teste a demonstração e veja como a Radia se integra ao fluxo de radiologistas e
                dentistas, reduzindo retrabalho e padronizando laudos.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        </div>
      </section>
    </div>
  );
}
