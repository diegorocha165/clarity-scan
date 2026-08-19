import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, AlertTriangle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const panelRows = [
  { label: "Posicionamento", value: "Rotação cervical leve", state: "warn" },
  { label: "Contraste", value: "Adequado", state: "ok" },
  { label: "Nitidez", value: "Aceitável", state: "ok" },
  { label: "Cobertura anatômica", value: "Corte em ramo direito", state: "warn" },
  { label: "Artefatos", value: "Nenhum detectado", state: "ok" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-clinical opacity-60" />
      <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_oklch(0.72_0.11_200_/_0.16),_transparent_65%)]" />
      <div className="absolute bottom-[-14rem] left-[-8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_oklch(0.78_0.13_175_/_0.12),_transparent_65%)]" />

      <div className="container-tight relative py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <span className="eyebrow text-muted-foreground">Controle de qualidade radiográfica</span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Validação técnica de exames,
              <span className="block text-radia">antes do laudo sair.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Radia apoia radiologistas e cirurgiões-dentistas na avaliação da qualidade técnica de
              panorâmicas e periapicais — posicionamento, contraste, nitidez e cobertura — e entrega um
              pré-laudo estruturado pronto para revisão profissional.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-8 border-t border-border/60 pt-8">
              {[
                { k: "16%", v: "rejeição em periapicais" },
                { k: "37%", v: "repetição em endodontia" },
                { k: "< 10s", v: "pré-laudo estruturado" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-2xl font-semibold text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="surface-elevated rounded-2xl p-1.5 shadow-2xl">
              <div className="rounded-xl bg-card">
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-3.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Activity className="h-4 w-4 text-radia" />
                    Painel de avaliação
                  </div>
                  <span className="rounded-md bg-warning/15 px-2 py-1 text-[11px] font-semibold text-warning">
                    Atenção
                  </span>
                </div>

                <div className="px-5 py-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="eyebrow text-muted-foreground">Índice técnico</p>
                      <p className="font-display text-4xl font-semibold text-foreground">72<span className="text-lg text-muted-foreground">/100</span></p>
                    </div>
                    <p className="text-xs text-muted-foreground">Panorâmica · 2 achados</p>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-radia to-teal" />
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {panelRows.map((r) => (
                      <li
                        key={r.label}
                        className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/40 px-3.5 py-2.5"
                      >
                        {r.state === "ok" ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        ) : (
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground">{r.label}</p>
                          <p className="text-xs text-muted-foreground">{r.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-border/60 pt-4 text-[11px] leading-relaxed text-muted-foreground">
                    Documento de apoio. A interpretação e a assinatura permanecem sob responsabilidade do
                    profissional habilitado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
