import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  withBackground?: boolean;
}

export function PageContainer({ children, className, withBackground = true }: PageContainerProps) {
  return (
    <div
      className={cn(
        "min-h-screen w-full relative overflow-hidden",
        withBackground && "bg-linear-to-br from-blue-50 via-purple-50 to-pink-50",
        className
      )}
    >
      {withBackground && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
