import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`header`} role="banner">
      <div className={`container header-inner`}>
        <div>
          <Link href="/" aria-label="Ir para a página inicial">
            <strong>ACI-ERJ</strong>
          </Link>
        </div>
        <nav className="nav" aria-label="Navegação principal">
          <Link href="/">Home</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
