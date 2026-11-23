// Dados dos recursos do Next.js exibidos na página.
// Cada item gera automaticamente uma rota em /recursos/[slug].
export const recursos = [
  {
    slug: "app-router",
    nome: "App Router",
    categoria: "Rotas",
    resumo: "Organiza páginas e layouts dentro da pasta app.",
    descricao:
      "O App Router usa a estrutura de pastas dentro de src/app para definir as rotas. Cada pasta vira um segmento da URL e o arquivo page.js define o conteúdo exibido. Layouts compartilhados ficam em layout.js e são reaproveitados entre as páginas.",
  },
  {
    slug: "rotas-dinamicas",
    nome: "Rotas Dinâmicas",
    categoria: "Rotas",
    resumo: "Pastas com [colchetes] criam URLs a partir de dados.",
    descricao:
      "Uma pasta chamada [slug] captura qualquer valor naquela posição da URL. Esta própria página é um exemplo: ela fica em src/app/recursos/[slug]/page.js e o conteúdo muda de acordo com o endereço acessado.",
  },
  {
    slug: "server-components",
    nome: "Server Components",
    categoria: "Renderização",
    resumo: "Componentes renderizados no servidor, sem enviar JS extra.",
    descricao:
      "Por padrão, todo componente no App Router é um Server Component: ele é renderizado no servidor e o navegador recebe apenas o HTML. Quando é preciso interatividade (useState, eventos de clique), o arquivo recebe a diretiva \"use client\".",
  },
  {
    slug: "ssg",
    nome: "Geração Estática (SSG)",
    categoria: "Renderização",
    resumo: "Páginas geradas no momento do build.",
    descricao:
      "Com generateStaticParams, o Next.js sabe quais páginas dinâmicas existem e gera todas elas durante o build. O resultado são arquivos HTML prontos, que carregam muito rápido e são ótimos para SEO.",
  },
  {
    slug: "otimizacao-de-fontes",
    nome: "Otimização de Fontes",
    categoria: "Performance",
    resumo: "next/font baixa e hospeda as fontes junto com o site.",
    descricao:
      "O módulo next/font baixa as fontes do Google no build e as serve pelo próprio domínio do site. Isso evita requisições externas e impede que o texto \"pule\" quando a fonte termina de carregar.",
  },
  {
    slug: "metadata-e-seo",
    nome: "Metadata e SEO",
    categoria: "Performance",
    resumo: "Título e descrição definidos por página.",
    descricao:
      "Exportando metadata ou generateMetadata em uma página, o Next.js preenche as tags <title> e <meta> automaticamente. Cada recurso desta lista tem o seu próprio título na aba do navegador.",
  },
];

export const categorias = ["Todas", ...new Set(recursos.map((r) => r.categoria))];

export function buscarRecurso(slug) {
  return recursos.find((r) => r.slug === slug);
}
