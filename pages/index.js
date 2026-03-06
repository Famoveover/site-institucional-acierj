import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Wave from '../components/Wave';

// imagens locais
import projeto1Img from '../imagens/acierj3.jpg';
import projeto2Img from '../imagens/acierj4.jpg';
import projeto3Img from '../imagens/acierj5.jpg';
import heroImg from '../imagens/acierj2.jpg';
import logoImg from '../imagens/acierj.png';

export default function Home() {
  return (
    <main className={styles.container}>
      <section
        className={`${styles.hero} ${styles.sectionGreen}`}
        aria-labelledby="hero-title"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className={styles.heroContent}>
          <h1 id="hero-title">Bem-vindo à ACIERJ</h1>
          <p>Organização social comprometida com acolhimento, força e representatividade.</p>
          <a href="#sobre" className={styles.ctaButton}>Saiba mais</a>
        </div>
      </section>

      <Wave />

      <section id="sobre" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2>Sobre a ACIERJ</h2>
          <p>
            A ACIERJ (Associação Cultural e Inclusiva do Estado do Rio de
            Janeiro) é dedicada à promoção de direitos, inclusão social e apoio a
            movimentos comunitários. Nossa missão é fortalecer vozes, construir
            redes e gerar impacto positivo na sociedade.
          </p>
        </div>
      </section>

      <section id="areas" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2>Áreas de atuação</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Educação</h3>
              <p>Programas de formação e desenvolvimento comunitário.</p>
            </div>
            <div className={styles.card}>
              <h3>Saúde</h3>
              <p>Promoção de bem-estar e acesso à saúde integral.</p>
            </div>
            <div className={styles.card}>
              <h3>Direitos Humanos</h3>
              <p>Defesa e garantia de direitos fundamentais.</p>
            </div>
            <div className={styles.card}>
              <h3>Cultura e Arte</h3>
              <p>Fortalecimento da identidade comunitária.</p>
            </div>
          </div>
        </div>
      </section>

      <Wave />

      <section id="projetos" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h2>Projetos e Ações</h2>
          <p>Conheça as iniciativas que estão transformando vidas e fortalecendo comunidades.</p>
          <div className={styles.projectGrid}>
            <article>
              <Image
                src={projeto1Img}
                alt="Equipe em ação"
                width={300}
                height={200}
                sizes="(max-width:600px) 100vw, 300px"
              />
              <h3>Projeto 1</h3>
              <p>Iniciativa voltada para educação comunitária.</p>
            </article>
            <article>
              <Image
                src={projeto2Img}
                alt="Atividade cultural"
                width={300}
                height={200}
                sizes="(max-width:600px) 100vw, 300px"
              />
              <h3>Projeto 2</h3>
              <p>Programa de arte e cultura para jovens.</p>
            </article>
            <article>
              <Image
                src={projeto3Img}
                alt="Evento de saúde"
                width={300}
                height={200}
                sizes="(max-width:600px) 100vw, 300px"
              />
              <h3>Projeto 3</h3>
              <p>Campanhas de saúde preventiva na comunidade.</p>
            </article>
          </div>
        </div>
      </section>

      <Wave />

      <section id="impacto" className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2>Impacto Social</h2>
          <p>Números que refletem nosso compromisso com a mudança.</p>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Pessoas atendidas</p>
            </div>
            <div className={styles.stat}>
              <h3>15+</h3>
              <p>Años de história</p>
            </div>
            <div className={styles.stat}>
              <h3>4</h3>
              <p>Áreas de atuação ativa</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Dedicados à causa</p>
            </div>
          </div>
        </div>
      </section>

      <Wave />

      <section id="cta" className={`${styles.section} ${styles.sectionGreen}`}>
        <div className={styles.container}>
          <h2>Participe dessa mudança</h2>
          <p>Junte-se à ACIERJ e seja parte do movimento social que está transformando comunidades.</p>
          <a href="/contato" className={styles.ctaButton}>Entre em contato</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <Image
                src={logoImg}
                alt="Logo ACIERJ"
                width={80}
                height={80}
              />
              <div>
                <h3>ACIERJ</h3>
                <p>Associação dos Cuidadores da Pessoa Idosa, da Saúde Mental e com Deficiência do Estado do Rio de Janeiro</p>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h4>Páginas</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/projetos">Projetos</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} ACIERJ. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

