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
      "Verifica parâmetros críticos de qualidade em radiografias panorâmicas e periapicais: posicionamento, contraste, nitidez, cobertura anatômica e presença de artefatos.",
  },
  {
    icon: AlertTriangle,
    title: "Detecção precoce de falhas",
    description:
      "Sinaliza inadequações técnicas ainda durante o exame, reduzindo a necessidade de repetição, exposição adicional do paciente e custos operacionais.",
  },
  {
    icon: ClipboardList,
    title: "Pré-laudo estruturado",
    description:
      "Gera descrição técnica e anatômica padronizada, com campos claros para qualidade da imagem, estruturas visualizadas e recomendações ao radiologista.",
  },
  {
    icon: FileCheck,
    title: "Padronização institucional",
    description:
      "Uniformiza a linguagem dos laudos entre diferentes profissionais e unidades, facilitando auditorias, pareceres e acompanhamento de qualidade.",
  },
  {
    icon: Stethoscope,
    title: "Apoio ao diagnóstico, não substituto",
    description:
      "A ferramenta auxilia o radiologista na análise técnica. O profissional habilitado mantém a responsabilidade final pela interpretação e assinatura do laudo.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade e privacidade",
    description:
      "Arquitetura pensada para atender à LGPD e às diretrizes da ANVISA para softwares médicos. Dados criptografados em trânsito e em repouso.",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recursos para a prática radiológica
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ferramentas de apoio para aumentar a confiabilidade técnica dos exames e a eficiência do laudo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-radia/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-radia transition-colors group-hover:bg-radia-muted">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
