# 🚀 Guia de Instalação — E.V.A. Ecosystem Vitality Assistant

**Global Solution 2026.1 — Web Development | FIAP**

---

## Pré-requisitos

| Ferramenta | Versão mínima | Link |
|------------|---------------|------|
| Node.js | 18.x ou superior | https://nodejs.org/ |
| npm | Incluído com Node.js | — |
| pnpm *(recomendado)* | 8.x | https://pnpm.io/ |
| Git | Qualquer versão recente | https://git-scm.com/ |

Para verificar o que já está instalado:

```bash
node --version
npm --version
git --version
```

---

## Instalação

### Passo 1 — Clonar o repositório

```bash
git clone https://github.com/marklyhalley/E.V.A.-GlobalSolution26.1.git
```

### Passo 2 — Entrar na pasta do projeto

```bash
cd E.V.A.-GlobalSolution26.1
```

### Passo 3 — Instalar as dependências

O projeto tem muitas dependências (React, Radix UI, Recharts, MUI, etc.). A instalação pode levar alguns minutos na primeira vez.

```bash
# com npm:
npm install

# com pnpm (mais rápido):
pnpm install
```

### Passo 4 — Rodar o servidor de desenvolvimento

```bash
npm run dev
```

### Passo 5 — Abrir no navegador

O terminal exibirá algo como:

```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Acesse `http://localhost:5173` no navegador. A aplicação carrega imediatamente — não há login ou configuração adicional.


---

## Observações sobre o projeto

- **Dados do Dashboard:** carregados de `/public/api/dashboard.json` — arquivo estático, não há chamada a API externa.
- **Agente IA:** os logs exibidos são mensagens predefinidas, selecionadas aleatoriamente a cada 5 segundos via `setInterval`.


---

## Problemas comuns

**`node: command not found`**
→ Node.js não está instalado. Baixe em https://nodejs.org/

**`Cannot find module` ou erros de importação**
→ As dependências não foram instaladas. Apague `node_modules` e reinstale:
```bash
rm -rf node_modules
npm install
```

**Porta 5173 em uso**
→ O Vite seleciona a próxima porta automaticamente. A URL correta aparece no terminal.

**Erro de permissão no Windows**
→ Use o Prompt de Comando (cmd) como Administrador, ou use o terminal do VS Code.

---

*E.V.A. © 2026 — Global Solution 2026.1 · FIAP*
