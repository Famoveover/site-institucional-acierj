export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Associação dos Cuidadores — ACIERJ. Todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
