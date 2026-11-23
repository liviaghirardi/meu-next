"use client";

// Client Component: usa useState para filtrar os recursos por categoria
// sem recarregar a página.
import { useState } from "react";
import RecursoCard from "./RecursoCard";
import styles from "./ListaRecursos.module.css";

export default function ListaRecursos({ recursos, categorias }) {
  const [filtro, setFiltro] = useState("Todas");

  const visiveis =
    filtro === "Todas" ? recursos : recursos.filter((r) => r.categoria === filtro);

  return (
    <div>
      <div className={styles.filtros} role="group" aria-label="Filtrar por categoria">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFiltro(cat)}
            className={cat === filtro ? styles.ativo : styles.botao}
            aria-pressed={cat === filtro}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className={styles.contagem}>
        {visiveis.length} {visiveis.length === 1 ? "recurso" : "recursos"}
      </p>

      <div className={styles.grid}>
        {visiveis.map((recurso) => (
          <RecursoCard key={recurso.slug} recurso={recurso} />
        ))}
      </div>
    </div>
  );
}
