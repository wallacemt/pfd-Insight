# 📚 Exemplos de Uso - PDF Insight

## 🎯 Componentes de UI

### Buttons com Glass Effect

```tsx
import { Button } from "@/components/ui/button";

// Button com glass dark
<Button className="glass-dark hover:bg-white/20">
  Click me
</Button>

// Button com glass light
<Button className="glass-light">
  Click me
</Button>

// Button com loading
<Button disabled={isLoading}>
  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {isLoading ? "Carregando..." : "Enviar"}
</Button>
```

### Cards Estilizados

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card className="glass-light border-white/30 shadow-2xl">
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo aqui...</CardContent>
</Card>;
```

### Inputs com Glass

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="seu@email.com" className="glass border-white/20 focus:border-white/40" />
</div>;
```

---

## 🔐 Autenticação

### Hook useAuth

```tsx
"use client";

import { useAuth } from "@/hooks/use-auth";
import { LoadingSpinner } from "@/components/ui/loading";

export function ProfileComponent() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <p>Você não está autenticado</p>;
  }

  return (
    <div>
      <h1>Olá, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

### Login Manual

```tsx
"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

async function handleLogin(email: string, password: string) {
  const result = await authClient.signIn.email({
    email,
    password,
  });

  if (result.error) {
    toast.error(result.error.message || "Erro ao fazer login");
  } else {
    toast.success("Login realizado com sucesso!");
    window.location.href = "/dashboard";
  }
}
```

### Registro Manual

```tsx
"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

async function handleSignUp(name: string, email: string, password: string) {
  const result = await authClient.signUp.email({
    name,
    email,
    password,
  });

  if (result.error) {
    toast.error(result.error.message || "Erro ao criar conta");
  } else {
    toast.success("Conta criada com sucesso!");
    window.location.href = "/dashboard";
  }
}
```

### Logout

```tsx
"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <Button onClick={handleLogout} variant="outline">
      <LogOut className="w-4 h-4 mr-2" />
      Sair
    </Button>
  );
}
```

### Proteção de Página

```tsx
// src/app/minha-pagina-protegida/page.tsx
"use client";

import { ProtectedRoute } from "@/components/features/auth/protected-route";

function MinhaPaginaContent() {
  return (
    <div>
      <h1>Conteúdo protegido</h1>
    </div>
  );
}

export default function MinhaPaginaProtegida() {
  return (
    <ProtectedRoute>
      <MinhaPaginaContent />
    </ProtectedRoute>
  );
}
```

---

## 🎨 Design Patterns

### Layout com Background Decorativo

```tsx
export default function MyPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10">{/* Seu conteúdo aqui */}</div>
    </div>
  );
}
```

### Avatar com Iniciais

```tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

<Avatar className="w-10 h-10">
  <AvatarFallback className="bg-blue-600 text-white">
    {getInitials("João Silva")} {/* JS */}
  </AvatarFallback>
</Avatar>;
```

### Notificações (Toast)

```tsx
import { toast } from "sonner";

// Sucesso
toast.success("Operação realizada com sucesso!");

// Erro
toast.error("Algo deu errado!");

// Aviso
toast.warning("Atenção!");

// Informação
toast.info("Informação importante");

// Com ação
toast.success("Arquivo enviado!", {
  action: {
    label: "Ver",
    onClick: () => console.log("Ver arquivo"),
  },
});
```

---

## 🗃️ Banco de Dados

### Consultar Usuários

```tsx
import { db } from "@/db/connection";
import { user } from "@/db/schemas/user";
import { eq } from "drizzle-orm";

// Buscar por email
const result = await db.select().from(user).where(eq(user.email, "usuario@email.com"));

// Buscar todos
const allUsers = await db.select().from(user);

// Buscar por ID
const userById = await db.select().from(user).where(eq(user.id, "user-id-123"));
```

### Criar Novo Schema

```tsx
// src/db/schemas/pdf-document.ts
import { pgTable, text, timestamp, integer, uuid } from "drizzle-orm/pg-core";
import { user } from "./user";

export const pdfDocument = pgTable("pdf_document", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  fileName: text("file_name").notNull(),
  fileSize: integer("file_size").notNull(),
  fileUrl: text("file_url").notNull(),
  uploadedAt: timestamp("uploaded_at", { mode: "date" }).notNull().defaultNow(),
  status: text("status").notNull().default("pending"),
});

// Não esqueça de exportar no index.ts
// import * as pdfDocument from "./pdf-document";
// export const schema = { ...user, ...pdfDocument };
```

---

## 🎯 Server Actions (Exemplo)

```tsx
// src/actions/upload-pdf.ts
"use server";

import { db } from "@/db/connection";
import { pdfDocument } from "@/db/schemas/pdf-document";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function uploadPDF(formData: FormData) {
  // Verificar autenticação
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return { error: "Não autenticado" };
  }

  const file = formData.get("file") as File;

  if (!file) {
    return { error: "Nenhum arquivo enviado" };
  }

  // Validações
  if (file.type !== "application/pdf") {
    return { error: "Apenas arquivos PDF são permitidos" };
  }

  if (file.size > 10 * 1024 * 1024) {
    // 10MB
    return { error: "Arquivo muito grande (máx: 10MB)" };
  }

  // Upload para storage (implementar)
  const fileUrl = "https://storage.example.com/...";

  // Salvar no banco
  const [newDoc] = await db
    .insert(pdfDocument)
    .values({
      userId: session.user.id,
      fileName: file.name,
      fileSize: file.size,
      fileUrl,
    })
    .returning();

  return { success: true, document: newDoc };
}
```

### Usando Server Action no Cliente

```tsx
"use client";

import { uploadPDF } from "@/actions/upload-pdf";
import { toast } from "sonner";

export function UploadForm() {
  async function handleSubmit(formData: FormData) {
    const result = await uploadPDF(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("PDF enviado com sucesso!");
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="file" name="file" accept=".pdf" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## 🎨 Ícones (Lucide React)

```tsx
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Edit,
  Check,
  X,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";

// Uso
<FileText className="w-6 h-6 text-blue-600" />
<Upload className="w-4 h-4 mr-2" />
<Loader2 className="w-4 h-4 animate-spin" />
```

---

## 🚀 Performance

### Lazy Loading de Componentes

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/heavy-component"), {
  loading: () => <LoadingSpinner />,
  ssr: false, // se não precisar de SSR
});
```

### Suspense Boundaries

```tsx
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading";

export default function MyPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AsyncComponent />
    </Suspense>
  );
}
```

---

Estes exemplos cobrem os principais padrões de uso do projeto! 🎉
