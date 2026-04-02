import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import logoImg from "../imagens/acierj.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/areas", label: "Áreas de Atuação" },
  { href: "/cuidadores", label: "Cuidadores" },
  { href: "/cursos", label: "Cursos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu ao clicar em link
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.container}>
        {/* ── Logo + nome ── */}
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <Image
            src={logoImg}
            alt="Logo ACIERJ"
            width={44}
            height={44}
            priority
          />
          <span className={styles.brandName}>ACIERJ</span>
        </Link>

        {/* ── Nav desktop ── */}
        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Menu principal"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/cuidadores"
            className={styles.ctaLink}
            onClick={closeMenu}
          >
            Associe-se
          </Link>
        </nav>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Backdrop (mobile) ── */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
