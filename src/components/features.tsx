import {
  Scan,
  FileCheck,
  Stethoscope,
  AlertTriangle,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Avaliação técnica automatizada",
    description:
      "Verifica parâmetros críticos em panorâmicas e periapicais: posicionamento, contraste, nitidez, cobertura anatômica e artefatos.",
  },
  {
    icon: AlertTriangle,
    title: "Detecção precoce de falhas",
    description:
      "Sinaliza inadequações ainda durante o exame, reduzindo repetição, exposição adicional e custo operacional.",
  },
  {
    icon: ClipboardList,
    title: "Pré-laudo estruturado",
    description:
      "Descrição técnica padronizada com campos de qualidade, estruturas visualizadas e recomendações ao radiologista.",
  },
  {
    icon: FileCheck,
    title: "Padronização institucional",
    description:
      "Uniformiza a linguagem entre profissionais e unidades, facilitando auditorias e acompanhamento de qualidade.",
  },
  {
    icon: Stethoscope,
    title: "Apoio, nunca substituição",
    description:
      "O profissional habilitado mantém a responsabilidade final pela interpretação e assinatura do laudo.",
    wide: true,
  },
  {
    icon: ShieldCheck,
    title: "Conformidade e privacidade",
    description:
      "Arquitetura alinhada à LGPD e às diretrizes da ANVISA para software médico, com dados criptografados.",
    wide: true,
  },
];

export function Features() {
  return (
    <section className="border-b border-border/60 py-20 md:py-28">
      <div className="container-tight">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand">Plataforma</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Recursos desenhados para a prática radiológica
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cada módulo existe para reduzir retrabalho e aumentar a confiabilidade técnica dos exames
            antes da interpretação clínica.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={[
                "group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-brand/40",
                feature.wide ? "md:col-span-3" : "md:col-span-2",
              ].join(" ")}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-secondary/70 text-brand">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
