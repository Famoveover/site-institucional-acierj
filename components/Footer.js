import Image from "next/image";
import styles from "../styles/Home.module.css";
import logoImg from "../imagens/acierj.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <div className={styles.footerBrand}>
              <Image src={logoImg} alt="Logo ACIERJ" width={60} height={60} />
              <div>
                <h3>ACIERJ</h3>
                <p>
                  Coletivo de trabalhadores do cuidado na luta pela valorização
                  da profissão e pela defesa dos direitos das pessoas em
                  situação de cuidado.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sobre">Sobre a ACIERJ</a>
              </li>
              <li>
                <a href="/cuidadores">Cuidadores</a>
              </li>
              <li>
                <a href="/areas">Áreas de Atuação</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Participe</h4>
            <ul>
              <li>
                <a href="/cuidadores">Associe-se à ACIERJ</a>
              </li>
              <li>
                <a href="/cuidadores">Ficha de inscrição</a>
              </li>
              <li>
                <a href="/cuidadores">Benefícios</a>
              </li>
              <li>
                <a href="/projetos">Participar de eventos</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Contato</h4>
            <p>
              <strong>Email</strong>
              <br />
              acierj@gmail.com
            </p>
            <p>
              <strong>Telefone</strong>
              <br />
              (21) 98236-3474
            </p>
            <p>
              <strong>Localização</strong>
              <br />
              Rio de Janeiro - RJ
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} ACIERJ – Associação dos Cuidadores do
            Estado do Rio de Janeiro
          </p>
          <p style={{ fontSize: "12px", marginTop: "8px", opacity: 0.8 }}>
            Site desenvolvido para fortalecimento da categoria dos cuidadores.
          </p>
        </div>
      </div>
    </footer>
  );
}
