import {
  CRITERION_LABELS,
  statusFromScore,
  type Analysis,
  type CriterionKey,
  type CriterionResult,
  type Severity,
} from "./types";

/**
 * Camada de integração com o motor de IA.
 *
 * MVP: `analyzeRadiograph` roda uma simulação local determinística.
 * Futuro: trocar o corpo desta função por uma chamada ao endpoint de IA
 * (ex.: `POST /api/analyze` com a imagem), mantendo o mesmo contrato de
 * entrada (arquivo + tipo de exame) e de saída (`Analysis`).
 */

export interface AnalyzeInput {
  file: File;
  imageDataUrl: string;
  examType: string;
}

export const ANALYSIS_STEPS = [
  "Processando imagem",
  "Avaliando qualidade",
  "Identificando possíveis falhas",
  "Gerando resultado",
] as const;

const DESCRIPTIONS: Record<CriterionKey, Record<Severity, string>> = {
  nitidez: {
    ok: "Bordas anatômicas bem definidas, sem borramento relevante.",
    atencao: "Borramento moderado identificado na imagem.",
    critico: "Borramento acentuado compromete a leitura das estruturas.",
  },
  exposicao: {
    ok: "Densidade radiográfica dentro da faixa técnica esperada.",
    atencao: "Leve desvio de exposição em regiões da imagem.",
    critico: "Sub/superexposição significativa detectada.",
  },
  contraste: {
    ok: "Diferenciação adequada entre tecidos duros e moles.",
    atencao: "Contraste reduzido em parte da imagem.",
    critico: "Contraste insuficiente para leitura técnica confiável.",
  },
  posicionamento: {
    ok: "Enquadramento e alinhamento dentro do padrão técnico.",
    atencao: "Pequena angulação/assimetria de posicionamento.",
    critico: "Erro de posicionamento com distorção relevante.",
  },
  ruido: {
    ok: "Nível de ruído baixo.",
    atencao: "Ruído perceptível em áreas de menor densidade.",
    critico: "Ruído elevado degrada a qualidade técnica.",
  },
  artefatos: {
    ok: "Nenhum artefato relevante identificado.",
    atencao: "Artefato pontual detectado (possível objeto metálico).",
    critico: "Artefatos extensos sobrepostos a estruturas de interesse.",
  },
  cobertura: {
    ok: "Estruturas de interesse integralmente contidas no campo.",
    atencao: "Corte discreto na margem do campo de imagem.",
    critico: "Estruturas relevantes fora do campo de imagem.",
  },
};

function hashString(input: string) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function severityFromScore(score: number): Severity {
  if (score >= 78) return "ok";
  if (score >= 58) return "atencao";
  return "critico";
}

export function buildRecommendation(score: number, criteria: CriterionResult[]): string {
  const problems = criteria.filter((c) => c.severity !== "ok");
  const status = statusFromScore(score);
  const names = problems.map((p) => p.label.toLowerCase()).join(", ");

  if (status === "aprovada") {
    return problems.length
      ? `A imagem atende aos critérios técnicos de qualidade e pode seguir no fluxo clínico. Observação leve em ${names}. Avaliação restrita à qualidade técnica da imagem, sem interpretação diagnóstica.`
      : "A imagem atende integralmente aos critérios técnicos avaliados e pode seguir no fluxo clínico. Avaliação restrita à qualidade técnica da imagem, sem interpretação diagnóstica.";
  }
  if (status === "atencao") {
    return `A imagem apresenta qualidade suficiente para avaliação, porém recomenda-se atenção a ${names}. Considere revisar o protocolo de aquisição antes de novas tomadas. Recomendação referente à qualidade técnica da imagem, não ao diagnóstico clínico.`;
  }
  return `A qualidade técnica está abaixo do padrão recomendado devido a ${names}. Sugere-se repetição do exame com revisão de posicionamento e parâmetros de exposição. Recomendação referente à qualidade técnica da imagem, não ao diagnóstico clínico.`;
}

function buildCriteria(seed: number): CriterionResult[] {
  const keys = Object.keys(CRITERION_LABELS) as CriterionKey[];
  return keys.map((key, i) => {
    const raw = (seed >> (i * 3)) % 100;
    const score = Math.min(98, 52 + Math.round((raw / 100) * 46));
    const severity = severityFromScore(score);
    return {
      key,
      label: CRITERION_LABELS[key],
      severity,
      score,
      description: DESCRIPTIONS[key][severity],
    };
  });
}

export async function analyzeRadiograph(input: AnalyzeInput): Promise<Analysis> {
  // Simulação de latência do modelo (substituir por fetch ao endpoint de IA).
  await new Promise((r) => setTimeout(r, 2600));

  const seed = hashString(`${input.file.name}:${input.file.size}:${input.examType}`);
  const criteria = buildCriteria(seed);
  const score = Math.round(criteria.reduce((sum, c) => sum + c.score, 0) / criteria.length);

  return {
    id: `an_${Date.now().toString(36)}${(seed % 997).toString(36)}`,
    fileName: input.file.name,
    imageDataUrl: input.imageDataUrl,
    examType: input.examType,
    createdAt: new Date().toISOString(),
    score,
    status: statusFromScore(score),
    criteria,
    recommendation: buildRecommendation(score, criteria),
  };
}
