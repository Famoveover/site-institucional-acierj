import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cuidadores() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Para Cuidadores</h1>
            <p>
              Informações para trabalhadores cuidadores: direitos, formação,
              orientações e como se envolver com a ACIERJ.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Nossos objetivos</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Fortalecer a categoria dos cuidadores</h3>
                <p>Defesa da regulamentação da profissão.</p>
              </div>
              <div className={styles.card}>
                <h3>Promover debates, formação e instrumentalização</h3>
                <p>Capacitação profissional para cuidadores.</p>
              </div>
              <div className={styles.card}>
                <h3>Fomentar políticas públicas</h3>
                <p>
                  Inclusão dos cuidadores nas políticas de saúde e assistência.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Defender direitos</h3>
                <p>Proteção dos trabalhadores do cuidado.</p>
              </div>
            </div>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h2>Benefícios da associação</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Suporte jurídico</h3>
                <p>Orientação legal para cuidadores.</p>
              </div>
              <div className={styles.card}>
                <h3>Orientação profissional</h3>
                <p>Apoio no desenvolvimento da carreira.</p>
              </div>
              <div className={styles.card}>
                <h3>Networking e parcerias</h3>
                <p>Conexões com outros profissionais.</p>
              </div>
              <div className={styles.card}>
                <h3>Rodas de escuta terapêutica</h3>
                <p>Com profissionais de Psicologia e Serviço Social.</p>
              </div>
              <div className={styles.card}>
                <h3>Participação em movimentos sociais</h3>
                <p>Envolvimento em causas coletivas.</p>
              </div>
            </div>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Como se associar</h2>
            <p>
              Para fazer parte da associação basta preencher a ficha de
              inscrição e realizar o pagamento da anuidade.
            </p>
            <p>
              <strong>Anuidade: R$ 120,00</strong>
            </p>
            <p>
              <strong>Chave Pix (CNPJ): 17.028.461/0001-75</strong>
            </p>
            <p>
              <strong>Email: acierj@gmail.com</strong>
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcWDWsj9DXCJL1EDRmyfwgp2lhZhKsSS2L17sVmbOPY3-l3A/viewform?usp=header"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preencher ficha de inscrição
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
