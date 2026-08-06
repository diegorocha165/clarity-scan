import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UploadZone } from "@/components/upload-zone";
import { AnalysisResult, type AnalysisResultData } from "@/components/analysis-result";
import { ReportPreview, type ReportData } from "@/components/report-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export const Route = createFileRoute("/analisar")({
  head: () => ({
    meta: [
      { title: "Analisar radiografia — Radia" },
      {
        name: "description",
        content:
          "Envie uma radiografia panorâmica ou periapical para análise automática de qualidade técnica com a Radia.",
      },
      { property: "og:title", content: "Analisar radiografia — Radia" },
      {
        property: "og:description",
        content:
          "Envie uma radiografia panorâmica ou periapical para análise automática de qualidade técnica com a Radia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Analisar,
});

const demoResult: AnalysisResultData = {
  overall: "atencao",
  score: 72,
  findings: [
    {
      id: "1",
      type: "warning",
      category: "posicionamento",
      message: "Leve rotação cervical detectada. Região apical de molares superiores com pequena superposição.",
    },
    {
      id: "2",
      type: "success",
      category: "contraste",
      message: "Contraste adequado para diferenciação de tecidos duros e moles.",
    },
    {
      id: "3",
      type: "success",
      category: "nitidez",
      message: "Nitidez aceitável para avaliação de estruturas dentárias.",
    },
    {
      id: "4",
      type: "warning",
      category: "cobertura",
      message: "Corte leve da região de ramo mandibular direito.",
    },
  ],
  metadata: {
    examType: "Radiografia panorâmica",
    orientation: "Padrão",
    analyzedAt: new Date().toLocaleString("pt-BR"),
  },
};

const demoReport: ReportData = {
  patient: {
    initials: "Paciente demonstração",
    age: "32 anos",
    gender: "F",
  },
  exam: {
    type: "Radiografia panorâmica",
    date: new Date().toLocaleDateString("pt-BR"),
    indication: "Avaliação geral e planejamento ortodôntico",
  },
  quality: {
    status: "atencao",
    score: 72,
    observations: [
      "Contraste e nitidez técnicos adequados.",
      "Leve rotação cervical com pequena superposição em molares superiores.",
      "Corte leve da região de ramo mandibular direito.",
    ],
  },
  description: [
    "Arcadas dentárias superior e inferior presentes, com dentes permanentes em oclusão.",
    "Processos alveolares aparentemente preservados, com pequena perda óssea localizada a ser correlacionada clinicamente.",
    "Seios maxilares, côndilos mandibulares e região temporomandibular visualizados.",
    "Estruturas adjacentes sem alterações evidentes nesta análise preliminar.",
  ],
  considerations: [
    "Recomenda-se atenção à posição do paciente em exames futuros para evitar rotação cervical e cortes de estruturas.",
    "Correlacionar achados com história clínica e exame físico antes do laudo final.",
  ],
};

function Analisar() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResultData | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);

  const handleAnalyze = async (_file: File) => {
    setIsAnalyzing(true);
    setResult(null);
    setReport(null);

    // Simulação de chamada ao modelo de IA
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setResult(demoResult);
    setReport(demoReport);
    setIsAnalyzing(false);
    toast.success("Análise concluída", {
      description: "A qualidade técnica e o pré-laudo estão disponíveis abaixo.",
    });
  };

  return (
    <div className="container-tight py-10 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Analisar radiografia
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Envie uma panorâmica ou periapical e receba uma avaliação técnica + pré-laudo
            estruturado.
          </p>
        </div>

        <UploadZone onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />

        {(result || report) && (
          <div className="mt-10">
            <Tabs defaultValue="quality" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary">
                <TabsTrigger value="quality">Qualidade técnica</TabsTrigger>
                <TabsTrigger value="report">Pré-laudo</TabsTrigger>
              </TabsList>
              <TabsContent value="quality" className="mt-6">
                {result && <AnalysisResult result={result} />}
              </TabsContent>
              <TabsContent value="report" className="mt-6">
                {report && <ReportPreview report={report} />}
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
