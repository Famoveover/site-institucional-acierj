import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import heroImg from "../imagens/acierj2.jpg";
import quemSomosImg from "../imagens/foto da acierj1.jpg";
import projeto1Img from "../imagens/acierj3.jpg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/acierj5.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero} aria-labelledby="hero-title">
          <Image
            src={heroImg}
            alt="Cuidadores da ACIERJ em atividade social no Rio de Janeiro"
            fill
            className={styles.heroBg}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 id="hero-title">Fortalecendo e valorizando cuidadores</h1>
            <p>
              Formação, apoio e mobilização para profissionais do cuidado na
              luta pela regulamentação da profissão no Rio de Janeiro.
            </p>
            <div className={styles.heroButtons}>
              <a href="/sobre" className={styles.ctaButtonLight}>
                Conheça a ACIERJ
              </a>
              <a href="/cuidadores" className={styles.ctaButtonOutlineLight}>
                Associe-se ao movimento
              </a>
            </div>
          </div>
        </section>

        {/* ── Quem somos ── */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.wrapper}>
            <div className={styles.sectionHeader}>
              <h2>Quem somos</h2>
              <p>Conheça a história e a missão do nosso coletivo.</p>
            </div>
            <div className={styles.twoColumns}>
              <div className={styles.colText}>
                <p>
                  Somos um coletivo de trabalhadores e trabalhadoras do cuidado
                  que há mais de 13 anos luta pela regulamentação da profissão e
                  pela inclusão dos cuidadores nas políticas públicas de saúde e
                  assistência social (SUS e SUAS).
                </p>
                <p>
                  A ACIERJ é um movimento social organizado que une cuidadores
                  profissionais, familiares e voluntários na defesa dos direitos
                  da categoria e das pessoas em situação de cuidado.
                </p>
                <a href="/sobre" className={styles.ctaButton}>
                  Saiba mais sobre a associação
                </a>
              </div>
              <div className={styles.colImage}>
                <Image
                  src={quemSomosImg}
                  alt="Reunião do coletivo ACIERJ"
                  width={480}
                  height={360}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Nossa atuação ── */}
        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.wrapper}>
            <div className={styles.sectionHeader}>
              <h2>Nossa atuação</h2>
              <p>
                Atuamos na defesa dos direitos dos cuidadores e das populações
                em situação de cuidado, dialogando com diversos movimentos
                sociais.
              </p>
            </div>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>👥</span>
                <h3>Direitos dos Cuidadores</h3>
                <p>Regulamentação profissional e reconhecimento social.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🧓</span>
                <h3>Pessoa Idosa</h3>
                <p>Defesa dos direitos e qualidade de vida.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>♿</span>
                <h3>Pessoa com Deficiência</h3>
                <p>Inclusão e acessibilidade.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🧠</span>
                <h3>Saúde Mental</h3>
                <p>Luta antimanicomial e defesa da saúde mental.</p>
              </div>
            </div>
            <div className={styles.sectionCta}>
              <a href="/areas" className={styles.ctaButton}>
                Conheça nossas áreas de atuação
              </a>
            </div>
          </div>
        </section>

        {/* ── Benefícios da associação ── */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.wrapper}>
            <div className={styles.sectionHeader}>
              <h2>Benefícios da associação</h2>
              <p>
                Fortalecer os cuidadores é nossa prioridade. Veja o que a ACIERJ
                oferece aos associados.
              </p>
            </div>
            <div className={styles.grid4}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>⚖️</span>
                <h3>Suporte jurídico</h3>
                <p>
                  Orientação legal para questões trabalhistas e direitos da
                  categoria.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>📋</span>
                <h3>Orientação profissional</h3>
                <p>
                  Capacitação e direcionamento para o exercício da profissão.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>🤝</span>
                <h3>Rede de apoio</h3>
                <p>
                  Parcerias e articulação com políticas públicas e movimentos
                  sociais.
                </p>
              </div>
              <div className={styles.card}>
                <span className={styles.cardIcon}>💚</span>
                <h3>Escuta terapêutica</h3>
                <p>
                  Roda de escuta com psicologia e serviço social para os
                  cuidadores.
                </p>
              </div>
            </div>
            <div className={styles.sectionCta}>
              <a href="/cuidadores" className={styles.ctaButton}>
                Veja como participar
              </a>
            </div>
          </div>
        </section>

        {/* ── Projetos e ações ── */}
        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.wrapper}>
            <div className={styles.sectionHeader}>
              <h2>Projetos e ações</h2>
              <p>
                Conheça algumas das iniciativas da ACIERJ em prol dos cuidadores
                e das pessoas em situação de cuidado.
              </p>
            </div>
            <div className={styles.grid3}>
              <article className={styles.projectCard}>
                <Image
                  src={projeto1Img}
                  alt="Encontro de cuidadores promovido pela ACIERJ"
                  width={400}
                  height={250}
                />
                <div className={styles.projectBody}>
                  <h3>Encontros de cuidadores</h3>
                  <p>
                    Rodas de conversa e troca de experiências entre cuidadores
                    de todo o estado.
                  </p>
                </div>
              </article>
              <article className={styles.projectCard}>
                <Image
                  src={projeto2Img}
                  alt="Ação comunitária da ACIERJ"
                  width={400}
                  height={250}
                />
                <div className={styles.projectBody}>
                  <h3>Ações comunitárias</h3>
                  <p>
                    Atividades em comunidades para orientação e apoio às
                    famílias que cuidam.
                  </p>
                </div>
              </article>
              <article className={styles.projectCard}>
                <Image
                  src={projeto3Img}
                  alt="Capacitação profissional ACIERJ"
                  width={400}
                  height={250}
                />
                <div className={styles.projectBody}>
                  <h3>Capacitação profissional</h3>
                  <p>
                    Cursos e formações para instrumentalizar o trabalho dos
                    cuidadores.
                  </p>
                </div>
              </article>
            </div>
            <div className={styles.sectionCta}>
              <a href="/projetos" className={styles.ctaButton}>
                Ver todos os projetos
              </a>
            </div>
          </div>
        </section>

        {/* ── Chamada para associação ── */}
        <section className={`${styles.section} ${styles.sectionGreen}`}>
          <div className={styles.wrapper}>
            <div className={styles.ctaSection}>
              <h2>Junte-se ao movimento</h2>
              <p>
                A luta pela valorização do cuidado precisa de organização
                coletiva. Faça parte da ACIERJ e fortaleça a categoria dos
                cuidadores no estado do Rio de Janeiro.
              </p>
              <a href="/cuidadores" className={styles.ctaButtonLight}>
                Preencher ficha de inscrição
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
