import { useCallback, useState } from "react";
import { Upload, X, FileImage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface UploadZoneProps {
  onAnalyze: (file: File) => void;
  isAnalyzing: boolean;
}

export function UploadZone({ onAnalyze, isAnalyzing }: UploadZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFile = useCallback((selectedFile: File) => {
    const validTypes = ["image/jpeg", "image/png", "image/dicom", "image/tiff"];
    if (!validTypes.includes(selectedFile.type) && !selectedFile.name.match(/\.(jpg|jpeg|png|tif|tiff|dcm)$/i)) {
      toast.error("Formato não suportado", {
        description: "Envie uma imagem JPEG, PNG, TIFF ou DICOM.",
      });
      return;
    }
    if (selectedFile.size > 50 * 1024 * 1024) {
      toast.error("Arquivo muito grande", {
        description: "O tamanho máximo é de 50 MB.",
      });
      return;
    }
    setFile(selectedFile);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const droppedFile = e.dataTransfer.files?.[0];
      if (droppedFile) handleFile(droppedFile);
    },
    [handleFile]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) handleFile(selectedFile);
    },
    [handleFile]
  );

  return (
    <div className="space-y-4">
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={[
          "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 text-center transition-all",
          dragActive
            ? "border-radia bg-radia-muted/40"
            : "border-border/80 bg-card hover:border-radia/40 hover:bg-accent/50",
        ].join(" ")}
      >
        <input
          type="file"
          id="radiograph-upload"
          accept=".jpg,.jpeg,.png,.tif,.tiff,.dcm,image/*"
          onChange={onInputChange}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-radia-muted text-radia">
          <Upload className="h-6 w-6" />
        </div>
        <p className="mt-4 text-base font-medium text-foreground">
          Arraste uma radiografia ou clique para selecionar
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Panorâmicas ou periapicais em JPEG, PNG, TIFF ou DICOM. Até 50 MB.
        </p>
      </div>

      {file && (
        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <FileImage className="h-5 w-5 text-radia" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setFile(null)}
              disabled={isAnalyzing}
              aria-label="Remover arquivo"
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => onAnalyze(file)}
              disabled={isAnalyzing}
              className="bg-radia text-radia-foreground hover:bg-radia/90"
            >
              {isAnalyzing ? "Analisando..." : "Analisar qualidade"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
