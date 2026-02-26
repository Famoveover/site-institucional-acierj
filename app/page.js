import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Associação dos Cuidadores — ACIERJ</h1>
          <p className="lead">
            Apoiando cuidadores de pessoas idosas, com saúde mental e
            deficiência no Estado do Rio de Janeiro.
          </p>
        </div>
      </section>

      <Section id="quem-somos" title="Quem Somos">
        <p>
          Somos uma associação dedicada a oferecer suporte, formação e
          representação para cuidadores.
        </p>
      </Section>

      <Section id="projetos" title="Projetos">
        <p>Conheça nossos projetos de capacitação, apoio e inclusão.</p>
      </Section>

      <Section id="contato" title="Contato">
        <p>Entre em contato para parcerias ou informações.</p>
      </Section>
    </>
  );
}
