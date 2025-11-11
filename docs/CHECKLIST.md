# ✅ Checklist de Configuração - PDF Insight

Use este checklist para garantir que seu ambiente está configurado corretamente.

## 📋 Pré-instalação

- [ ] Node.js 18.17+ instalado
- [ ] PostgreSQL instalado e rodando
- [ ] npm/yarn/pnpm instalado
- [ ] Git configurado (opcional)

## 🔧 Configuração Inicial

### 1. Instalação de Dependências

- [ ] Executou `npm install`
- [ ] Não houve erros na instalação
- [ ] `node_modules` foi criado

### 2. Variáveis de Ambiente

- [ ] Criou o arquivo `.env` copiando `.env.example`
- [ ] Configurou `DATABASE_URL` com suas credenciais PostgreSQL
- [ ] Gerou e configurou `JWT_SECRET`
- [ ] Gerou e configurou `BETTER_AUTH_SECRET`
- [ ] Configurou `BETTER_AUTH_URL` (padrão: http://localhost:3000)
- [ ] Configurou `FRONTEND_URL` no formato JSON array

**Comandos para gerar secrets (Windows PowerShell):**

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }) -as [byte[]])
```

### 3. Banco de Dados

- [ ] PostgreSQL está rodando
- [ ] Criou o database `pdf_insight`
- [ ] Executou `npm run db:push`
- [ ] Tabelas foram criadas com sucesso:
  - [ ] `user`
  - [ ] `session`
  - [ ] `account`
  - [ ] `verification`

**Verificar tabelas:**

```bash
npm run db:studio
```

### 4. Iniciar o Projeto

- [ ] Executou `npm run dev`
- [ ] Servidor iniciou sem erros
- [ ] Acesso http://localhost:3000 funciona
- [ ] Landing page carrega corretamente

## ✨ Funcionalidades

### Autenticação

- [ ] Acesso `/auth` funciona
- [ ] Formulário de registro está visível
- [ ] Consegue criar uma nova conta
- [ ] Redirecionamento para `/dashboard` após registro
- [ ] Consegue fazer logout
- [ ] Consegue fazer login novamente

### Dashboard

- [ ] Acesso `/dashboard` funciona quando autenticado
- [ ] Redirecionamento para `/auth` quando não autenticado
- [ ] Dados do usuário aparecem no header
- [ ] Botão de logout funciona

### UI/UX

- [ ] Design glassmorphism está aplicado
- [ ] Animações de fundo funcionam
- [ ] Gradientes e efeitos estão corretos
- [ ] Componentes shadcn/ui renderizam corretamente
- [ ] Toasts (notificações) funcionam

## 🧪 Testes Funcionais

### Teste 1: Criar Conta

1. [ ] Acesse http://localhost:3000/auth
2. [ ] Clique em "Não tem uma conta? Criar conta"
3. [ ] Preencha os dados:
   - Nome: Teste Usuario
   - Email: teste@email.com
   - Senha: senha123
4. [ ] Clique em "Criar conta"
5. [ ] Deve aparecer toast de sucesso
6. [ ] Deve redirecionar para `/dashboard`

### Teste 2: Login

1. [ ] Faça logout se estiver logado
2. [ ] Acesse http://localhost:3000/auth
3. [ ] Preencha:
   - Email: teste@email.com
   - Senha: senha123
4. [ ] Clique em "Entrar"
5. [ ] Deve aparecer toast de sucesso
6. [ ] Deve redirecionar para `/dashboard`

### Teste 3: Proteção de Rotas

1. [ ] Faça logout
2. [ ] Tente acessar http://localhost:3000/dashboard
3. [ ] Deve redirecionar automaticamente para `/auth`
4. [ ] Faça login
5. [ ] Acesse `/dashboard` - deve funcionar

### Teste 4: Persistência de Sessão

1. [ ] Faça login
2. [ ] Feche o navegador
3. [ ] Abra novamente e acesse o site
4. [ ] Deve continuar logado

## 🐛 Problemas Comuns

### ❌ Erro: "Cannot connect to database"

**Solução:**

- [ ] Verificou se PostgreSQL está rodando?
- [ ] `DATABASE_URL` no `.env` está correto?
- [ ] Criou o database `pdf_insight`?

### ❌ Erro: "Invalid environment variables"

**Solução:**

- [ ] Arquivo `.env` existe na raiz do projeto?
- [ ] Todas as variáveis estão preenchidas?
- [ ] `FRONTEND_URL` está no formato: `'["http://localhost:3000"]'`

### ❌ Erro ao criar conta

**Solução:**

- [ ] Tabelas foram criadas? Execute `npm run db:push`
- [ ] `BETTER_AUTH_SECRET` está configurado?
- [ ] Verifique o console do navegador (F12) para erros

### ❌ Página em branco

**Solução:**

- [ ] Verifique o terminal - há erros?
- [ ] Limpe cache: Ctrl+Shift+R (ou Cmd+Shift+R)
- [ ] Verifique console do navegador (F12)

## 📊 Verificação Final

### Ambiente de Desenvolvimento

- [ ] Servidor roda sem erros
- [ ] Hot reload funciona (mudanças refletem automaticamente)
- [ ] Não há erros no console do navegador
- [ ] Não há warnings críticos no terminal

### Banco de Dados

- [ ] Conexão estabelecida
- [ ] Schema aplicado
- [ ] Dados são salvos corretamente
- [ ] Drizzle Studio abre: `npm run db:studio`

### Autenticação

- [ ] Registro funciona
- [ ] Login funciona
- [ ] Logout funciona
- [ ] Proteção de rotas funciona
- [ ] Sessões persistem

### Interface

- [ ] Design glassmorphism aplicado
- [ ] Responsivo (teste em mobile)
- [ ] Animações suaves
- [ ] Ícones aparecem corretamente
- [ ] Formulários validam

## 🎉 Conclusão

Se todos os itens estão marcados, seu ambiente está **100% configurado**!

### Próximos Passos:

1. Explorar a documentação em `docs/`
2. Ler exemplos de código em `docs/EXEMPLOS.md`
3. Começar a implementar funcionalidades de PDF

---

**Data de configuração:** **_/_**/**\_\_**

**Notas adicionais:**

---

---

---
