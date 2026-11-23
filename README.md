# Recursos do Next.js — Projeto 04

Landing page feita com **Next.js (App Router)** para a atividade de Frameworks Front-end do SENAI.
A página apresenta os principais recursos do Next.js. Cada recurso tem a sua própria página de detalhes.

## O que o projeto usa

- **Componentes reutilizáveis**: `Header`, `Footer`, `RecursoCard`, `ListaRecursos`
- **Rotas por arquivos**: `/`, `/sobre` e a rota dinâmica `/recursos/[slug]`
- **Geração estática (SSG)**: `generateStaticParams` gera uma página para cada recurso no build
- **Client Component com `useState`**: filtro de recursos por categoria
- **Metadata por página**: título e descrição próprios em cada rota
- **Layout responsivo**: CSS Modules e grid de 1, 2 ou 3 colunas, conforme a largura da tela
- **Tema claro/escuro**: segue a preferência do sistema operacional

## Estrutura

```
src/
├── app/
│   ├── layout.js               # layout raiz (Header + Footer)
│   ├── page.js                 # página inicial
│   ├── not-found.js            # página 404
│   ├── sobre/page.js           # rota /sobre
│   └── recursos/[slug]/page.js # rota dinâmica
├── components/                 # componentes reutilizáveis
└── data/recursos.js            # dados exibidos
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy

O projeto é publicado na [Vercel](https://vercel.com), conectada a este repositório do GitHub. Cada push na branch `master` gera um novo deploy automaticamente.
