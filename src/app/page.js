import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Landing Page Interativa - Next.js</h1>        <p>Projeto Desenvolvido para a Atividade Prática de Frameworks Front-end (SENAI)</p>
      </header>

      <main style={styles.content}>
        <section style={styles.card}>
          <h2>Sobre o Projeto</h2>
          <p>Esta aplicação foi desenvolvida utilizando <strong>Next.js</strong> com App Router, cumprindo os requisitos de renderização e rotas dinâmicas.</p>
        </section>

        <section style={styles.card}>
          <h2>Recursos Utilizados</h2>
          <ul style={styles.list}>
            <li>App Router Moderno</li>
            <li>Renderização Híbrida (SSR / SSG)</li>
            <li>Otimização Automática de Performance</li>
            <li>Rotas baseadas em Arquivos (File-system Routing)</li> {/* Novo item */}
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2026 - Aluna: Lívia Ghirardi</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    color: '#333',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '30px',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
  },
  title: {
    margin: '0 0 10px 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  },
  card: {
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  list: {
    paddingLeft: '20px',
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '40px',
    color: '#666',
    fontSize: '0.9em',
  },
};