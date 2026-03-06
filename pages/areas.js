import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Areas() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Áreas de Atuação</h1>
            <p>
              A ACIERJ abraça diversas frentes de luta e defesa social, focando
              em direitos e inclusão para populações vulneráveis.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Causas que Defendemos</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Direitos dos Cuidadores</h3>
                <p>
                  Defesa dos direitos trabalhistas e reconhecimento social dos
                  cuidadores.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Pessoa Idosa</h3>
                <p>Promoção de direitos e qualidade de vida para idosos.</p>
              </div>
              <div className={styles.card}>
                <h3>Pessoa com Deficiência</h3>
                <p>Inclusão e acessibilidade para pessoas com deficiência.</p>
              </div>
              <div className={styles.card}>
                <h3>População em Situação de Rua</h3>
                <p>Apoio e reinserção social.</p>
              </div>
              <div className={styles.card}>
                <h3>Luta Antimanicomial</h3>
                <p>Defesa da saúde mental e contra a institucionalização.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
