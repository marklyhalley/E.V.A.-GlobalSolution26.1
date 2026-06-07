# 🌿 E.V.A. — Ecosystem Vitality Assistant

> **Sistema Biointeligente para Regeneração de Ecossistemas — Protótipo Conceitual**
> Global Solution 2026.1 — Web Development | FIAP

---

## 📋 Sobre o Projeto

O **E.V.A. (Ecosystem Vitality Assistant)** é um **protótipo de interface conceitual** que visualiza como seria um sistema biointeligente de monitoramento de missão — combinando fungos micorrízicos, sensores IoT e inteligência artificial para regenerar solos degradados, com visão de aplicação tanto na Terra quanto em Marte.

A aplicação é uma **Single Page Application (SPA)** construída em React, com dados e comportamentos simulados para demonstrar a proposta de solução. O objetivo do projeto é comunicar visualmente o conceito e a lógica do sistema.

### O que a aplicação simula

| Tela | O que exibe | Como funciona na prática |
|------|-------------|--------------------------|
| **Dashboard** | Métricas de sensores IoT (pH, umidade, radiação, toxicidade, atividade bioelétrica) e gráficos históricos | Dados carregados de um arquivo `dashboard.json` estático em `/public/api/` |
| **Agente IA** | Terminal de logs da "IA Sentinel" com mensagens em tempo real | Mensagens fixas embaralhadas aleatoriamente via `setInterval` e `Math.random()` a cada 5 segundos |
| **Fases** | Progresso das 5 fases da missão com descrições detalhadas | Dados de progresso hardcoded no próprio componente `FasesTab.jsx` |
| **Home** | Apresentação da missão com paralaxe de estrelas interativo | Animação visual em React puro |
| **Sobre** | Equipe, ODS e tecnologias | Conteúdo estático |


---

## 🎯 A Proposta

A ideia central do E.V.A. nasce de uma pergunta: *e se a natureza já tivesse as respostas para os problemas que criamos?*

Os fungos micorrízicos formam redes subterrâneas capazes de transportar nutrientes, comunicar estresse hídrico e desintoxicar solos contaminados. O projeto imagina um sistema onde essa inteligência biológica é potencializada por sensores IoT e análise de dados — e apresenta, em forma de protótipo web, como seria a interface de monitoramento desse sistema.

A proposta é sobre **visão**: mostrar como tecnologia, biologia e design podem conversar para criar soluções sustentáveis reais.

### Alinhamento com os ODS da ONU

| ODS | Título | Relação com o Projeto |
|-----|--------|-----------------------|
| **ODS 15** | Vida Terrestre | Regeneração de ecossistemas degradados |
| **ODS 9** | Indústria, Inovação e Infraestrutura | IoT e IA aplicados a ambientes extremos |
| **ODS 2** | Fome Zero e Agricultura Sustentável | Segurança alimentar via recuperação do solo |

---

## 🔐 Usuários e Senhas

Não há sistema de autenticação. A aplicação não possui backend, banco de dados ou login. Todas as páginas são acessíveis diretamente.

---

## 🚀 Instalação — Passo a Passo

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (incluso com Node.js) ou [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

```bash
# Verificar versões
node --version   # v18+
npm --version
git --version
```

### Passo 1 — Clonar o repositório

```bash
git clone https://github.com/marklyhalley/E.V.A.-GlobalSolution26.1.git
```

### Passo 2 — Entrar na pasta

```bash
cd E.V.A.-GlobalSolution26.1
```

### Passo 3 — Instalar dependências

```bash
npm install
```

### Passo 4 — Iniciar o servidor local

```bash
npm run dev
```

### Passo 5 — Acessar no navegador

```
http://localhost:5173
```

> O Vite sobe na porta 5173 por padrão. Se estiver ocupada, ele escolhe a próxima disponível e exibe a URL correta no terminal.


## 🛠 Stack Tecnológica

| Tecnologia | Versão | Papel no Projeto |
|------------|--------|-----------------|
| React | 18 | Framework principal de UI |
| Vite | 6 | Ferramenta de build e dev server |
| Tailwind CSS | v4 (via `@tailwindcss/vite`) | Estilização utilitária com tema customizado via CSS variables |
| Radix UI / shadcn/ui | — | Componentes acessíveis (accordion, dialog, tabs, etc.) |
| Recharts | 2.x | Gráficos de linha e barra no Dashboard |
| React Router | v7 | Roteamento SPA entre as 5 telas |
| Lucide React | 0.487 | Ícones |




---

## 📁 Estrutura de Pastas

```
E.V.A.-GlobalSolution26.1/
├── public/
│   ├── api/
│   │   └── dashboard.json        # Dados simulados dos "sensores"
│   └── images/
│       ├── equipe/               # Fotos dos integrantes
│       └── fases/                # Imagens geradas para cada fase
├── src/
│   ├── styles/
│   │   ├── tailwind.css          # Importa Tailwind v4
│   │   ├── theme.css             # Tema customizado via CSS variables
│   │   └── index.css             # Ponto de entrada dos estilos
│   └── app/
│       ├── App.jsx               # Rotas da aplicação
│       ├── components/
│       │   ├── Header.jsx        # Navegação
│       │   ├── HomeTab.jsx       # Tela inicial
│       │   ├── DashboardTab.jsx  # Dashboard IoT (dados simulados)
│       │   ├── AgenteTab.jsx     # Agente IA (logs simulados)
│       │   ├── FasesTab.jsx      # Fases da missão
│       │   ├── SobreTab.jsx      # Sobre / Equipe
│       │   └── ui/               # Componentes shadcn/ui
├── vite.config.js
└── package.json
```

---

## 🔗 Links

| | |
|-|-|
| 🗂 **Repositório** | https://github.com/marklyhalley/E.V.A.-GlobalSolution26.1 |
| 🌐 **Deploy** | *(a preencher após publicação)* |

---

## 👥 Integrantes

| Nome | RM |
|------|----|
| Gustavo Almeida Ferreira | 566980 |
| Lucas de Oliveira Miranda Caetano | 568036 |
| Marco Túlio Longo Conte | 568373 |
| Sofia Souza Rodrigues | 566708 |
| Camile Vitória Silva | 566649 |

---

<p align="center">
  <em>E.V.A. © 2026 — Protótipo Conceitual · Global Solution 2026.1 · FIAP</em>
</p>
