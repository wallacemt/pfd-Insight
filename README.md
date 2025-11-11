# 📄 PDF Insight - Sistema de Extração Inteligente de Dados em PDF

Sistema web desenvolvido com Next.js 15 para extração inteligente de dados de arquivos PDF usando IA.

## 🎨 Design

Interface clean e moderna com:

- **Glassmorphism effect** (glass UI)
- Design inspirado em produtos Apple
- Animações suaves e transições elegantes
- Cores neutras com gradientes sutis

## 🚀 Tecnologias

- **Framework**: Next.js 15 (App Router)
- **UI**: shadcn/ui + Tailwind CSS v4
- **Autenticação**: Better Auth
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL
- **Ícones**: Lucide React
- **Notificações**: Sonner

## 📦 Estrutura do Projeto

```
src/
├── app/                    # App Router (páginas e API routes)
│   ├── api/
│   │   └── auth/          # Better Auth endpoints
│   ├── auth/              # Página de login/registro
│   ├── dashboard/         # Dashboard principal
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/                # Componentes base do shadcn/ui
│   └── features/          # Componentes de features
│       ├── auth/          # Componentes de autenticação
│       └── pdf/           # Componentes relacionados a PDF
├── db/                    # Configuração do banco de dados
│   ├── connection.ts      # Conexão Drizzle
│   ├── seed.ts            # Seeds do banco
│   └── schemas/           # Schemas Drizzle
│       ├── index.ts
│       └── user.ts        # Schema de usuários e auth
├── lib/                   # Utilitários e configurações
│   ├── auth.ts            # Configuração Better Auth (server)
│   ├── auth-client.ts     # Cliente Better Auth (client)
│   └── utils.ts           # Funções utilitárias
├── hooks/                 # Custom React hooks
│   └── use-auth.ts        # Hook de autenticação
├── types/                 # TypeScript types
│   ├── auth.ts            # Types de autenticação
│   └── pdf.ts             # Types de PDF
├── actions/               # Server actions
└── env.ts                 # Validação de variáveis de ambiente
```

## 🔧 Instalação

1. Clone o repositório

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

- `DATABASE_URL`: String de conexão PostgreSQL
- `BETTER_AUTH_SECRET`: Segredo para Better Auth (gere com `openssl rand -base64 32`)
- `JWT_SECRET`: Segredo para JWT (gere com `openssl rand -base64 32`)

4. Execute as migrations do banco:

```bash
npm run db:push
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🗃️ Banco de Dados

### Schemas

O projeto usa as seguintes tabelas (Better Auth):

- **user**: Dados dos usuários (id, name, email, etc.)
- **session**: Sessões ativas
- **account**: Contas e credenciais
- **verification**: Tokens de verificação

### Comandos úteis

```bash
# Push schema changes
npm run db:push

# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Open Drizzle Studio
npm run db:studio
```

## 🔐 Autenticação

O sistema usa **Better Auth** com:

- Registro com email, nome e senha
- Login com email e senha
- Sessões seguras com cookies
- Proteção de rotas com middleware

### Rotas de autenticação

- `/auth` - Login/Registro
- `/dashboard` - Dashboard protegido (requer autenticação)

## 🎨 Componentes UI

Componentes shadcn/ui instalados:

- Button
- Input
- Card
- Label
- Form
- Sonner (Toast notifications)
- Dropdown Menu
- Avatar

### Classes utilitárias personalizadas

```css
.glass          /* Glassmorphism básico */
/* Glassmorphism básico */
.glass-light    /* Glass com fundo claro */
.glass-dark     /* Glass com fundo escuro */
.text-gradient  /* Texto com gradiente */
.shimmer; /* Efeito shimmer animado */
```

## 📝 Próximos Passos

- [ ] Implementar upload de PDF
- [ ] Integrar API de IA (Gemini/OpenAI)
- [ ] Criar parser de PDF
- [ ] Implementar extração de dados
- [ ] Gerar PDF com resultados
- [ ] Adicionar histórico de extrações
- [ ] Implementar armazenamento de arquivos

## 📄 Licença

MIT

---

Desenvolvido com ❤️ usando Next.js e shadcn/ui
