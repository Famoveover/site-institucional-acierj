import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";

export default function Noticias() {
  return (
    <main className={styles.container}>
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <h1>Notícias e Blog</h1>
          <p>
            Fique por dentro de eventos, posicionamentos, artigos sobre cuidado,
            direitos sociais e políticas públicas.
          </p>
        </div>
      </section>

      <Wave />

      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <h2>Publicações Recentes</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Evento: Mobilização por Direitos</h3>
              <p>Relato do evento realizado no mês passado.</p>
            </div>
            <div className={styles.card}>
              <h3>Artigo: Cuidado e Dignidade</h3>
              <p>Reflexões sobre o papel dos cuidadores na sociedade.</p>
            </div>
            <div className={styles.card}>
              <h3>Posicionamento: Políticas Públicas</h3>
              <p>Nossa visão sobre recentes mudanças legislativas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
