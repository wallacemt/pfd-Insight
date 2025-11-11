# 🚀 Guia Rápido de Início - PDF Insight

## ✅ Pré-requisitos

- **Node.js** 18.17 ou superior
- **PostgreSQL** instalado e rodando
- **npm** ou **yarn** ou **pnpm**

---

## 📦 Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo de exemplo e edite com suas configurações:

```bash
cp .env.example .env
```

No arquivo `.env`, configure:

```env
# Database - Configure sua string de conexão PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/pdf_insight"

# Server
NODE_ENV="development"
PORT="3000"

# Frontend URLs (formato JSON array)
FRONTEND_URL='["http://localhost:3000"]'

# Secrets - IMPORTANTE: Gere valores únicos!
JWT_SECRET="cole-aqui-seu-jwt-secret"
BETTER_AUTH_SECRET="cole-aqui-seu-better-auth-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

### 3. Gerar secrets

Execute estes comandos para gerar secrets seguros:

**No PowerShell (Windows):**

```powershell
# Gerar JWT_SECRET
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }) -as [byte[]])

# Gerar BETTER_AUTH_SECRET
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }) -as [byte[]])
```

**No Linux/Mac:**

```bash
# Gerar JWT_SECRET
openssl rand -base64 32

# Gerar BETTER_AUTH_SECRET
openssl rand -base64 32
```

Cole os valores gerados no arquivo `.env`.

### 4. Configurar o banco de dados

#### Criar o banco de dados:

```sql
CREATE DATABASE pdf_insight;
```

#### Aplicar o schema:

```bash
npm run db:push
```

Este comando criará automaticamente todas as tabelas necessárias.

### 5. Iniciar o servidor

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

---

## 🎯 Estrutura Criada

### Páginas disponíveis:

1. **Landing Page** (`/`)

   - Página inicial com apresentação do produto
   - Design glassmorphism com animações

2. **Autenticação** (`/auth`)

   - Login e registro com email/senha
   - Validações e feedback visual

3. **Dashboard** (`/dashboard`)
   - Área protegida para usuários autenticados
   - Interface para upload de PDFs (estrutura básica)

### API Endpoints:

- **`/api/auth/[...all]`**: Endpoints do Better Auth
  - `POST /api/auth/sign-in/email`: Login
  - `POST /api/auth/sign-up/email`: Registro
  - `POST /api/auth/sign-out`: Logout
  - `GET /api/auth/session`: Obter sessão

---

## 🗃️ Banco de Dados

### Tabelas criadas automaticamente:

1. **`user`**: Usuários do sistema

   - `id`, `name`, `email`, `email_verified`, `image`, `created_at`, `updated_at`

2. **`session`**: Sessões ativas

   - `id`, `user_id`, `token`, `expires_at`, `ip_address`, `user_agent`

3. **`account`**: Contas e credenciais

   - `id`, `user_id`, `provider_id`, `password`, `access_token`, etc.

4. **`verification`**: Tokens de verificação
   - `id`, `identifier`, `value`, `expires_at`

### Visualizar dados:

```bash
npm run db:studio
```

Abrirá o Drizzle Studio em: **https://local.drizzle.studio**

---

## 🧪 Testar a aplicação

### 1. Criar uma conta

1. Acesse http://localhost:3000
2. Clique em "Entrar" ou vá direto para http://localhost:3000/auth
3. Clique em "Não tem uma conta? Criar conta"
4. Preencha:
   - Nome: Seu Nome
   - Email: seu@email.com
   - Senha: minhasenha123
5. Clique em "Criar conta"

### 2. Fazer login

1. Após criar a conta, você será redirecionado para o dashboard
2. Ou acesse `/auth` e faça login com as credenciais criadas

### 3. Acessar o Dashboard

- O dashboard está em: http://localhost:3000/dashboard
- É uma rota protegida - requer autenticação
- Se não estiver logado, será redirecionado para `/auth`

---

## 🛠️ Comandos Úteis

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm run start

# Verificar erros (Biome)
npm run lint

# Formatar código
npm run format
```

### Banco de Dados (Drizzle)

```bash
# Aplicar schema no banco (desenvolvimento)
npm run db:push

# Gerar migrations
npm run db:generate

# Executar migrations
npm run db:migrate

# Abrir Drizzle Studio (visualizar dados)
npm run db:studio
```

---

## 🎨 Componentes Disponíveis

### UI Base (shadcn/ui)

- `<Button>` - Botões com variantes
- `<Input>` - Campos de entrada
- `<Card>`, `<CardHeader>`, `<CardContent>` - Cards
- `<Label>` - Labels para formulários
- `<Avatar>`, `<AvatarFallback>` - Avatares
- `<DropdownMenu>` - Menus dropdown
- `<Sonner>` - Toast notifications

### Componentes Personalizados

- `<LoadingSpinner>` - Spinner de loading
- `<LoadingOverlay>` - Overlay de loading fullscreen
- `<ErrorMessage>` - Mensagens de erro
- `<PageContainer>` - Container com background decorativo
- `<AuthForm>` - Formulário de login/registro
- `<ProtectedRoute>` - HOC para proteger rotas

### Hooks

- `useAuth()` - Dados de autenticação do usuário

---

## 🔧 Troubleshooting

### Erro de conexão com banco de dados

**Problema:** `Error connecting to database`

**Solução:**

1. Verifique se o PostgreSQL está rodando
2. Confirme a string de conexão no `.env`
3. Verifique usuário e senha
4. Teste a conexão:
   ```bash
   psql -U seu_usuario -d pdf_insight
   ```

### Erro de variáveis de ambiente

**Problema:** `ZodError: Invalid environment variables`

**Solução:**

1. Verifique se o arquivo `.env` existe
2. Confirme que todas as variáveis estão preenchidas
3. Certifique-se de que `FRONTEND_URL` está no formato JSON array:
   ```
   FRONTEND_URL='["http://localhost:3000"]'
   ```

### Erro ao instalar dependências

**Problema:** `npm ERR!` durante instalação

**Solução:**

```bash
# Limpar cache do npm
npm cache clean --force

# Deletar node_modules e package-lock.json
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### Página de auth não funciona

**Problema:** Login/registro não responde

**Solução:**

1. Verifique se as tabelas foram criadas: `npm run db:push`
2. Confirme se `BETTER_AUTH_SECRET` está configurado
3. Verifique o console do navegador para erros

---

## 📚 Documentação Adicional

- **`docs/ESTRUTURA.md`**: Guia detalhado da estrutura do projeto
- **`docs/EXEMPLOS.md`**: Exemplos de código e padrões de uso
- **`docs/DOCS_INICIAL.md`**: Especificações do projeto

---

## 🎉 Pronto!

Seu ambiente está configurado! Agora você pode:

1. ✅ Criar contas de usuário
2. ✅ Fazer login/logout
3. ✅ Acessar o dashboard protegido
4. ✅ Ver a landing page com design glassmorphism

### Próximos passos:

- [ ] Implementar upload de PDF
- [ ] Integrar IA para extração
- [ ] Criar parser de PDF
- [ ] Gerar PDFs com resultados

---

**Dúvidas?** Consulte a documentação em `docs/` ou abra uma issue!

🚀 Happy coding!
