import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return <Loader2 className={cn("animate-spin text-blue-600", sizeClasses[size], className)} />;
}

interface LoadingOverlayProps {
  message?: string;
}

export function LoadingOverlay({ message = "Carregando..." }: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="glass-light p-8 rounded-2xl flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
