import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DireitosIdoso() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Direitos da Pessoa Idosa</h1>
            <p>
              Informações sobre os direitos das pessoas idosas, legislação,
              apoio e defesa promovida pela ACIERJ.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Legislação e Direitos</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Estatuto do Idoso</h3>
                <p>Principais direitos garantidos pela lei.</p>
              </div>
              <div className={styles.card}>
                <h3>Apoio Social</h3>
                <p>Programas e serviços disponíveis.</p>
              </div>
              <div className={styles.card}>
                <h3>Defesa de Direitos</h3>
                <p>Como a ACIERJ atua nessa área.</p>
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
                <h3>Conheça a profissão de cuidador</h3>
                <p>Saiba mais sobre o papel dos cuidadores.</p>
                <a href="/cuidadores" className={styles.ctaButton}>
                  Ver mais
                </a>
              </div>
              <div className={styles.card}>
                <h3>Saiba mais sobre a ACIERJ</h3>
                <p>Entenda nossa missão e atuação.</p>
                <a href="/sobre" className={styles.ctaButton}>
                  Ver mais
                </a>
              </div>
              <div className={styles.card}>
                <h3>Entre em contato</h3>
                <p>Fale conosco para apoio ou dúvidas.</p>
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
