import { AuthForm } from "@/components/features/auth/auth-form";

export default function AuthPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-2 text-gradient">PDF Insight</h1>
          <p className="text-muted-foreground">Extração inteligente de dados em PDF</p>
        </div>

        <AuthForm />
      </div>
    </div>
  );
}
