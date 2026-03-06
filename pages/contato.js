import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";

export default function Contato() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Contato e Participar</h1>
            <p>Entre em contato conosco ou participe do movimento da ACIERJ.</p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Formulário de Contato</h2>
            <form>
              <div style={{ marginBottom: "16px" }}>
                <label>Nome:</label>
                <input type="text" style={{ width: "100%", padding: "8px" }} />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label>E-mail:</label>
                <input type="email" style={{ width: "100%", padding: "8px" }} />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label>Mensagem:</label>
                <textarea
                  style={{ width: "100%", padding: "8px", height: "100px" }}
                ></textarea>
              </div>
              <button type="submit" className={styles.ctaButton}>
                Enviar
              </button>
            </form>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGreen}`}>
          <div className={styles.container}>
            <h2>Redes Sociais e Participação</h2>
            <p>Siga-nos e junte-se ao movimento.</p>
            <p>E-mail: contato@acierj.org.br</p>
            <p>Telefone: (21) 1234-5678</p>
          </div>
        </section>
      </main>
    </>
  );
}
