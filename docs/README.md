# 📚 Índice da Documentação - PDF Insight

Bem-vindo à documentação do PDF Insight! Use este índice para navegar pelos guias.

---

## 🚀 Para Começar

### 1. [Getting Started](./GETTING_STARTED.md)

**Inicie aqui!** Guia completo de instalação e configuração inicial.

**Você vai aprender:**

- Como instalar as dependências
- Configurar variáveis de ambiente
- Gerar secrets seguros
- Configurar o banco de dados
- Iniciar o servidor de desenvolvimento

**Tempo estimado:** 15-20 minutos

---

### 2. [Checklist de Configuração](./CHECKLIST.md)

Use este checklist para verificar se tudo está funcionando corretamente.

**Inclui:**

- ✅ Checklist de pré-instalação
- ✅ Verificação de dependências
- ✅ Testes funcionais
- ✅ Troubleshooting comum

---

## 📐 Arquitetura e Estrutura

### 3. [Estrutura do Projeto](./ESTRUTURA.md)

Guia completo da arquitetura e organização do código.

**Você vai aprender:**

- Estrutura de pastas e arquivos
- Convenções de nomenclatura
- Sistema de design (glassmorphism)
- Como funciona a autenticação
- Schemas do banco de dados
- Próximas implementações

**Para quem é:** Desenvolvedores que querem entender o projeto em profundidade

---

### 4. [Exemplos de Código](./EXEMPLOS.md)

Exemplos práticos de uso dos componentes e APIs.

**Inclui exemplos de:**

- Componentes UI (buttons, cards, inputs)
- Sistema de autenticação (login, registro, logout)
- Hooks personalizados
- Design patterns
- Queries no banco de dados
- Server Actions
- Uso de ícones

**Para quem é:** Desenvolvedores implementando novas features

---

## 🤝 Desenvolvimento

### 5. [Guia de Contribuição](./CONTRIBUTING.md)

Padrões de código e boas práticas para contribuir no projeto.

**Você vai aprender:**

- Padrões de código TypeScript/React
- Estrutura de componentes
- Guia de estilo (Tailwind)
- Onde criar novos arquivos
- Git workflow e commits
- Como debugar
- Performance e otimizações

**Para quem é:** Todos os desenvolvedores do projeto

---

## 📋 Especificações

### 6. [Documentação Inicial](./DOCS_INICIAL.md)

Especificações originais do projeto PDF Insight.

**Contém:**

- Visão geral do projeto
- Objetivos e casos de uso
- Arquitetura planejada
- Funcionalidades desejadas
- Fluxo de processo
- Tecnologias escolhidas

**Para quem é:** Entender o propósito e visão do produto

---

## 📖 Guias de Referência Rápida

### Instalação Rápida

```bash
npm install
cp .env.example .env
# Configure o .env
npm run db:push
npm run dev
```

### Comandos Principais

```bash
# Desenvolvimento
npm run dev          # Iniciar servidor
npm run build        # Build para produção
npm run lint         # Verificar erros
npm run format       # Formatar código

# Banco de dados
npm run db:push      # Aplicar schema
npm run db:studio    # Visualizar dados
npm run db:generate  # Gerar migrations
npm run db:migrate   # Executar migrations
```

### Estrutura de Pastas

```
src/
├── app/              # Páginas e API routes
├── components/       # Componentes React
│   ├── ui/          # Componentes base
│   └── features/    # Componentes de features
├── db/              # Banco de dados
├── hooks/           # Custom hooks
├── lib/             # Utilitários
├── types/           # TypeScript types
└── actions/         # Server actions
```

### Links Úteis

- Landing page: http://localhost:3000
- Auth: http://localhost:3000/auth
- Dashboard: http://localhost:3000/dashboard
- Drizzle Studio: https://local.drizzle.studio (após `npm run db:studio`)

---

## 🎯 Roadmap de Leitura

### Para Iniciantes

1. ✅ [Getting Started](./GETTING_STARTED.md)
2. ✅ [Checklist](./CHECKLIST.md)
3. ✅ [Exemplos](./EXEMPLOS.md)

### Para Desenvolvedores

1. ✅ [Estrutura](./ESTRUTURA.md)
2. ✅ [Exemplos](./EXEMPLOS.md)
3. ✅ [Contribuição](./CONTRIBUTING.md)

### Para Entender o Produto

1. ✅ [Documentação Inicial](./DOCS_INICIAL.md)
2. ✅ [Estrutura](./ESTRUTURA.md)

---

## 🆘 Precisa de Ajuda?

### Problemas Comuns

**Erro de conexão com banco:**
→ Veja troubleshooting em [Getting Started](./GETTING_STARTED.md#-troubleshooting)

**Erro ao criar conta:**
→ Verifique [Checklist](./CHECKLIST.md#teste-1-criar-conta)

**Dúvida sobre componentes:**
→ Consulte [Exemplos](./EXEMPLOS.md)

**Dúvida sobre estrutura:**
→ Veja [Estrutura do Projeto](./ESTRUTURA.md)

---

## 📝 Arquivos de Exemplo

A pasta `docs/` também contém PDFs de exemplo para testes:

- `PONTO 1.pdf` / `PONTO 2.pdf` - Folhas de ponto
- `HOLERITE 1.pdf` / `HOLERITE 2.pdf` - Contracheques

Use estes arquivos para testar a funcionalidade de extração quando implementada.

---

## 🔄 Atualizações

Esta documentação é mantida junto com o código. Sempre consulte a versão mais recente no repositório.

**Última atualização:** Novembro 2025

---

**Pronto para começar?** Vá para [Getting Started](./GETTING_STARTED.md)! 🚀
