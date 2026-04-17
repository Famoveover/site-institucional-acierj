import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";

const noticias = [
  {
    title: "Trabalhadoras do cuidado compartilham experiências em colóquio realizado na USP",
    source: "Jornal da USP",
    summary:
      "Evento na USP reuniu trabalhadoras do cuidado para compartilhar vivências, debater condições de trabalho e discutir caminhos para a valorização da categoria.",
    link: "https://jornal.usp.br/diversidade/trabalhadoras-do-cuidado-compartilham-experiencias-em-coloquio-realizado-na-usp/",
  },
  {
    title: "Deputados pedem aprovação de estímulo para contratar cuidadores",
    source: "Câmara dos Deputados",
    summary:
      "Parlamentares defendem a aprovação de projeto que cria incentivos para a contratação formal de cuidadores, visando a valorização e regulamentação da profissão.",
    link: "https://www.camara.leg.br/noticias/754156-DEPUTADOS-PEDEM-APROVACAO-DE-ESTIMULO-PARA-CONTRATAR-CUIDADORES",
  },
  {
    title: "'Não consigo relaxar nunca': cuidadoras falam de sobrecarga na pandemia",
    source: "UOL Notícias",
    summary:
      "Reportagem revela o esgotamento físico e emocional de cuidadoras durante a pandemia, evidenciando a sobrecarga de trabalho e a falta de suporte adequado.",
    link: "https://noticias.uol.com.br/saude/ultimas-noticias/redacao/2021/11/22/nao-consigo-relaxar-nunca-cuidadoras-falam-de-sobrecarga-na-pandemia.htm",
  },
  {
    title: "Seminário na UERJ debate pressões sociais, racismo e saúde mental da mulher negra",
    source: "UERJ",
    summary:
      "Seminário realizado na UERJ discutiu as pressões sociais, o racismo estrutural e seus impactos na saúde mental da mulher negra, com entrega do Prêmio Tereza de Benguela.",
    link: "https://www.uerj.br/noticia/seminario-na-uerj-debate-pressoes-sociais-racismo-e-saude-mental-da-mulher-negra-com-entrega-do-premio-tereza-de-benguela/",
  },
];

export default function Noticias() {
  return (
    <PageLayout>
      <PageHero
        crumb="ACIERJ"
        title="Notícias e Blog"
        tagline="Fique por dentro de eventos, posicionamentos, artigos sobre cuidado, direitos sociais e políticas públicas."
      />

      {/* ═══════════════ Notícias ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Últimas Notícias"
            subtitle="Acompanhe as principais matérias sobre cuidadores, direitos e políticas públicas."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {noticias.map((noticia, i) => (
              <NewsCard key={noticia.title} {...noticia} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
