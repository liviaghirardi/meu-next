import ListaRecursos from "@/components/ListaRecursos";
import { recursos, categorias } from "@/data/recursos";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.etiqueta}>Projeto 04 · Next.js</p>
          <h1 className={styles.titulo}>Recursos do Next.js</h1>
          <p className={styles.subtitulo}>
            Um framework baseado em React que adiciona rotas por arquivos,
            renderização no servidor e otimizações automáticas. Escolha um
            recurso abaixo para ver como ele funciona.
          </p>
        </div>
      </section>

      <section className={`container ${styles.secao}`}>
        <h2 className={styles.tituloSecao}>Explore os recursos</h2>
        <ListaRecursos recursos={recursos} categorias={categorias} />
      </section>
    </main>
  );
}
