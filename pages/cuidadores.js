import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

const objetivos = [
  {
    icon: "💪",
    title: "Fortalecer a categoria dos cuidadores",
    desc: "Defesa da regulamentação da profissão.",
  },
  {
    icon: "📚",
    title: "Promover debates, formação e instrumentalização",
    desc: "Capacitação profissional para cuidadores.",
  },
  {
    icon: "🏛️",
    title: "Fomentar políticas públicas",
    desc: "Inclusão dos cuidadores nas políticas de saúde e assistência.",
  },
  {
    icon: "⚖️",
    title: "Defender direitos",
    desc: "Proteção dos trabalhadores do cuidado.",
  },
];

const beneficios = [
  {
    icon: "⚖️",
    title: "Suporte jurídico",
    desc: "Orientação legal para cuidadores.",
  },
  {
    icon: "📋",
    title: "Orientação profissional",
    desc: "Apoio no desenvolvimento da carreira.",
  },
  {
    icon: "🤝",
    title: "Networking e parcerias",
    desc: "Conexões com outros profissionais.",
  },
  {
    icon: "💚",
    title: "Rodas de escuta terapêutica",
    desc: "Com profissionais de Psicologia e Serviço Social.",
  },
  {
    icon: "✊",
    title: "Participação em movimentos sociais",
    desc: "Envolvimento em causas coletivas.",
  },
];

export default function Cuidadores() {
  return (
    <PageLayout>
      <PageHero
        crumb="ACIERJ"
        title="Para Cuidadores"
        tagline="Informações para trabalhadores cuidadores: direitos, formação, orientações e como se envolver com a ACIERJ."
      />

      {/* ═══════════════ Objetivos ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Nossos objetivos"
            subtitle="Atuamos em frentes estratégicas para fortalecer os cuidadores como categoria profissional."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objetivos.map(({ icon, title, desc }, i) => (
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

      {/* ═══════════════ Benefícios ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Benefícios da associação"
            subtitle="Fortalecer os cuidadores é nossa prioridade. Veja o que a ACIERJ oferece aos associados."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map(({ icon, title, desc }, i) => (
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

      {/* ═══════════════ Como se associar ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-xl">
              <span className="px-3 py-1 bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase">
                Associe-se
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Como se associar
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                Para fazer parte da associação basta preencher a ficha de
                inscrição e realizar o pagamento da anuidade.
              </p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm mb-8">
                <li>
                  <strong>Anuidade:</strong> R$ 120,00
                </li>
                <li>
                  <strong>Chave Pix (CNPJ):</strong> 17.028.461/0001-75
                </li>
                <li>
                  <strong>E-mail:</strong> acierj@gmail.com
                </li>
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfcWDWsj9DXCJL1EDRmyfwgp2lhZhKsSS2L17sVmbOPY3-l3A/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-400 text-white px-8 py-4 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Preencher ficha de inscrição
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}

