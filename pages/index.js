import Head from 'next/head';
import '../styles/styles.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>ACIERJ - Associação dos Cuidadores do Estado do Rio de Janeiro</title>
        <meta name="description" content="Defesa dos direitos dos cuidadores e populações vulnerabilizadas no Rio de Janeiro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <h1>Defender quem cuida é lutar por justiça social</h1>
          <p>
            A ACIERJ atua na defesa dos direitos dos cuidadores e das populações
            em situação de vulnerabilidade no Estado do Rio de Janeiro.
          </p>
        </section>

        <section className="sobre">
          <div className="container">
            <h2>Quem somos</h2>
            <p>
              A ACIERJ é uma associação da sociedade civil sem fins lucrativos que promove direitos, inclusão e dignidade
              para cuidadores e populações vulnerabilizadas. Atuamos na defesa dos direitos humanos, com foco em justiça social,
              diversidade e acolhimento.
            </p>
          </div>
        </section>

        <section className="atuacao">
          <div className="container">
            <h2>Nossa atuação</h2>
            <div className="cards">
              <div className="card">
                <h3>Cuidadores</h3>
                <p>Defesa dos direitos dos profissionais e familiares que cuidam de pessoas vulneráveis.</p>
              </div>
              <div className="card">
                <h3>Pessoa Idosa</h3>
                <p>Promoção de direitos e qualidade de vida para a terceira idade.</p>
              </div>
              <div className="card">
                <h3>Pessoa com Deficiência</h3>
                <p>Inclusão e acessibilidade para pessoas com deficiência.</p>
              </div>
              <div className="card">
                <h3>População em Situação de Rua</h3>
                <p>Apoio e defesa dos direitos das pessoas em situação de rua.</p>
              </div>
              <div className="card">
                <h3>Direitos Humanos</h3>
                <p>Luta por justiça social, igualdade e direitos fundamentais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="movimentos">
          <div className="container">
            <h2>Nossas bandeiras</h2>
            <p>
              Defendemos inclusão social, diversidade, reforma psiquiátrica (luta antimanicomial),
              inclusão LGBTQIA+, movimento de mulheres negras e justiça social.
            </p>
            <ul>
              <li>Luta antimanicomial</li>
              <li>Inclusão LGBTQIA+</li>
              <li>Movimento de mulheres negras</li>
              <li>Justiça social e direitos humanos</li>
            </ul>
          </div>
        </section>

        <section className="projetos">
          <div className="container">
            <h2>Projetos sociais</h2>
            <p>
              Conheça alguns dos nossos projetos em andamento para promover mudança social.
            </p>
            <div className="cards">
              <div className="card">
                <h3>Projeto Acolhimento</h3>
                <p>Programa de apoio aos cuidadores com capacitação e suporte emocional.</p>
              </div>
              <div className="card">
                <h3>Campanha de Inclusão</h3>
                <p>Iniciativas para promover acessibilidade e inclusão em comunidades.</p>
              </div>
              <div className="card">
                <h3>Defesa Jurídica</h3>
                <p>Assistência jurídica gratuita para populações vulneráveis.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Participe da luta</h2>
            <p>Junte-se a nós na defesa dos direitos e na construção de uma sociedade mais justa.</p>
            <button>Conheça nossos projetos</button>
            <button>Apoie a ACIERJ</button>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 ACIERJ - Associação dos Cuidadores do Estado do Rio de Janeiro</p>
            <p>Contato: contato@acierj.org.br</p>
          </div>
        </footer>
      </main>
    </>
  );
}
