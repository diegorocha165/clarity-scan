import {
  Scan,
  FileCheck,
  Stethoscope,
  AlertTriangle,
  ClipboardList,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Análise de qualidade técnica",
    description:
      "Detecta automaticamente baixa nitidez, contraste inadequado, cortes de estruturas, superposições e posicionamento incorreto em panorâmicas e periapicais.",
  },
  {
    icon: AlertTriangle,
    title: "Alertas antes do retrabalho",
    description:
      "Sinaliza problemas enquanto o paciente ainda está na cadeira, permitindo refazer o exame na hora e evitar nova exposição à radiação.",
  },
  {
    icon: ClipboardList,
    title: "Pré-laudo estruturado",
    description:
      "Gera uma descrição padronizada das estruturas anatômicas visíveis, qualidade técnica e observações relevantes para o radiologista revisar.",
  },
  {
    icon: FileCheck,
    title: "Padronização de laudos",
    description:
      "Reduz variações entre profissionais e acelera o fluxo de trabalho em clínicas, consultórios e centros de radiologia odontológica.",
  },
  {
    icon: Stethoscope,
    title: "Feito para radiologistas",
    description:
      "A IA atua como segunda opinião técnica. O profissional revisa, complementa e assina o laudo final com total responsabilidade clínica.",
  },
  {
    icon: Zap,
    title: "Integração ao fluxo clínico",
    description:
      "Compatível com os principais sistemas de imagem odontológica. Upload simples, análise rápida e resultados organizados em uma tela clara.",
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como a Radia transforma o fluxo radiográfico
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tecnologia de apoio para reduzir erros, padronizar laudos e dar mais confiabilidade aos exames.
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
