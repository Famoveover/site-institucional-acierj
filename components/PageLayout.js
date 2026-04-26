import Header from "./Header";
import Footer from "./Footer";

/**
 * PageLayout – wrapper padrão para todas as páginas internas.
 * Inclui Header fixo, <main> e Footer.
 */
export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
