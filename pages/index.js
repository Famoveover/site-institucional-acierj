import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";

// imagens locais
import projeto1Img from "../imagens/acierj3.jpg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/acierj5.jpg";
import heroImg from "../imagens/acierj2.jpg";
import logoImg from "../imagens/acierj.png";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroText}>
            <h1 id="hero-title">ACIERJ</h1>
            <p>Associação dos Cuidadores do Estado do Rio de Janeiro</p>
            <p>
              Defendendo os direitos dos cuidadores e a dignidade das pessoas em
              situação de cuidado.
            </p>
            <div className={styles.heroButtons}>
              <a href="/sobre" className={styles.ctaButton}>
                Conheça a ACIERJ
              </a>
              <a href="/contato" className={styles.ctaButtonSecondary}>
                Precisa de orientação?
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={heroImg}
              alt="Pessoas em ação social representando a ACIERJ"
              width={500}
              height={400}
              priority
            />
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h2>O que é a ACIERJ</h2>
            <p>
              A ACIERJ (Associação dos Cuidadores da Pessoa Idosa, da Saúde
              Mental e com Deficiência do Estado do Rio de Janeiro) é uma
              organização dedicada à promoção de direitos, inclusão social e
              apoio a movimentos comunitários. Nossa missão é fortalecer vozes,
              construir redes e gerar impacto positivo na sociedade.
            </p>
            <a href="/sobre" className={styles.ctaButton}>
              Saiba mais sobre nossa história
            </a>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Para quem é este site</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Cuidadores</h3>
                <p>Informações sobre profissão, direitos e formação.</p>
                <a href="/cuidadores" className={styles.ctaButton}>
                  Acesse
                </a>
              </div>
              <div className={styles.card}>
                <h3>Pessoa buscando ajuda</h3>
                <p>Orientação sobre cuidado e encaminhamento.</p>
                <a href="/ajuda" className={styles.ctaButton}>
                  Acesse
                </a>
              </div>
              <div className={styles.card}>
                <h3>Instituições e parceiros</h3>
                <p>Conheça nossa atuação e como colaborar.</p>
                <a href="/parceiros" className={styles.ctaButton}>
                  Acesse
                </a>
              </div>
            </div>
          </div>
        </section>

        <Wave />

        <section
          id="projetos"
          className={`${styles.section} ${styles.sectionGray}`}
        >
          <div className={styles.container}>
            <h2>Projetos e ações</h2>
            <p>
              Conheça as iniciativas que estão transformando vidas e
              fortalecendo comunidades.
            </p>
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
            <a href="/projetos" className={styles.ctaButton}>
              Ver projetos e iniciativas
            </a>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h2>Nossas causas</h2>
            <p>A ACIERJ abraça diversas frentes de luta e defesa social:</p>
            <ul>
              <li>Direitos dos cuidadores</li>
              <li>Pessoa idosa</li>
              <li>Pessoa com deficiência</li>
              <li>População em situação de rua</li>
              <li>Luta antimanicomial</li>
            </ul>
            <a href="/areas" className={styles.ctaButton}>
              Conheça nossas áreas de atuação
            </a>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGreen}`}>
          <div className={styles.container}>
            <h2>Quer conhecer mais ou participar da ACIERJ?</h2>
            <p>Entre em contato conosco ou acompanhe nossas atividades.</p>
            <a href="/contato" className={styles.ctaButton}>
              Entrar em contato
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerBrand}>
                <Image src={logoImg} alt="Logo ACIERJ" width={80} height={80} />
                <div>
                  <h3>ACIERJ</h3>
                  <p>
                    Associação dos Cuidadores da Pessoa Idosa, da Saúde Mental e
                    com Deficiência do Estado do Rio de Janeiro
                  </p>
                </div>
              </div>
              <div className={styles.footerLinks}>
                <h4>Páginas</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/sobre">Sobre a ACIERJ</a>
                  </li>
                  <li>
                    <a href="/areas">Áreas de Atuação</a>
                  </li>
                  <li>
                    <a href="/cuidadores">Para Cuidadores</a>
                  </li>
                  <li>
                    <a href="/ajuda">Buscar Ajuda</a>
                  </li>
                  <li>
                    <a href="/projetos">Projetos e Ações</a>
                  </li>
                  <li>
                    <a href="/parceiros">Parceiros</a>
                  </li>
                  <li>
                    <a href="/noticias">Notícias</a>
                  </li>
                  <li>
                    <a href="/contato">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>
                © {new Date().getFullYear()} ACIERJ. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
