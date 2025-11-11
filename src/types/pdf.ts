export interface PDFDocument {
  id: string;
  userId: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
  uploadedAt: Date;
  processedAt?: Date | null;
  status: "pending" | "processing" | "completed" | "failed";
}

export interface ExtractionRequest {
  id: string;
  userId: string;
  pdfId: string;
  prompt: string;
  result?: string | null;
  resultPdfUrl?: string | null;
  createdAt: Date;
  completedAt?: Date | null;
  status: "pending" | "processing" | "completed" | "failed";
  errorMessage?: string | null;
}

export interface UploadedFile {
  file: File;
  preview?: string;
  progress: number;
  status: "idle" | "uploading" | "success" | "error";
}
