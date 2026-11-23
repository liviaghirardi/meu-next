import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "64px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 12 }}>Página não encontrada</h1>
      <p style={{ marginBottom: 24 }}>Esse endereço não existe neste projeto.</p>
      <Link href="/" style={{ color: "var(--accent)", fontWeight: 600 }}>
        Voltar para o início
      </Link>
    </main>
  );
}
