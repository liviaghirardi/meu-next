import Link from "next/link";
import { notFound } from "next/navigation";
import { recursos, buscarRecurso } from "@/data/recursos";
import styles from "./recurso.module.css";

// Gera uma página estática para cada recurso durante o build (SSG).
export function generateStaticParams() {
  return recursos.map((r) => ({ slug: r.slug }));
}

// Slugs fora da lista retornam 404 em vez de serem gerados sob demanda.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const recurso = buscarRecurso(slug);
  return recurso ? { title: recurso.nome, description: recurso.resumo } : {};
}

export default async function RecursoPage({ params }) {
  const { slug } = await params;
  const recurso = buscarRecurso(slug);

  if (!recurso) {
    notFound();
  }

  return (
    <main className={`container ${styles.pagina}`}>
      <Link href="/" className={styles.voltar}>
        ← Voltar para a lista
      </Link>

      <article className={styles.artigo}>
        <span className={styles.categoria}>{recurso.categoria}</span>
        <h1 className={styles.titulo}>{recurso.nome}</h1>
        <p className={styles.resumo}>{recurso.resumo}</p>
        <p className={styles.descricao}>{recurso.descricao}</p>
      </article>

      <p className={styles.rota}>
        Rota atual: <code>/recursos/{recurso.slug}</code>
      </p>
    </main>
  );
}
