import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gradient">PDF Insight</span>
            </div>
            <Link href="/auth">
              <Button className="glass-dark hover:bg-white/20">Entrar</Button>
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tight">
                Extração Inteligente de
                <span className="block text-gradient">Dados em PDF</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforme seus documentos PDF em dados estruturados com inteligência artificial. Simples, rápido e
                preciso.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/auth">
                <Button size="lg" className="glass-dark hover:bg-white/20 text-lg px-8">
                  Começar agora
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="glass-light text-lg px-8">
                Ver demonstração
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              <div className="glass-light p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Rápido e Eficiente</h3>
                <p className="text-muted-foreground">
                  Processe seus documentos em segundos com nossa tecnologia avançada de IA.
                </p>
              </div>

              <div className="glass-light p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Inteligência Artificial</h3>
                <p className="text-muted-foreground">IA entende seu pedido e extrai exatamente o que você precisa.</p>
              </div>

              <div className="glass-light p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold">Seguro e Privado</h3>
                <p className="text-muted-foreground">
                  Seus documentos são processados com total segurança e privacidade.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
