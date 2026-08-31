export type CriterionKey =
  | "nitidez"
  | "exposicao"
  | "contraste"
  | "posicionamento"
  | "ruido"
  | "artefatos"
  | "cobertura";

export type Severity = "ok" | "atencao" | "critico";

export type AnalysisStatus = "aprovada" | "atencao" | "inadequada";

export interface CriterionResult {
  key: CriterionKey;
  label: string;
  severity: Severity;
  score: number;
  description: string;
}

export interface Analysis {
  id: string;
  fileName: string;
  imageDataUrl: string | null;
  examType: string;
  createdAt: string;
  score: number;
  status: AnalysisStatus;
  criteria: CriterionResult[];
  recommendation: string;
}

export const CRITERION_LABELS: Record<CriterionKey, string> = {
  nitidez: "Nitidez",
  exposicao: "Exposição",
  contraste: "Contraste",
  posicionamento: "Posicionamento",
  ruido: "Ruído",
  artefatos: "Artefatos",
  cobertura: "Cobertura da imagem",
};

export const STATUS_META: Record<
  AnalysisStatus,
  { label: string; dot: string; badge: string; text: string }
> = {
  aprovada: {
    label: "Aprovada",
    dot: "bg-success",
    badge: "bg-success-soft text-success border-success/25",
    text: "text-success",
  },
  atencao: {
    label: "Atenção necessária",
    dot: "bg-warning",
    badge: "bg-warning-soft text-warning-foreground border-warning/35",
    text: "text-warning-foreground",
  },
  inadequada: {
    label: "Qualidade inadequada",
    dot: "bg-danger",
    badge: "bg-danger-soft text-danger border-danger/25",
    text: "text-danger",
  },
};

export const SEVERITY_META: Record<
  Severity,
  { label: string; badge: string; icon: "ok" | "warn" | "alert" }
> = {
  ok: { label: "Adequado", badge: "bg-success-soft text-success border-success/25", icon: "ok" },
  atencao: {
    label: "Atenção",
    badge: "bg-warning-soft text-warning-foreground border-warning/35",
    icon: "warn",
  },
  critico: { label: "Crítico", badge: "bg-danger-soft text-danger border-danger/25", icon: "alert" },
};

export function statusFromScore(score: number): AnalysisStatus {
  if (score >= 80) return "aprovada";
  if (score >= 60) return "atencao";
  return "inadequada";
}
