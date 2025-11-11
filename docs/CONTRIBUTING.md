# 🤝 Guia de Contribuição

## 📐 Padrões de Código

### TypeScript

- ✅ Use TypeScript em todos os arquivos
- ✅ Defina tipos explícitos para props e retornos
- ✅ Use interfaces para objetos, types para unions/primitivos
- ❌ Evite `any` - use `unknown` se necessário

### React

- ✅ Use componentes funcionais com hooks
- ✅ Prefira `const` para definir componentes
- ✅ Extraia lógica complexa para custom hooks
- ❌ Evite class components

### Nomenclatura

- **Arquivos**: kebab-case (`my-component.tsx`)
- **Componentes**: PascalCase (`MyComponent`)
- **Funções**: camelCase (`handleSubmit`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)
- **Hooks**: camelCase com `use` (`useAuth`)

### Estrutura de Componentes

```tsx
// 1. Imports externos
import { useState } from "react";
import { useRouter } from "next/navigation";

// 2. Imports de libs
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// 3. Imports internos
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import type { User } from "@/types/auth";

// 4. Types/Interfaces locais
interface MyComponentProps {
  title: string;
  onSubmit?: () => void;
}

// 5. Componente
export function MyComponent({ title, onSubmit }: MyComponentProps) {
  // 5.1 Hooks
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // 5.2 Handlers
  const handleClick = () => {
    // ...
  };

  // 5.3 Effects (se necessário)
  // useEffect(...)

  // 5.4 Render
  return (
    <div>
      <h1>{title}</h1>
      {/* ... */}
    </div>
  );
}
```

## 🎨 Guia de Estilo

### Classes Tailwind

**✅ Ordem recomendada:**

1. Layout (flex, grid, block)
2. Posicionamento (absolute, relative)
3. Dimensões (w-, h-)
4. Espaçamento (p-, m-, gap-)
5. Tipografia (text-, font-)
6. Cores (bg-, text-, border-)
7. Efeitos (shadow-, rounded-, opacity-)
8. Estados (hover:, focus:, active:)
9. Responsividade (md:, lg:)

```tsx
// ✅ Bom
<div className="flex flex-col w-full p-4 gap-2 text-lg font-bold bg-white rounded-lg shadow-md hover:shadow-lg">

// ❌ Evitar (ordem aleatória)
<div className="bg-white hover:shadow-lg gap-2 flex text-lg rounded-lg w-full flex-col shadow-md p-4 font-bold">
```

### Glassmorphism

Use as classes utilitárias:

```tsx
// Background decorativo
<div className="glass" />          // Básico
<div className="glass-light" />    // Claro (60% branco)
<div className="glass-dark" />     // Escuro (20% preto)
```

### Cores

Paleta principal:

- **Blue**: `bg-blue-600`, `text-blue-600`
- **Purple**: `bg-purple-600`, `text-purple-600`
- **Pink**: `bg-pink-600`, `text-pink-600`
- **Neutral**: Use as cores do tema (`bg-background`, `text-foreground`)

## 📂 Onde Criar Novos Arquivos

### Componentes

**UI Base** (`/src/components/ui/`)

- Componentes reutilizáveis e genéricos
- Sem lógica de negócio
- Exemplo: Button, Input, Modal

**Features** (`/src/components/features/[feature]/`)

- Componentes específicos de uma feature
- Pode ter lógica de negócio
- Exemplo: `auth/login-form.tsx`, `pdf/upload-zone.tsx`

### Hooks

**`/src/hooks/`**

- Custom hooks reutilizáveis
- Nome: `use-[nome].ts`
- Exemplo: `use-auth.ts`, `use-upload.ts`

### Types

**`/src/types/`**

- Definições de tipos TypeScript
- Organize por domínio
- Exemplo: `auth.ts`, `pdf.ts`, `api.ts`

### Server Actions

**`/src/actions/`**

- Server Actions do Next.js
- Use `"use server"` no topo
- Nome descritivo: `upload-pdf.ts`, `process-document.ts`

### Schemas

**`/src/db/schemas/`**

- Schemas Drizzle ORM
- Um arquivo por entidade
- Exporte no `index.ts`

## ✅ Checklist antes de Commit

- [ ] Código formatado: `npm run format`
- [ ] Sem erros de lint: `npm run lint`
- [ ] Sem erros TypeScript
- [ ] Componente testado manualmente
- [ ] Props documentadas (comentários se necessário)
- [ ] Imports organizados
- [ ] Nomes descritivos

## 🧪 Testes

### Teste Manual

Antes de cada commit:

1. Funcionalidade funciona?
2. Não quebrou outras funcionalidades?
3. UI está correta em diferentes tamanhos de tela?
4. Carrega rápido?
5. Erros são tratados gracefully?

### Testes Automatizados (futuro)

Quando implementar testes:

- Use Jest + React Testing Library
- Coloque testes em `__tests__/` ou `.test.tsx`
- Teste comportamento, não implementação

## 🔄 Git Workflow

### Branches

- `main`: Produção
- `develop`: Desenvolvimento
- `feature/nome-da-feature`: Novas funcionalidades
- `fix/nome-do-bug`: Correções

### Commits

Use Conventional Commits:

```
feat: adiciona upload de PDF
fix: corrige erro no login
docs: atualiza README
style: formata código
refactor: refatora componente de auth
test: adiciona testes do upload
chore: atualiza dependências
```

### Mensagens

**✅ Bom:**

```
feat: adiciona validação de tamanho no upload de PDF

- Limita upload a 10MB
- Exibe mensagem de erro clara
- Adiciona feedback visual
```

**❌ Evitar:**

```
mudanças
fix
update
wip
```

## 🐛 Debugging

### Console.log

**❌ Evitar em produção:**

```tsx
console.log("user:", user); // Remove antes do commit
```

**✅ Use debugger temporariamente:**

```tsx
if (process.env.NODE_ENV === "development") {
  console.debug("Debug info:", data);
}
```

### Erros

**✅ Trate erros gracefully:**

```tsx
try {
  await uploadPDF(file);
  toast.success("Upload realizado!");
} catch (error) {
  console.error("Upload error:", error);
  toast.error("Erro ao enviar arquivo");
}
```

## 📦 Adicionando Dependências

### Antes de instalar:

1. É realmente necessário?
2. Pacote é mantido ativamente?
3. Tamanho é aceitável?
4. Há alternativas melhores?

### Instalar:

```bash
# Produção
npm install nome-do-pacote

# Desenvolvimento
npm install -D nome-do-pacote
```

### Documentar:

Adicione no README se for uma dependência importante.

## 🚀 Performance

### Otimizações

**✅ Boas práticas:**

- Use `next/image` para imagens
- Lazy load componentes pesados
- Memoize componentes com `React.memo` se necessário
- Use `useCallback` para funções passadas como props

**❌ Evitar:**

- Renderizações desnecessárias
- Objetos/arrays criados inline em props
- Bundles muito grandes

### Exemplo:

```tsx
// ❌ Evitar (cria novo array a cada render)
<MyComponent items={items.map((x) => x.id)} />;

// ✅ Melhor
const ids = useMemo(() => items.map((x) => x.id), [items]);
<MyComponent items={ids} />;
```

## 📚 Documentação

### Comentários

**Quando comentar:**

- Lógica complexa
- Workarounds temporários (com `TODO:`)
- APIs externas
- Cálculos não óbvios

**✅ Bom:**

```tsx
// Calcula o desconto progressivo baseado no valor total
// Desconto máximo: 20%
const discount = calculateDiscount(total);
```

**❌ Evitar (comentário óbvio):**

```tsx
// Incrementa o contador
setCount(count + 1);
```

### JSDoc (quando útil)

```tsx
/**
 * Faz upload de um arquivo PDF e retorna o ID do documento
 *
 * @param file - Arquivo PDF a ser enviado
 * @param userId - ID do usuário
 * @returns ID do documento criado
 * @throws Error se o arquivo for inválido
 */
async function uploadPDF(file: File, userId: string): Promise<string> {
  // ...
}
```

## 🎯 Próximas Features

Antes de implementar uma nova feature:

1. **Planeje**: Escreva um mini-doc em `docs/features/`
2. **Discuta**: Se for grande, abra uma issue/discussão
3. **Implemente**: Siga os padrões deste guia
4. **Teste**: Garanta que funciona
5. **Documente**: Atualize README/docs se necessário

## 💡 Dicas

- **DRY** (Don't Repeat Yourself): Extraia código duplicado
- **KISS** (Keep It Simple): Código simples é melhor
- **YAGNI** (You Aren't Gonna Need It): Não complique antes da hora
- **Legibilidade > Inteligência**: Código legível é melhor que "clever"

---

Seguindo estas diretrizes, manteremos o projeto limpo, organizado e fácil de manter! 🎉
