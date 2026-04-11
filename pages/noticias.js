import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

const publicacoes = [
  {
    icon: "📢",
    title: "Evento: Mobilização por Direitos",
    desc: "Relato do evento realizado no mês passado.",
  },
  {
    icon: "✍️",
    title: "Artigo: Cuidado e Dignidade",
    desc: "Reflexões sobre o papel dos cuidadores na sociedade.",
  },
  {
    icon: "🏛️",
    title: "Posicionamento: Políticas Públicas",
    desc: "Nossa visão sobre recentes mudanças legislativas.",
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

      {/* ═══════════════ Publicações ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Publicações Recentes"
            subtitle="Acompanhe nossas últimas publicações e posicionamentos."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicacoes.map(({ icon, title, desc }, i) => (
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
        </div>
      </section>
    </PageLayout>
  );
}

