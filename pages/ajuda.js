import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Ajuda() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Buscar Ajuda</h1>
            <p>
              Se você ou sua família precisa de suporte relacionado a cuidado,
              orientação social ou encaminhamento, entre em contato conosco.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Como Pedir Orientação</h2>
            <p>
              Entre em contato através dos canais abaixo para solicitar apoio.
            </p>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Contato Direto</h3>
                <p>E-mail: contato@acierj.org.br</p>
                <p>Telefone: (21) 1234-5678</p>
              </div>
              <div className={styles.card}>
                <h3>Encaminhamentos</h3>
                <p>Para onde direcionamos casos específicos.</p>
              </div>
              <div className={styles.card}>
                <h3>Suporte Imediato</h3>
                <p>Informações para situações urgentes.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
