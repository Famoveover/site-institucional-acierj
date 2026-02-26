import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "ACI-ERJ — Associação dos Cuidadores",
  description:
    "Associação dos Cuidadores da Pessoa Idosa, da Saúde Mental e com Deficiência do Estado do Rio de Janeiro — site institucional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#main">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
