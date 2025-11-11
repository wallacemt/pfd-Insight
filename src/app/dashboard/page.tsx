"use client";

import { ProtectedRoute } from "@/components/features/auth/protected-route";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { FileText, LogOut, Upload } from "lucide-react";

function DashboardContent() {
  const { user } = useAuth();

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Logout realizado com sucesso!");
    window.location.href = "/";
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gradient">PDF Insight</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 glass-light px-4 py-2 rounded-full">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-blue-600 text-white text-xs">
                    {user?.name ? getInitials(user.name) : "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>

              <Button onClick={handleSignOut} variant="outline" size="sm" className="glass-light">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Bem-vindo, {user?.name?.split(" ")[0]}!</h1>
              <p className="text-muted-foreground">
                Faça upload de seus documentos PDF e comece a extrair dados inteligentemente.
              </p>
            </div>

            {/* Upload Area */}
            <Card className="glass-light border-dashed border-2 border-blue-300">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Arraste seus PDFs aqui</h3>
                <p className="text-muted-foreground mb-4">ou clique para selecionar arquivos</p>
                <Button className="glass-dark hover:bg-white/20">Selecionar arquivos</Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-light">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total de Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0</div>
                </CardContent>
              </Card>

              <Card className="glass-light">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Extrações Realizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0</div>
                </CardContent>
              </Card>

              <Card className="glass-light">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Este Mês</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Documents */}
            <Card className="glass-light">
              <CardHeader>
                <CardTitle>Documentos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  Nenhum documento enviado ainda.
                  <br />
                  Faça upload do seu primeiro PDF para começar!
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
