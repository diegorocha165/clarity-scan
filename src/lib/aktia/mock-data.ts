import { buildRecommendation } from "./engine";
import { CRITERION_LABELS, statusFromScore, type Analysis, type CriterionKey, type CriterionResult, type Severity } from "./types";

interface SeedSpec {
  id: string;
  fileName: string;
  examType: string;
  daysAgo: number;
  values: Partial<Record<CriterionKey, number>>;
}

const SEED_DESCRIPTIONS: Record<Severity, (label: string) => string> = {
  ok: (label) => `${label} dentro do padrão técnico esperado.`,
  atencao: (label) => `${label} com desvio moderado identificado na imagem.`,
  critico: (label) => `${label} comprometido — fora do padrão técnico aceitável.`,
};

function severityFromScore(score: number): Severity {
  if (score >= 78) return "ok";
  if (score >= 58) return "atencao";
  return "critico";
}

function makeCriteria(values: Partial<Record<CriterionKey, number>>): CriterionResult[] {
  return (Object.keys(CRITERION_LABELS) as CriterionKey[]).map((key) => {
    const score = values[key] ?? 88;
    const severity = severityFromScore(score);
    return {
      key,
      label: CRITERION_LABELS[key],
      severity,
      score,
      description: SEED_DESCRIPTIONS[severity](CRITERION_LABELS[key]),
    };
  });
}

const SPECS: SeedSpec[] = [
  { id: "an_demo_01", fileName: "panoramica_1042.jpg", examType: "Panorâmica", daysAgo: 0, values: { nitidez: 66, posicionamento: 84, exposicao: 86, contraste: 83, ruido: 88, artefatos: 90, cobertura: 82 } },
  { id: "an_demo_02", fileName: "periapical_2117.png", examType: "Periapical", daysAgo: 1, values: { nitidez: 91, posicionamento: 93, exposicao: 89, contraste: 90, ruido: 92, artefatos: 94, cobertura: 88 } },
  { id: "an_demo_03", fileName: "panoramica_1039.jpg", examType: "Panorâmica", daysAgo: 2, values: { nitidez: 54, posicionamento: 51, exposicao: 63, contraste: 66, ruido: 70, artefatos: 74, cobertura: 57 } },
  { id: "an_demo_04", fileName: "periapical_2110.jpg", examType: "Periapical", daysAgo: 4, values: { nitidez: 84, posicionamento: 72, exposicao: 88, contraste: 85, ruido: 86, artefatos: 91, cobertura: 79 } },
  { id: "an_demo_05", fileName: "panoramica_1031.png", examType: "Panorâmica", daysAgo: 6, values: { nitidez: 93, posicionamento: 90, exposicao: 92, contraste: 89, ruido: 94, artefatos: 95, cobertura: 91 } },
  { id: "an_demo_06", fileName: "periapical_2098.jpg", examType: "Periapical", daysAgo: 9, values: { nitidez: 71, posicionamento: 68, exposicao: 74, contraste: 77, ruido: 80, artefatos: 88, cobertura: 73 } },
  { id: "an_demo_07", fileName: "panoramica_1020.jpg", examType: "Panorâmica", daysAgo: 13, values: { nitidez: 88, posicionamento: 86, exposicao: 84, contraste: 87, ruido: 90, artefatos: 92, cobertura: 85 } },
  { id: "an_demo_08", fileName: "periapical_2081.png", examType: "Periapical", daysAgo: 18, values: { nitidez: 62, posicionamento: 59, exposicao: 68, contraste: 71, ruido: 76, artefatos: 85, cobertura: 64 } },
];

export function buildSeedAnalyses(): Analysis[] {
  const now = Date.now();
  return SPECS.map((spec) => {
    const criteria = makeCriteria(spec.values);
    const score = Math.round(criteria.reduce((s, c) => s + c.score, 0) / criteria.length);
    return {
      id: spec.id,
      fileName: spec.fileName,
      imageDataUrl: null,
      examType: spec.examType,
      createdAt: new Date(now - spec.daysAgo * 86_400_000 - 3 * 3_600_000).toISOString(),
      score,
      status: statusFromScore(score),
      criteria,
      recommendation: buildRecommendation(score, criteria),
    };
  });
}
