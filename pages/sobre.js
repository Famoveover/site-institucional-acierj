import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logoImg from "../imagens/acierj.png";

export default function Sobre() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Sobre a ACIERJ</h1>
            <p>
              A Associação de Cuidadores da Pessoa Idosa, Saúde Mental e com
              Deficiência do Estado do Rio de Janeiro (ACIERJ) é um coletivo de
              trabalhadores do cuidado que há mais de 13 anos atua na defesa da
              regulamentação da profissão e na inclusão dos cuidadores nas
              políticas públicas de saúde e assistência social.
            </p>
            <p>
              A ACIERJ luta pelo reconhecimento da importância social do cuidado
              e pela valorização dos profissionais que atuam com pessoas idosas,
              pessoas com deficiência e pessoas em situação de vulnerabilidade.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "32px",
              }}
            >
              <Image src={logoImg} alt="Logo ACIERJ" width={100} height={100} />
              <div>
                <h3>Valores</h3>
                <ul>
                  <li>Direitos dos cuidadores</li>
                  <li>Defesa da dignidade humana</li>
                  <li>Inclusão e equidade</li>
                  <li>Articulação comunitária</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Equipe e Coordenação</h2>
            <p>Conheça as pessoas que fazem a ACIERJ acontecer.</p>
            {/* Placeholder para equipe */}
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Coordenadora</h3>
                <p>Nome da coordenadora</p>
              </div>
              <div className={styles.card}>
                <h3>Equipe</h3>
                <p>Membros da equipe</p>
              </div>
            </div>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h2>Conheça também</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>O que faz um cuidador</h3>
                <p>Entenda a profissão de cuidador.</p>
                <a href="/cuidadores" className={styles.ctaButton}>
                  Ver mais
                </a>
              </div>
              <div className={styles.card}>
                <h3>Cursos e capacitação</h3>
                <p>Formação para cuidadores.</p>
                <a href="/cursos" className={styles.ctaButton}>
                  Ver mais
                </a>
              </div>
              <div className={styles.card}>
                <h3>Entre em contato</h3>
                <p>Fale conosco.</p>
                <a href="/contato" className={styles.ctaButton}>
                  Contato
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
