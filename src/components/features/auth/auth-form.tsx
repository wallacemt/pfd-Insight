"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import type { SignInData, SignUpData } from "@/types/auth";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const signInData: SignInData = {
          email: formData.email,
          password: formData.password,
        };

        const result = await authClient.signIn.email(signInData);

        if (result.error) {
          toast.error(result.error.message || "Erro ao fazer login");
        } else {
          toast.success("Login realizado com sucesso!");
          window.location.href = "/dashboard";
        }
      } else {
        const result = await authClient.signUp.email({
          email: formData.email,
          password: formData.password,
          name: formData.name,
        });

        if (result.error) {
          toast.error(result.error.message || "Erro ao criar conta");
        } else {
          toast.success("Conta criada com sucesso!");
          window.location.href = "/dashboard";
        }
      }
    } catch (error) {
      toast.error("Erro inesperado. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-light border-white/30 shadow-2xl w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {isLogin ? "Bem-vindo de volta" : "Criar conta"}
        </CardTitle>
        <CardDescription className="text-center">
          {isLogin ? "Entre com suas credenciais para acessar" : "Preencha os dados para criar sua conta"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required={!isLogin}
                disabled={isLoading}
                className="glass border-white/20 focus:border-white/40"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isLoading}
              className="glass border-white/20 focus:border-white/40"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              disabled={isLoading}
              className="glass border-white/20 focus:border-white/40"
            />
          </div>

          <Button type="submit" className="w-full glass-dark hover:bg-white/20 transition-all" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>{isLogin ? "Entrar" : "Criar conta"}</>
            )}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ name: "", email: "", password: "" });
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
            disabled={isLoading}
          >
            {isLogin ? "Não tem uma conta? Criar conta" : "Já tem uma conta? Fazer login"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
