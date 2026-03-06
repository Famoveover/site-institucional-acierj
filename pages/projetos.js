import Image from "next/image";
import styles from "../styles/Home.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projeto1Img from "../imagens/acierj3.jpg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/acierj5.jpg";

export default function Projetos() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className={styles.container}>
            <h1>Projetos e Ações</h1>
            <p>
              Conheça as iniciativas, campanhas, eventos e mobilizações da
              ACIERJ que estão transformando vidas e fortalecendo comunidades.
            </p>
          </div>
        </section>

        <Wave />

        <section className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.container}>
            <h2>Iniciativas em Destaque</h2>
            <div className={styles.projectGrid}>
              <article>
                <Image
                  src={projeto1Img}
                  alt="Equipe em ação"
                  width={300}
                  height={200}
                  sizes="(max-width:600px) 100vw, 300px"
                />
                <h3>Projeto 1</h3>
                <p>Iniciativa voltada para educação comunitária.</p>
              </article>
              <article>
                <Image
                  src={projeto2Img}
                  alt="Atividade cultural"
                  width={300}
                  height={200}
                  sizes="(max-width:600px) 100vw, 300px"
                />
                <h3>Projeto 2</h3>
                <p>Programa de arte e cultura para jovens.</p>
              </article>
              <article>
                <Image
                  src={projeto3Img}
                  alt="Evento de saúde"
                  width={300}
                  height={200}
                  sizes="(max-width:600px) 100vw, 300px"
                />
                <h3>Projeto 3</h3>
                <p>Campanhas de saúde preventiva na comunidade.</p>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
