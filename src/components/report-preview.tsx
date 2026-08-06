import { FileText, User, Calendar, Stethoscope, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export interface ReportData {
  patient: {
    initials: string;
    age: string;
    gender: string;
  };
  exam: {
    type: string;
    date: string;
    indication: string;
  };
  quality: {
    status: "adequada" | "atencao" | "inadequada";
    score: number;
    observations: string[];
  };
  description: string[];
  considerations: string[];
}

interface ReportPreviewProps {
  report: ReportData;
}

const statusLabels = {
  adequada: "Adequada para diagnóstico",
  atencao: "Atenção necessária",
  inadequada: "Inadequada — refazer exame",
};

const statusColors = {
  adequada: "bg-success/10 text-success border-success/20",
  atencao: "bg-warning/10 text-warning border-warning/20",
  inadequada: "bg-destructive/10 text-destructive border-destructive/20",
};

export function ReportPreview({ report }: ReportPreviewProps) {
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-radia-muted text-radia">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Pré-laudo estruturado</CardTitle>
            <p className="text-sm text-muted-foreground">Gerado automaticamente pela Radia</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Paciente</p>
              <p className="text-sm font-medium text-foreground">
                {report.patient.initials}, {report.patient.age}, {report.patient.gender}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Exame</p>
              <p className="text-sm font-medium text-foreground">{report.exam.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3">
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Indicação</p>
              <p className="text-sm font-medium text-foreground">{report.exam.indication}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Qualidade técnica</h4>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className={["px-2.5 py-1", statusColors[report.quality.status]].join(" ")}>
              {statusLabels[report.quality.status]}
            </Badge>
            <span className="text-sm text-muted-foreground">Pontuação: {report.quality.score}/100</span>
          </div>
          <ul className="mt-3 space-y-1.5">
            {report.quality.observations.map((obs, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                <span>{obs}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Descrição das estruturas</h4>
          <ul className="space-y-1.5">
            {report.description.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Considerações</h4>
          <ul className="space-y-1.5">
            {report.considerations.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-radia/20 bg-radia-muted/30 p-4">
          <p className="text-sm font-medium text-radia">Revisão obrigatória</p>
          <p className="text-sm text-muted-foreground">
            Este documento é um pré-laudo de apoio. O radiologista deve revisar, complementar e
            assinar o laudo final antes de qualquer decisão clínica.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="flex-1">
            Copiar laudo
          </Button>
          <Button className="flex-1 bg-radia text-radia-foreground hover:bg-radia/90">
            Exportar PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
