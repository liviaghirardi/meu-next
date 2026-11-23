import styles from "./sobre.module.css";

export const metadata = {
  title: "Sobre",
};

const estrutura = [
  ["src/app/layout.js", "Layout raiz com Header e Footer compartilhados"],
  ["src/app/page.js", "Página inicial (rota /)"],
  ["src/app/sobre/page.js", "Esta página (rota /sobre)"],
  ["src/app/recursos/[slug]/page.js", "Rota dinâmica gerada para cada recurso"],
  ["src/components/", "Componentes reutilizáveis"],
  ["src/data/recursos.js", "Dados exibidos na página"],
];

export default function Sobre() {
  return (
    <main className={`container ${styles.pagina}`}>
      <h1 className={styles.titulo}>Sobre o projeto</h1>
      <p className={styles.texto}>
        Este é o Projeto 04 da atividade de Frameworks Front-end do SENAI. Ele
        foi criado com <code>create-next-app</code> e usa o App Router do
        Next.js, com componentes reutilizáveis, uma rota dinâmica e um filtro
        interativo feito com <code>useState</code>.
      </p>

      <h2 className={styles.subtitulo}>Estrutura de pastas</h2>
      <ul className={styles.lista}>
        {estrutura.map(([caminho, descricao]) => (
          <li key={caminho}>
            <code>{caminho}</code>
            <span>{descricao}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
