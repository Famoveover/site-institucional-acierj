import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";

export default function Parceiros() {
  return (
    <main className={styles.container}>
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h1>Parceiros e Articulação</h1>
          <p>
            Conheça nossas redes de apoio, parcerias institucionais e formas de
            cooperação com a ACIERJ.
          </p>
        </div>
      </section>

      <Wave />

      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2>Redes e Parcerias</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Instituições Parceiras</h3>
              <p>ONGs e entidades com as quais colaboramos.</p>
            </div>
            <div className={styles.card}>
              <h3>Coletivos</h3>
              <p>Movimentos sociais e coletivos aliados.</p>
            </div>
            <div className={styles.card}>
              <h3>Como Cooperar</h3>
              <p>Formas de se envolver e colaborar conosco.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
