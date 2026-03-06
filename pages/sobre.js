import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import acierj1Img from "../imagens/foto da acierj1.jpg";
import acierj6Img from "../imagens/acierj6.jpg";
import acierj7Img from "../imagens/acierj7.jpg";

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero da página interna ── */}
        <section className={styles.pageHero} aria-labelledby="sobre-titulo">
          <div className={styles.wrapper}>
            <p className={styles.pageHeroCrumb}>ACIERJ</p>
            <h1 id="sobre-titulo">Quem Somos</h1>
            <p className={styles.pageHeroTagline}>
              A luta dos cuidadores invisibilizados
            </p>
          </div>
        </section>

        {/* ── Introdução ── */}
        <section
          className={`${styles.section} ${styles.sectionWhite}`}
          aria-labelledby="intro-titulo"
        >
          <div className={styles.wrapper}>
            <div className={styles.twoColumns}>
              <div className={styles.colText}>
                <h2 id="intro-titulo">A ACIERJ e sua luta</h2>
                <p>
                  A Associação de Cuidadores da Pessoa Idosa, Saúde Mental e com
                  Deficiência do Estado do Rio de Janeiro (ACIERJ) é um coletivo
                  de trabalhadores do cuidado que há mais de 13 anos atua na
                  defesa da regulamentação da profissão e na inclusão dos
                  cuidadores nas políticas públicas de saúde e assistência
                  social — SUS e SUAS.
                </p>
                <p>
                  Somos um movimento social organizado que une cuidadores
                  profissionais, familiares e voluntários na luta pelo
                  reconhecimento da importância social do cuidado e pela
                  valorização das pessoas que dedicam suas vidas a cuidar de
                  idosos, pessoas com deficiência e em sofrimento mental.
                </p>
                <ul className={styles.valueList}>
                  <li>
                    <span>🤝</span> Defesa coletiva dos direitos da categoria
                  </li>
                  <li>
                    <span>⚖️</span> Regulamentação e reconhecimento profissional
                  </li>
                  <li>
                    <span>🌱</span> Inclusão e equidade nas políticas públicas
                  </li>
                  <li>
                    <span>💡</span> Formação e instrumentalização dos cuidadores
                  </li>
                </ul>
                <a href="/cuidadores" className={styles.ctaButton}>
                  Seja um associado
                </a>
              </div>
              <div className={styles.colImage}>
                <Image
                  src={acierj1Img}
                  alt="Coletivo ACIERJ reunido — cuidadores organizados em movimento social"
                  width={700}
                  height={450}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Nossa luta ── */}
        <section
          className={`${styles.section} ${styles.sectionGray}`}
          aria-labelledby="luta-titulo"
        >
          <div className={styles.wrapper}>
            <div className={styles.sectionHeader}>
              <h2 id="luta-titulo">Nossa luta</h2>
              <p>
                O trabalho do cuidado sempre existiu, mas foi mantido na
                invisibilidade. Historicamente realizado por mulheres negras,
                pobres e periféricas, o cuidado é desvalorizado, não
                regulamentado e atravessado por múltiplas opressões.
              </p>
            </div>

            <div className={styles.grid4}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>✊🏾</span>
                <h3>Racismo</h3>
                <p>
                  A maioria dos cuidadores é negra. Enfrentamos o racismo
                  estrutural que precariza o trabalho e exclui a categoria das
                  políticas públicas.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>👩</span>
                <h3>Machismo</h3>
                <p>
                  O cuidado é visto como extensão "natural" do trabalho
                  feminino. Lutamos pela valorização de um trabalho que sempre
                  foi feminizado e invisibilizado.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🏳️‍🌈</span>
                <h3>LGBTfobia</h3>
                <p>
                  Muitos cuidadores LGBTQIA+ sofrem discriminação. A ACIERJ
                  defende um ambiente de trabalho livre de qualquer forma de
                  preconceito.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>♿</span>
                <h3>Capacitismo</h3>
                <p>
                  As pessoas em situação de cuidado têm o direito à autonomia e
                  à dignidade. Combatemos o capacitismo em todas as suas formas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Formação e capacitação ── */}
        <section
          className={`${styles.section} ${styles.sectionWhite}`}
          aria-labelledby="formacao-titulo"
        >
          <div className={styles.wrapper}>
            <div className={styles.formationSection}>
              <div className={styles.formationImage}>
                <Image
                  src={acierj6Img}
                  alt="Atividade de capacitação profissional da ACIERJ"
                  width={700}
                  height={450}
                />
              </div>
              <div className={styles.formationContent}>
                <span className={styles.formationBadge}>
                  Formação profissional
                </span>
                <h2 id="formacao-titulo">
                  Curso de desenvolvimento para cuidadores de saúde mental
                </h2>
                <p>
                  A ACIERJ organizou um curso de desenvolvimento profissional
                  voltado para cuidadores que atuam com pessoas em sofrimento
                  mental. O projeto foi construído em parceria com instituições
                  de ensino e pesquisa, garantindo formação qualificada e
                  alinhada à luta antimanicomial.
                </p>
                <ul className={styles.formationList}>
                  <li>Cuidado humanizado e ético em saúde mental</li>
                  <li>Direitos das pessoas com transtorno mental</li>
                  <li>Luta antimanicomial e Reforma Psiquiátrica</li>
                  <li>Práticas de escuta ativa e acolhimento</li>
                  <li>Autocuidado e saúde do cuidador</li>
                </ul>
                <a href="/cursos" className={styles.ctaButton}>
                  Conheça nossos cursos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Parcerias institucionais ── */}
        <section
          className={`${styles.section} ${styles.sectionGray}`}
          aria-labelledby="parceiros-titulo"
        >
          <div className={styles.wrapper}>
            <div className={styles.sectionHeader}>
              <h2 id="parceiros-titulo">Parcerias institucionais</h2>
              <p>
                A ACIERJ constrói pontes com universidades e centros de pesquisa
                para fortalecer a formação dos cuidadores e qualificar as
                políticas públicas voltadas à categoria.
              </p>
            </div>
            <div className={styles.grid3}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>🎓</div>
                <h3>UFF</h3>
                <span>Universidade Federal Fluminense</span>
                <p>
                  Parceria acadêmica que contribui com pesquisa, extensão e
                  formação profissional dos cuidadores.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>🏫</div>
                <h3>IFRJ</h3>
                <span>Instituto Federal do Rio de Janeiro</span>
                <p>
                  Colaboração na oferta de cursos técnicos e na qualificação
                  profissional da categoria dos cuidadores.
                </p>
              </div>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>🔬</div>
                <h3>Fiocruz</h3>
                <span>Fundação Oswaldo Cruz</span>
                <p>
                  Suporte técnico-científico para iniciativas em saúde pública,
                  saúde mental e cuidado humanizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Compromisso ── */}
        <section
          className={`${styles.section} ${styles.sectionGreen}`}
          aria-labelledby="compromisso-titulo"
        >
          <div className={styles.wrapper}>
            <div className={styles.ctaSection}>
              <blockquote className={styles.quoteBlock}>
                "Nada de nós sem nós."
              </blockquote>
              <h2 id="compromisso-titulo">Nosso compromisso</h2>
              <p>
                A ACIERJ luta por um sistema de cuidado justo, humanizado e
                público. Defendemos a construção coletiva das políticas que
                afetam nossa categoria — cuidadores, pessoas idosas, com
                deficiência e em sofrimento mental. A luta continua.
              </p>
              <div
                className={styles.heroButtons}
                style={{ justifyContent: "center" }}
              >
                <a href="/cuidadores" className={styles.ctaButtonLight}>
                  Associe-se à ACIERJ
                </a>
                <a href="/contato" className={styles.ctaButtonOutlineLight}>
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
