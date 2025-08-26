Com certeza\! Adicionei a seção "Equipe e Responsabilidades" com a tabela que você pediu. Veja como ficou o README completo e atualizado:

-----

# 📄 CV Builder AI

Este projeto é uma aplicação web moderna desenvolvida com **React 19**, **TypeScript**, **TailwindCSS v4** e **Vite**. O objetivo é criar um gerador de currículos inteligente que oferece um preview em tempo real, permitindo que os usuários criem e visualizem seus currículos de forma dinâmica e intuitiva.

## 📌 Visão Geral

O CV Builder AI foi projetado para simplificar a criação de currículos profissionais. A aplicação apresenta um layout *split-screen*, onde o usuário preenche um formulário na metade esquerda da tela enquanto visualiza o resultado instantaneamente na metade direita. O projeto foca em uma experiência de usuário fluida e otimizada para desktops.

-----

## 🎯 Objetivos Gerais

Ao final do projeto, os desenvolvedores terão aprendido a:

  - Criar uma aplicação interativa e complexa com React e TypeScript.
  - Gerenciar estado compartilhado avançado para sincronização em tempo real.
  - Implementar componentes controlados com validação de dados.
  - Utilizar o padrão *Lifting State Up* para comunicação entre componentes.
  - Aplicar renderização condicional para criar uma UI dinâmica e responsiva a estados.

-----

## 📂 Estrutura do Projeto

O projeto está organizado com uma estrutura modular e escalável, facilitando a manutenção e o desenvolvimento de novas funcionalidades.

```bash
cv-builder-ai/
└── src/
    ├── App.tsx
    ├── components/
    │   ├── Layout/
    │   │   ├── FormSection.tsx
    │   │   └── PreviewSection.tsx
    │   ├── Form/
    │   │   ├── PersonalInfo.tsx
    │   │   ├── Skills.tsx
    │   │   ├── Experience.tsx
    │   │   └── AIEnhanceButton.tsx
    │   ├── Preview/
    │   │   ├── CVPreview.tsx
    │   │   ├── PersonalHeader.tsx
    │   │   ├── SkillsSection.tsx
    │   │   └── ExperienceSection.tsx
    │   └── UI/
    │       ├── LoadingSpinner.tsx
    │       ├── ErrorBoundary.tsx
    │       └── Toast.tsx
    ├── services/
    │   ├── aiService.ts
    │   └── pdfService.ts
    ├── hooks/
    │   ├── useCVData.ts
    │   ├── useAIEnhancement.ts
    │   └── useToast.ts
    ├── utils/
    │   ├── validation.ts
    │   └── textProcessing.ts
    ├── types/
    │   ├── cv.types.ts
    │   └── api.types.ts
    └── index.css
```

-----

## 🧠 Conceitos Aplicados

  - **React 19 + TypeScript**: Criação de componentes robustos e tipados.
  - **TailwindCSS v4**: Estilização moderna e utilitária.
  - **Vite**: Ambiente de desenvolvimento rápido e otimizado.
  - **Gerenciamento de Estado**: Hooks do React (`useState`, `useReducer`) para controle de estado local e global.
  - **Componentização**: Divisão da UI em componentes reutilizáveis e desacoplados.
  - **Layout Split-Screen**: Interface otimizada para produtividade em desktops.

-----

## 👥 Equipe e Responsabilidades

| Responsável | Funcionalidade Principal |
| :--- | :--- |
| **Edlana Nascimento** | 01 - Layout Split-Screen |
| **Henrique Porto** | 02 - Formulário de Dados Pessoais |
| **Lucivaldo** | 03 - Gerenciamento de Habilidades |
| **Priscila Brandão** | 04 - Gerenciamento de Experiências |
| **Alize Leal** | 05 - Preview em Tempo Real |

-----

## ✅ Funcionalidades do Projeto

### Funcionalidades Principais

| Requisito | Descrição |
| :--- | :--- |
| **Layout Split-Screen** | Tela dividida em duas colunas (Formulário e Preview) com scroll independente. |
| **Formulário de Dados** | Seções para Dados Pessoais, Habilidades e Experiências Profissionais. |
| **Validação em Tempo Real**| Feedback instantâneo para o usuário sobre os dados inseridos. |
| **Listas Dinâmicas** | Adicionar e remover habilidades e experiências de forma intuitiva. |
| **Preview Instantâneo**| O currículo é atualizado em tempo real a cada alteração no formulário. |

### Funcionalidades Opcionais (Extras)

| Requisito | Descrição |
| :--- | :--- |
| **Exportação para PDF**| Gera um arquivo PDF do currículo com layout profissional (A4). |
| **Melhorias de UX** | Temas de cores, atalhos de teclado e modo de visualização completa. |
| **Persistência de Dados** | Salva o progresso do usuário no `localStorage` para evitar perda de dados. |

-----

## ⚙️ Configuração e Uso

### Pré-requisitos

  - **Node.js** (versão 18 ou superior)
  - **npm**, **yarn** ou **pnpm**
  - **Git** instalado na sua máquina
  - Um editor de código (VS Code recomendado)

### 🚀 Como Rodar o Projeto

1.  **Clone o repositório:**

    ```bash
    git clone git@github.com:seu-usuario/cv-builder-ai.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd cv-builder-ai
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Abra o navegador:**

    > A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

-----

## 🌿 Git e GitHub — Guia Rápido para Colaboradores

### 👩‍💻 Parte 1: Como Criar um Branch (Nova funcionalidade ou correção)

1.  **Abra o terminal na pasta do projeto.**

2.  **Vá para a branch principal (`main`) e atualize:**

    ```bash
    git checkout main      # Vai para a branch principal
    git pull origin main   # Puxa as atualizações mais recentes do GitHub
    ```

3.  **Crie uma nova branch com um nome descritivo:**

    ```bash
    git checkout -b nome-do-seu-branch
    ```

    > ✅ **Exemplo:** `git checkout -b feature/form-validation`

    Esse comando cria e já muda para a nova branch.

4.  **Trabalhe normalmente no seu código.**

5.  **Adicione e salve as alterações com um commit:**

    ```bash
    git add .                                      # Adiciona todos os arquivos alterados
    git commit -m "feat: implementa validacao form"  # Mensagem clara do que foi feito
    ```

6.  **Envie sua branch para o GitHub:**

    ```bash
    git push -u origin nome-do-seu-branch
    ```

    > ✅ **Exemplo:** `git push -u origin feature/form-validation`

Pronto\! Sua branch já está no GitHub.

-----

## 🚀 Parte 2: Como Fazer um Pull Request (PR)

> *Pull Request (PR) é como você avisa ao time que terminou uma parte do projeto e quer juntar com a versão principal (`main`).*

1.  **Envie sua branch para o GitHub** com o comando `git push -u origin nome-da-sua-branch`.

2.  **Clique no link que aparece no terminal** para criar o Pull Request. Ele será parecido com:
    `https://github.com/seu-usuario/cv-builder-ai/pull/new/nome-da-sua-branch`

3.  **Preencha as informações do Pull Request:**

      - **Título:** Escreva um resumo claro do que foi feito.
          - Exemplo: `feat: Adiciona formulário de experiências profissionais`
      - **Descrição:** Explique as mudanças e por que foram feitas.
          - Exemplo: `Este PR implementa o componente para adicionar/remover experiências, incluindo validação de datas e o campo "Trabalho atual".`

4.  **Clique em “Create pull request”**.

5.  **Se o link não aparecer**, vá até o repositório no GitHub, clique na aba **“Pull requests”** e depois em **“New pull request”**. Configure o `base` para `main` e o `compare` para a sua branch.

-----

## 📄 Licença

Este projeto está sob a **licença MIT**.
Veja o arquivo `LICENSE` para mais detalhes.