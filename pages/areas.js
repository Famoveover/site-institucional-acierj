import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";
import acessibilidadeImg from "../imagens/acessibilidade.png";

const causas = [
  {
    icon: "👥",
    title: "Direitos dos Cuidadores",
    desc: "Regulamentação profissional, reconhecimento da profissão e garantia de direitos trabalhistas para a categoria.",
  },
  {
    icon: "🧓",
    title: "Pessoa Idosa",
    desc: "Defesa dos direitos, qualidade de vida e proteção integral das pessoas idosas e suas famílias.",
  },
  {
    icon: <Image src={acessibilidadeImg} alt="Símbolo de acessibilidade" width={40} height={40} />,
    title: "Pessoa com Deficiência",
    desc: "Promoção de inclusão, acessibilidade e autonomia para pessoas com deficiência.",
  },
  {
    icon: "🧠",
    title: "Saúde Mental",
    desc: "Luta antimanicomial, Reforma Psiquiátrica e defesa da saúde mental como direito fundamental.",
  },
  {
    icon: "\uD83C\uDF93",
    title: "Cuidadores escolares",
    desc: "Atuação voltada ao suporte e inclusão de estudantes que necessitam de acompanhamento especializado no ambiente escolar.",
  },
];

const como = [
  {
    icon: "🗣️",
    title: "Mobilização coletiva",
    desc: "Organização de atividades, rodas de conversa, fóruns, encontro de cuidadores como mobilização política para avançarmos na regulamentação da profissão.",
  },
  {
    icon: "🤝",
    title: "Diálogo com movimentos",
    desc: "Articulação com sindicatos, movimentos sociais e entidades para ampliar a luta.",
  },
  {
    icon: "📜",
    title: "Mobilização Institucional",
    desc: "Atuação junto a legisladores e gestores para incluir os cuidadores nas políticas públicas.",
  },
];

export default function Areas() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Áreas de Atuação"
        tagline="Atuamos na defesa social e garantia de direitos, focando tanto no bem-estar de quem cuida quanto na inclusão da população assistida"
      />

      {/* ═══════════════ Causas ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Causas que defendemos"
            subtitle="A ACIERJ atua diversas frentes de luta, articulando movimentos sociais em prol dos direitos dos cuidadores e das populações em situação de cuidado."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {causas.map((item, i) => (
              <Card key={item.title} {...item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Como atuamos ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Como atuamos"
            subtitle="Nossa atuação baseia-se na mobilização coletiva e no diálogo com movimentos sociais para construir políticas públicas que valorizem o trabalho dos cuidadores"
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {como.map((item, i) => (
              <Card key={item.title} {...item} delay={i * 0.1} />
            ))}
          </div>
          <FadeIn className="text-center">
            <Link
              href="/sobre"
              className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
            >
              Conheça a ACIERJ
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ Direitos da Pessoa Idosa ═══════════════ */}
      <section
        id="direitos-idoso"
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Direitos da Pessoa Idosa"
            subtitle="Conheça as principais garantias legais e como a ACIERJ defende os direitos das pessoas idosas."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📖",
                title: "Estatuto do Idoso",
                desc: "Principais direitos garantidos pela lei, assegurando proteção integral, dignidade e qualidade de vida.",
              },
              {
                icon: "🏥",
                title: "Apoio Social",
                desc: "Programas e serviços disponíveis para garantir a saúde e o bem-estar das pessoas idosas.",
              },
              {
                icon: "⚖️",
                title: "Defesa de Direitos",
                desc: "Como a ACIERJ atua na defesa dos direitos das pessoas idosas, com articulação política e social.",
              },
            ].map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                  <span className="text-3xl mb-4 block">{icon}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link
              href="/direitos-idoso"
              className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
            >
              Ver página completa
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
