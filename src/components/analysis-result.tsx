import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Scan,
  Focus,
  Contrast,
  Crop,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface AnalysisResultData {
  overall: "adequada" | "atencao" | "inadequada";
  score: number;
  findings: {
    id: string;
    type: "success" | "warning" | "error";
    category: string;
    message: string;
  }[];
  metadata: {
    examType: string;
    orientation: string;
    analyzedAt: string;
  };
}

interface AnalysisResultProps {
  result: AnalysisResultData;
}

const statusConfig = {
  adequada: {
    label: "Adequada para diagnóstico",
    color: "bg-success/10 text-success border-success/20",
    icon: CheckCircle2,
    progressColor: "bg-success",
  },
  atencao: {
    label: "Atenção necessária",
    color: "bg-warning/10 text-warning border-warning/20",
    icon: AlertTriangle,
    progressColor: "bg-warning",
  },
  inadequada: {
    label: "Inadequada — refazer exame",
    color: "bg-destructive/10 text-destructive border-destructive/20",
    icon: XCircle,
    progressColor: "bg-destructive",
  },
};

const categoryIcons: Record<string, typeof Scan> = {
  posicionamento: User,
  nitidez: Focus,
  contraste: Contrast,
  cobertura: Crop,
  geral: Scan,
};

export function AnalysisResult({ result }: AnalysisResultProps) {
  const status = statusConfig[result.overall];
  const StatusIcon = status.icon;

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-border/60">
        <CardHeader className="bg-secondary/30">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-radia-muted text-radia">
                <Scan className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold">Resultado da análise</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {result.metadata.examType} • {result.metadata.orientation}
                </p>
              </div>
            </div>
            <Badge variant="outline" className={["w-fit px-3 py-1 text-sm", status.color].join(" ")}>
              <StatusIcon className="mr-1.5 h-3.5 w-3.5" />
              {status.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">Pontuação de qualidade</span>
              <span className="font-semibold text-foreground">{result.score}/100</span>
            </div>
            <Progress value={result.score} className="h-2.5 bg-muted" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Achados técnicos</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-3">
            {result.findings.map((finding) => {
              const Icon = categoryIcons[finding.category] || Scan;
              const typeColor =
                finding.type === "success"
                  ? "text-success"
                  : finding.type === "warning"
                    ? "text-warning"
                    : "text-destructive";
              const bgColor =
                finding.type === "success"
                  ? "bg-success/10"
                  : finding.type === "warning"
                    ? "bg-warning/10"
                    : "bg-destructive/10";

              return (
                <li
                  key={finding.id}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-3"
                >
                  <div className={["flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", bgColor].join(" ")}>
                    <Icon className={["h-4 w-4", typeColor].join(" ")} />
                  </div>
                  <div>
                    <p className="text-sm font-medium capitalize text-foreground">
                      {finding.category}
                    </p>
                    <p className="text-sm text-muted-foreground">{finding.message}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
