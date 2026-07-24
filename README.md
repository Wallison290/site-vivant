# Vivant Estética

Landing page da Vivant Estética (Petrolina — PE), construída com
[Next.js](https://nextjs.org) (App Router) e Tailwind CSS.

## Pré-requisitos

- Node.js `>=22.13.0`

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera o build de produção
- `npm run start`: serve o build de produção localmente
- `npm run lint`: roda o ESLint

## Deploy

Este projeto é um app Next.js padrão e pode ser publicado diretamente na
[Vercel](https://vercel.com): basta conectar o repositório e importar o
projeto — nenhuma configuração adicional é necessária.

## Estrutura

- `app/page.tsx`: conteúdo da landing page (seções, tratamentos, CTAs)
- `app/layout.tsx`: metadata, SEO e Open Graph
- `app/globals.css`: estilos globais
- `public/assets/`: imagens e fontes
