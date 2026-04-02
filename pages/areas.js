import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";

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
    icon: "♿",
    title: "Pessoa com Deficiência",
    desc: "Promoção de inclusão, acessibilidade e autonomia para pessoas com deficiência.",
  },
  {
    icon: "🧠",
    title: "Saúde Mental",
    desc: "Luta antimanicomial, Reforma Psiquiátrica e defesa da saúde mental como direito fundamental.",
  },
  {
    icon: "🏠",
    title: "Pop. em Situação de Rua",
    desc: "Apoio, reinserção social e defesa dos direitos de pessoas em situação de vulnerabilidade.",
  },
];

const como = [
  {
    icon: "🗣️",
    title: "Mobilização coletiva",
    desc: "Organização de atos, rodas de conversa e mobilização política para avançar na regulamentação da profissão.",
  },
  {
    icon: "🤝",
    title: "Diálogo com movimentos",
    desc: "Articulação com sindicatos, movimentos sociais e entidades para ampliar a luta.",
  },
  {
    icon: "📜",
    title: "Pressão política",
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
        tagline="Atuamos em diversas frentes de luta e defesa social, focando em direitos e inclusão para populações vulneráveis."
      />

      {/* ═══════════════ Causas ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Causas que defendemos"
            subtitle="A ACIERJ abraça diversas frentes de luta, articulando movimentos sociais em prol dos direitos dos cuidadores e das populações em situação de cuidado."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {causas.map((item, i) => (
              <Card key={item.title} {...item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Como atuamos ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Como atuamos"
            subtitle="Nossa atuação é baseada em mobilização coletiva, diálogo com movimentos sociais e pressão política para a construção de políticas públicas que valorizem o trabalho dos cuidadores."
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
    </PageLayout>
  );
}
