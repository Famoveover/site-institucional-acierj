import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import logoImg from "../imagens/acierj.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* ── Marca ── */}
          <div className={styles.brand}>
            <div className={styles.brandTop}>
              <Image
                src={logoImg}
                alt="Logo ACIERJ"
                width={52}
                height={52}
              />
              <h3 className={styles.brandName}>ACIERJ</h3>
            </div>
            <p className={styles.brandDesc}>
              Associação dos Cuidadores da Pessoa Idosa, da Saúde Mental e com
              Deficiência do Estado do Rio de Janeiro. Coletivo na luta pela
              valorização e regulamentação da profissão.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/acaborj/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram da ACIERJ"
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/acaborj"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook da ACIERJ"
              >
                📘
              </a>
              <a
                href="mailto:acierj@gmail.com"
                className={styles.socialLink}
                aria-label="Email da ACIERJ"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* ── Navegação ── */}
          <nav className={styles.col} aria-label="Links do footer">
            <h4>Navegação</h4>
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre a ACIERJ</Link>
              </li>
              <li>
                <Link href="/areas">Áreas de Atuação</Link>
              </li>
              <li>
                <Link href="/cuidadores">Cuidadores</Link>
              </li>
              <li>
                <Link href="/cursos">Cursos</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          {/* ── Participe ── */}
          <div className={styles.col}>
            <h4>Participe</h4>
            <ul>
              <li>
                <Link href="/cuidadores">Associe-se à ACIERJ</Link>
              </li>
              <li>
                <Link href="/cuidadores">Ficha de inscrição</Link>
              </li>
              <li>
                <Link href="/projetos">Projetos e eventos</Link>
              </li>
              <li>
                <Link href="/noticias">Notícias</Link>
              </li>
              <li>
                <Link href="/direitos-idoso">Direitos da Pessoa Idosa</Link>
              </li>
            </ul>
          </div>

          {/* ── Contato ── */}
          <div className={styles.col}>
            <h4>Contato</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <p className={styles.contactText}>
                <strong>Email</strong>
                acierj@gmail.com
              </p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <p className={styles.contactText}>
                <strong>Telefone</strong>
                (21) 98236-3474
              </p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <p className={styles.contactText}>
                <strong>Localização</strong>
                Rio de Janeiro – RJ
              </p>
            </div>
          </div>
        </div>

        {/* ── Barra inferior ── */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ACIERJ – Associação dos Cuidadores do
            Estado do Rio de Janeiro. Todos os direitos reservados.
          </p>
          <p className={styles.bottomNote}>
            Site desenvolvido para fortalecimento da categoria dos cuidadores.
          </p>
        </div>
      </div>
    </footer>
  );
}
