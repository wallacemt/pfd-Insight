# 📄 PDF Insight — Sistema de Extração Inteligente de Dados em PDF

## 🧩 Visão Geral
O **PDF Insight** é uma aplicação web desenvolvida com **Next.js**, projetada para permitir que usuários enviem arquivos PDF (como folhas de ponto e contracheques) e descrevam em texto livre o que desejam extrair.  
O sistema processa o conteúdo do PDF, interpreta o pedido e retorna um **novo PDF** contendo apenas as informações relevantes extraídas.

---

## 🎯 Objetivos
- Permitir upload de arquivos PDF variados.
- Interpretar a solicitação textual do usuário (“extraia os horários de entrada e saída”, “me mostre as verbas do mês de março”, etc.).
- Extrair automaticamente as informações pedidas.
- Retornar um **PDF formatado** contendo o resultado da extração.

---

## 🧠 Casos de Uso Principais
### 1. Folha de Ponto
- O usuário envia uma folha de ponto (`PONTO 1.pdf`, `PONTO 2.pdf`).
- Solicita: “Extraia os dias, horários de entrada e saída.”
- O sistema identifica colunas de **Data**, **Entrada**, **Saída**, e gera uma tabela resumida.

### 2. Contracheque
- O usuário envia um contracheque (`HOLERITE 1.pdf`, `HOLERITE 2.pdf`).
- Solicita: “Quero o mês e as verbas descritas.”
- O sistema extrai **mês de referência**, **descrição das verbas**, **valores**, **descontos** e **líquido**.

---

## 🧱 Arquitetura
Next.js (Frontend + API Routes)
├── Upload de PDF (via Dropzone)
├── Caixa de Prompt (interface para pedidos do usuário)
├── Exibição de progresso e resultado
└── Download do novo PDF

Backend (API Routes)
├── Parsing de PDF com pdf-parse ou pdfjs-dist
├── NLP com modelo de linguagem (ex: Gemini ou OpenAI)
├── Extração de dados via regex + prompt estruturado
└── Geração de novo PDF (pdfkit / pdf-lib)

---

## ⚙️ Funcionalidades

### Upload e Interface
- Drag & drop para envio de arquivos.
- Caixa de texto onde o usuário descreve o que deseja extrair.
- Histórico das solicitações e PDFs processados.

### Processamento
- Identificação automática do tipo de documento (ponto, holerite etc.).
- Extração dos campos mais relevantes via **análise semântica + regex**.
- Conversão do resultado em tabela limpa.

### Exportação
- Deve armazenar os pdf do usuario no banco de dados com a data etc, para manter um historico.
- Geração de novo PDF estilizado com cabeçalho, data da extração e logotipo.
- Opção para baixar o arquivo ou enviá-lo por e-mail.
---

## 🧩 Estrutura de Pastas (Next.js)

src/
├── app/
│ ├── page.tsx # Página principal
│ ├── api/
│ │ ├── extract/route.ts # Endpoint de processamento do PDF
│ │ └── pdf/generate.ts # Endpoint para gerar o PDF final
├── components/
│ ├── FileUpload.tsx
│ ├── RequestBox.tsx
│ ├── ResultViewer.tsx
│ └── LoadingOverlay.tsx
├── hooks/
│ └── usePDFProcessor.ts
└── lib/
├── pdfParser.ts
├── pdfGenerator.ts
└── nlpHandler.ts


---

## 🔍 Tecnologias

| Área | Tecnologia |
|------|-------------|
| Framework | **Next.js 15 (App Router)** |
| UI | TailwindCSS + ShadCN UI |
| PDF Parsing | pdf-parse / pdfjs-dist |
| NLP | Gemini / OpenAI API |
| PDF Output | pdfkit / pdf-lib |
| Storage | Cloudinary / Supabase Storage |
| Deploy | Vercel |

---

## 📄 Fluxo de Processo

1. Usuário faz upload do PDF.
2. Digita o pedido na caixa de texto.
3. API identifica o tipo de documento.
4. Dados relevantes são extraídos e formatados.
5. Um novo PDF é gerado e disponibilizado para download.

---

## 🧰 Próximas Etapas
1. [ ] Criar estrutura do projeto em Next.js.
2. [ ] Implementar upload e leitura de PDF (pdf-parse).
3. [ ] Construir o endpoint `/api/extract` com NLP + regex.
4. [ ] Desenvolver interface de prompt e exibição de progresso.
5. [ ] Implementar geração e download do PDF final.
6. [ ] Adicionar histórico de solicitações por usuário.

---

## 🧪 Exemplo de Extração

### Entrada:
> “Extraia os horários de entrada e saída da folha de ponto.”

### Saída (PDF Gerado):
| Data | Entrada | Saída |
|------|----------|-------|
| 21/04 | 04:58 | 17:01 |
| 22/04 | 04:57 | 16:20 |
| 23/04 | 04:58 | 14:26 |
| ... | ... | ... |
