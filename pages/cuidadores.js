import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";

export default function Cuidadores() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Para Cuidadores</h1>
            <p>
              Informações e apoio para cuidadores: direitos, formação,
              orientações e como se envolver com a ACIERJ.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Orientações e Direitos</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Direitos Trabalhistas</h3>
                <p>
                  Informações sobre direitos dos cuidadores como profissionais.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Formação</h3>
                <p>Cursos e capacitações para cuidadores.</p>
              </div>
              <div className={styles.card}>
                <h3>Apoio da Associação</h3>
                <p>Como a ACIERJ apoia cuidadores.</p>
              </div>
              <div className={styles.card}>
                <h3>Como se Envolver</h3>
                <p>Participe de nossas atividades e movimentos.</p>
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
                <h3>Cursos e capacitação</h3>
                <p>Formação para cuidadores.</p>
                <a href="/cursos" className={styles.ctaButton}>
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
                <p>Tire dúvidas ou participe.</p>
                <a href="/contato" className={styles.ctaButton}>
                  Contato
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
