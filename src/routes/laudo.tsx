import { createFileRoute } from "@tanstack/react-router";
import { ReportPreview, type ReportData } from "@/components/report-preview";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/laudo")({
  head: () => ({
    meta: [
      { title: "Exemplo de pré-laudo — Radia" },
      {
        name: "description",
        content:
          "Veja um exemplo de pré-laudo estruturado gerado pela Radia para radiologia odontológica.",
      },
      { property: "og:title", content: "Exemplo de pré-laudo — Radia" },
      {
        property: "og:description",
        content:
          "Veja um exemplo de pré-laudo estruturado gerado pela Radia para radiologia odontológica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Laudo,
});

const exampleReport: ReportData = {
  patient: {
    initials: "M.S.",
    age: "28 anos",
    gender: "F",
  },
  exam: {
    type: "Radiografia panorâmica",
    date: "06/08/2026",
    indication: "Avaliação pré-operatória para extração de terceiros molares",
  },
  quality: {
    status: "adequada",
    score: 91,
    observations: [
      "Posicionamento correto do paciente, sem rotação ou inclinação significativa.",
      "Contraste e nitidez adequados para avaliação de estruturas dentárias e ósseas.",
      "Cobertura anatômica completa, incluindo seios maxilares, côndilos e ramos mandibulares.",
      "Ausência de artefatos de movimento ou superposições relevantes.",
    ],
  },
  description: [
    "Presença de dentes permanentes em ambas as arcadas, com terceiros molares inclusos em posição horizontal inferior bilateral.",
    "Processos alveolares e rebordo mandibular preservados, sem sinais de lesões osteolíticas agressivas.",
    "Seios maxilares apresentam aspecto radiográfico dentro da normalidade.",
    "Articulações temporomandibulares sem alterações ósseas evidentes.",
  ],
  considerations: [
    "A qualidade técnica é adequada para suporte ao planejamento cirúrgico.",
    "Recomenda-se correlacionar os achados com a avaliação clínica e, se necessário, solicitar tomografia para detalhamento de relação com estruturas adjacentes.",
  ],
};

function Laudo() {
  return (
    <div className="container-tight py-10 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-radia-muted text-radia">
            <FileText className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Exemplo de pré-laudo
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Veja como a Radia organiza a descrição técnica e anatômica para revisão do radiologista.
          </p>
        </div>

        <ReportPreview report={exampleReport} />
      </div>
    </div>
  );
}
