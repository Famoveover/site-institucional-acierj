import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

// imagens locais
import projeto1Img from "../imagens/acierj3.jpg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/acierj5.jpg";
import heroImg from "../imagens/acierj2.jpg";
import quemSomosImg from "../imagens/foto da acierj1.jpg";

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
              Trabalhadores do cuidado organizados na luta pela regulamentação
              da profissão e pela defesa da dignidade das pessoas idosas, com
              deficiência e em sofrimento mental.
            </p>
            <div className={styles.heroButtons}>
              <a href="/sobre" className={styles.ctaButton}>
                Conheça a ACIERJ
              </a>
              <a href="/cuidadores" className={styles.ctaButtonSecondary}>
                Associe-se ao movimento
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
            <div className={styles.contentWithImage}>
              <div className={styles.contentText}>
                <h2>Quem somos</h2>
                <p>
                  Somos um coletivo de trabalhadores e trabalhadoras do cuidado que
                  há mais de 13 anos luta pela regulamentação da profissão e pela
                  inclusão dos cuidadores nas políticas públicas de saúde e
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
              <div className={styles.contentImage}>
                <Image
                  src={quemSomosImg}
                  alt="Reunião do coletivo ACIERJ - cuidadores organizados em movimento social"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Nossa luta</h2>
            <p>
              A ACIERJ atua na defesa dos direitos dos cuidadores e das
              populações em situação de cuidado, dialogando com diversos
              movimentos sociais que lutam por justiça social, dignidade e
              políticas públicas inclusivas.
            </p>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>👥</div>
                <h3>Direitos dos Cuidadores</h3>
                <p>Regulamentação profissional e reconhecimento social.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🧓</div>
                <h3>Pessoa Idosa</h3>
                <p>Defesa dos direitos e qualidade de vida.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>♿</div>
                <h3>Pessoa com Deficiência</h3>
                <p>Inclusão e acessibilidade.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🧠</div>
                <h3>Saúde Mental</h3>
                <p>Luta antimanicomial e defesa da saúde mental.</p>
              </div>
            </div>
            <a href="/areas" className={styles.ctaButton}>
              Conheça nossas áreas de atuação
            </a>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h2>Fortalecer os cuidadores é nossa prioridade</h2>
            <ul style={{ fontSize: "16px", lineHeight: "1.8" }}>
              <li>Defesa dos direitos da categoria</li>
              <li>Formação e instrumentalização profissional</li>
              <li>Articulação com políticas públicas</li>
              <li>Participação em movimentos sociais</li>
            </ul>
            <a href="/cuidadores" className={styles.ctaButton}>
              Veja como participar
            </a>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Por que se associar à ACIERJ</h2>
            <ul style={{ fontSize: "16px", lineHeight: "1.8" }}>
              <li>Suporte jurídico</li>
              <li>Orientação profissional</li>
              <li>Rede de apoio e parcerias</li>
              <li>
                Roda de escuta terapêutica com psicologia e serviço social
              </li>
            </ul>
            <a href="/cuidadores" className={styles.ctaButton}>
              Saiba como se associar
            </a>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGreen}`}>
          <div className={styles.container}>
            <h2>Junte-se ao movimento</h2>
            <p>
              A luta pela valorização do cuidado precisa de organização
              coletiva. Faça parte da ACIERJ e fortaleça a categoria dos
              cuidadores no estado do Rio de Janeiro.
            </p>
            <a href="/cuidadores" className={styles.ctaButton}>
              Preencher ficha de inscrição
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
