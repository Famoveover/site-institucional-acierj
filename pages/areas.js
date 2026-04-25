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

const legislacaoPessoaIdosa = [
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
];

const atuacaoPessoaIdosa = [
  {
    id: "reuniao-integralidade",
    imagem: null, // TODO: inserir caminho da imagem, ex: "/imagens/reuniao-integralidade.jpg"
    alt: "Vice-Presidente na Reunião de Integralidade",
    legenda:
      "Participação da Vice-Presidente e responsável pelo departamento da Pessoa Idosa na Reunião de Integralidade, espaço de diálogo e articulação interprofissional voltado ao fortalecimento do cuidado no território com a população idosa de Madureira e demais coberturas do equipamento.",
  },
  {
    id: "reuniao-cap",
    imagem: null, // TODO: inserir caminho da imagem, ex: "/imagens/reuniao-cap.jpg"
    alt: "Reunião de articulação com a equipe da CAP 3.3",
    legenda:
      "Reunião de articulação com a equipe da CAP 3.3 na promoção de cuidado, sensibilização e acesso à população idosa assistida do território.",
  },
  {
    id: "podidoso",
    imagem: null, // TODO: inserir caminho da imagem, ex: "/imagens/podidoso.jpg"
    alt: "Participação no Podidoso",
    legenda:
      "Participação no Podidoso: conversa e debate sobre atribuições, direitos e deveres dos cuidadores da pessoa idosa.",
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
            {legislacaoPessoaIdosa.map(({ icon, title, desc }, i) => (
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

          <FadeIn className="mt-14">
            <div className="flex flex-col items-center text-center mb-10">
              <span className="px-3 py-1 bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                Departamento da Pessoa Idosa
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                Atuação Institucional
              </h3>
              <p className="max-w-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Registros da atuação da Vice-Presidente e responsável pelo Departamento da Pessoa Idosa
                em ações de articulação, cuidado e promoção de direitos no território.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {atuacaoPessoaIdosa.map(({ id, imagem, alt, legenda }, i) => (
              <FadeIn key={id} delay={i * 0.1}>
                <article className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 flex flex-col h-full">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-400/10 to-brand-400/20 dark:from-brand-400/5 dark:to-brand-400/15 overflow-hidden">
                    {imagem ? (
                      <img
                        src={imagem}
                        alt={alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-brand-400/40 dark:text-brand-300/30 select-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18M3.75 3h16.5A.75.75 0 0121 3.75v13.5A.75.75 0 0120.25 18H3.75A.75.75 0 013 17.25V3.75A.75.75 0 013.75 3z"
                          />
                        </svg>
                        <span className="text-xs font-medium tracking-wide">Imagem em breve</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-brand-400 text-white text-xs font-black flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                  </div>

                  <div className="px-5 py-4 flex-1 flex items-start">
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {legenda}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
