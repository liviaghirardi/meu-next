import Link from "next/link";
import styles from "./RecursoCard.module.css";

export default function RecursoCard({ recurso }) {
  return (
    <Link href={`/recursos/${recurso.slug}`} className={styles.card}>
      <span className={styles.categoria}>{recurso.categoria}</span>
      <h3 className={styles.nome}>{recurso.nome}</h3>
      <p className={styles.resumo}>{recurso.resumo}</p>
      <span className={styles.mais}>Ver detalhes →</span>
    </Link>
  );
}
