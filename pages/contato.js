import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
            <h2>Contatos institucionais</h2>
            <p>
              <strong>Lília Nascimento — Presidente</strong>
              <br />
              📞 (21) 96407-8051
            </p>
            <p>
              <strong>Ana Gilda — Vice-Presidente</strong>
              <br />
              📞 (21) 99348-2699
            </p>
            <p>
              <strong>Cássia Gouveia — Diretoria</strong>
              <br />
              📞 (21) 97614-4915
            </p>
            <p>
              <strong>E-mail:</strong> acierj@gmail.com
            </p>
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://instagram.com/acierjcuidadores"
                target="_blank"
                rel="noopener noreferrer"
              >
                @acierjcuidadores
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
