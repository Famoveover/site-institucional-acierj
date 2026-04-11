import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

const legislacao = [
  {
    icon: "📖",
    title: "Estatuto do Idoso",
    desc: "Principais direitos garantidos pela lei.",
  },
  {
    icon: "🏥",
    title: "Apoio Social",
    desc: "Programas e serviços disponíveis.",
  },
  {
    icon: "⚖️",
    title: "Defesa de Direitos",
    desc: "Como a ACIERJ atua nessa área.",
  },
];

const conhecaTambem = [
  {
    title: "Conheça a profissão de cuidador",
    desc: "Saiba mais sobre o papel dos cuidadores.",
    href: "/cuidadores",
    label: "Ver mais",
  },
  {
    title: "Saiba mais sobre a ACIERJ",
    desc: "Entenda nossa missão e atuação.",
    href: "/sobre",
    label: "Ver mais",
  },
  {
    title: "Entre em contato",
    desc: "Fale conosco para apoio ou dúvidas.",
    href: "/contato",
    label: "Contato",
  },
];

export default function DireitosIdoso() {
  return (
    <PageLayout>
      <PageHero
        crumb="ACIERJ"
        title="Direitos da Pessoa Idosa"
        tagline="Informações sobre os direitos das pessoas idosas, legislação, apoio e defesa promovida pela ACIERJ."
      />

      {/* ═══════════════ Legislação e Direitos ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Legislação e Direitos"
            subtitle="Conheça as principais garantias legais e como a ACIERJ defende os direitos da pessoa idosa."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legislacao.map(({ icon, title, desc }, i) => (
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

      {/* ═══════════════ Conheça também ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Conheça também"
            subtitle="Explore outras áreas de atuação da ACIERJ."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conhecaTambem.map(({ title, desc, href, label }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                    {desc}
                  </p>
                  <Link
                    href={href}
                    className="inline-block bg-brand-400 text-white px-5 py-2.5 rounded-lg font-bold text-sm no-underline shadow-sm hover:bg-accent hover:-translate-y-0.5 transition-all duration-200 self-start"
                  >
                    {label}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

