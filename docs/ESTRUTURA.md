# 🏗️ Estrutura do Projeto - Guia de Desenvolvimento

## 📁 Organização de Pastas

### `/src/app`

Diretório principal do App Router do Next.js 15.

- **`page.tsx`**: Landing page com design glassmorphism
- **`layout.tsx`**: Layout global com fontes Geist e Toaster
- **`/auth/page.tsx`**: Página de login e registro
- **`/dashboard/page.tsx`**: Dashboard protegido para usuários autenticados
- **`/api/auth/[...all]/route.ts`**: API routes do Better Auth

### `/src/components`

Componentes React organizados por tipo.

#### `/ui` - Componentes base do shadcn/ui

- `button.tsx`, `input.tsx`, `card.tsx`, etc.
- `loading.tsx`: Spinners e overlays de loading
- `error-message.tsx`: Exibição de erros

#### `/features` - Componentes de funcionalidades

- **`/auth`**: Componentes de autenticação
  - `auth-form.tsx`: Formulário de login/registro
  - `protected-route.tsx`: HOC para proteção de rotas
- **`/pdf`**: Componentes relacionados a PDF (a implementar)

### `/src/db`

Configuração e schemas do banco de dados.

- **`connection.ts`**: Conexão Drizzle com PostgreSQL
- **`seed.ts`**: Seeds para popular o banco
- **`/schemas`**: Schemas Drizzle ORM
  - `user.ts`: Tabelas de usuários e autenticação (Better Auth)
  - `index.ts`: Exportação centralizada dos schemas

### `/src/lib`

Bibliotecas e utilitários.

- **`auth.ts`**: Configuração do Better Auth (server-side)
- **`auth-client.ts`**: Cliente Better Auth (client-side)
- **`utils.ts`**: Funções utilitárias (cn, etc.)

### `/src/hooks`

Custom React hooks.

- **`use-auth.ts`**: Hook para acessar dados de autenticação
  ```tsx
  const { user, session, isLoading, isAuthenticated } = useAuth();
  ```

### `/src/types`

Definições de tipos TypeScript.

- **`auth.ts`**: Types de autenticação (AuthUser, SignInData, etc.)
- **`pdf.ts`**: Types relacionados a PDF (PDFDocument, ExtractionRequest)

### `/src/actions`

Server Actions do Next.js (a implementar).

---

## 🎨 Design System

### Classes Utilitárias Personalizadas

```css
/* Glassmorphism Effects */
.glass          /* Fundo semi-transparente com blur */
/* Fundo semi-transparente com blur */
.glass-light    /* Glass com fundo claro (60% branco) */
.glass-dark     /* Glass com fundo escuro (20% preto) */

/* Efeitos de Texto */
.text-gradient  /* Gradiente azul → roxo */

/* Animações */
.shimmer; /* Efeito de brilho animado */
```

### Paleta de Cores

O projeto usa uma paleta neutra com acentos em:

- **Azul**: `bg-blue-600`, `text-blue-600`
- **Roxo**: `bg-purple-600`, `text-purple-600`
- **Rosa**: `bg-pink-600`, `text-pink-600`

### Componentes Reutilizáveis

#### Button

```tsx
<Button className="glass-dark hover:bg-white/20">Click me</Button>
```

#### Card com Glass Effect

```tsx
<Card className="glass-light">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

---

## 🔐 Sistema de Autenticação

### Fluxo de Autenticação

1. **Registro**: `/auth` → `authClient.signUp.email()`
2. **Login**: `/auth` → `authClient.signIn.email()`
3. **Redirecionamento**: Dashboard após autenticação
4. **Proteção**: Componente `<ProtectedRoute>` valida sessão

### Uso do Hook de Auth

```tsx
import { useAuth } from "@/hooks/use-auth";

function MyComponent() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <p>Faça login</p>;

  return <p>Olá, {user.name}!</p>;
}
```

### Proteção de Rotas

```tsx
import { ProtectedRoute } from "@/components/features/auth/protected-route";

export default function ProtectedPage() {
  return <ProtectedRoute>{/* Conteúdo protegido */}</ProtectedRoute>;
}
```

---

## 🗃️ Banco de Dados

### Schemas do Better Auth

O Better Auth cria automaticamente as seguintes tabelas:

1. **`user`**: Dados dos usuários

   - `id`, `name`, `email`, `emailVerified`, `createdAt`, etc.

2. **`session`**: Sessões ativas

   - `id`, `userId`, `token`, `expiresAt`, `ipAddress`, etc.

3. **`account`**: Contas e credenciais

   - `id`, `userId`, `providerId`, `password` (hash bcrypt)

4. **`verification`**: Tokens de verificação
   - `id`, `identifier`, `value`, `expiresAt`

### Comandos Drizzle

```bash
# Gerar migrations
npm run db:generate

# Aplicar migrations
npm run db:migrate

# Push schema sem migrations (dev)
npm run db:push

# Abrir Drizzle Studio
npm run db:studio
```

---

## 🚀 Próximas Implementações

### 1. Upload de PDF

- Componente de drag & drop
- Validação de arquivo (tipo, tamanho)
- Progress bar de upload
- Armazenamento (Supabase/Cloudinary)

### 2. Processamento de PDF

- Parsing com `pdf-parse` ou `pdfjs-dist`
- Extração de texto
- Análise com IA (Gemini/OpenAI)

### 3. Extração de Dados

- Interpretação do prompt do usuário
- Identificação de padrões (regex + NLP)
- Formatação dos resultados

### 4. Geração de PDF

- Criação de novo PDF com `pdfkit` ou `pdf-lib`
- Design limpo e profissional
- Download/envio por email

### 5. Histórico

- Schema para `pdf_documents` e `extraction_requests`
- Listagem de PDFs processados
- Detalhes de cada extração

---

## 📝 Boas Práticas

### Estrutura de Componentes

```tsx
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { MyType } from "@/types/my-type";

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
}

// 3. Component
export function MyComponent({ title }: MyComponentProps) {
  const [state, setState] = useState("");

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
```

### Naming Conventions

- **Componentes**: PascalCase (`AuthForm`, `ProtectedRoute`)
- **Hooks**: camelCase com `use` prefix (`useAuth`, `usePDF`)
- **Funções**: camelCase (`handleSubmit`, `processData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_FILE_SIZE`)
- **Types/Interfaces**: PascalCase (`AuthUser`, `PDFDocument`)

### Organização de Imports

```tsx
// 1. React/Next
import { useState } from "react";
import { useRouter } from "next/navigation";

// 2. External libraries
import { toast } from "sonner";

// 3. Internal (absolute imports)
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import type { AuthUser } from "@/types/auth";
```

---

## 🔧 Variáveis de Ambiente

Copie `.env.example` para `.env` e configure:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/pdf_insight"

# Server
NODE_ENV="development"
PORT="3000"

# Frontend (JSON array)
FRONTEND_URL='["http://localhost:3000"]'

# Secrets (gere com: openssl rand -base64 32)
JWT_SECRET="..."
BETTER_AUTH_SECRET="..."
BETTER_AUTH_URL="http://localhost:3000"
```

---

Desenvolvido com ❤️ e boas práticas!
