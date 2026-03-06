import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ACIERJ
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre a ACIERJ</Link>
          <Link href="/cuidadores">Cuidadores</Link>
          <Link href="/direitos-idoso">Direitos da Pessoa Idosa</Link>
          <Link href="/cursos">Cursos / Capacitação</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
