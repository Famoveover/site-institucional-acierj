import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cursos() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Cursos / Capacitação</h1>
            <p>
              Ofertas de formação e capacitação para cuidadores e interessados
              em atuar na área.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Cursos Disponíveis</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Introdução ao Cuidado</h3>
                <p>Curso básico para iniciantes.</p>
              </div>
              <div className={styles.card}>
                <h3>Cuidados com Idosos</h3>
                <p>Especialização em cuidados geriátricos.</p>
              </div>
              <div className={styles.card}>
                <h3>Saúde Mental</h3>
                <p>Capacitação em apoio à saúde mental.</p>
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
                <p>Entenda a profissão.</p>
                <a href="/cuidadores" className={styles.ctaButton}>
                  Ver mais
                </a>
              </div>
              <div className={styles.card}>
                <h3>Direitos da Pessoa Idosa</h3>
                <p>Informações sobre direitos.</p>
                <a href="/direitos-idoso" className={styles.ctaButton}>
                  Ver mais
                </a>
              </div>
              <div className={styles.card}>
                <h3>Entre em contato</h3>
                <p>Inscreva-se ou tire dúvidas.</p>
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
