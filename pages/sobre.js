import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";

import acierj1Img from "../imagens/quemsomos.jpeg";
import acierj6Img from "../imagens/acierj6.jpg";
import acierj7Img from "../imagens/acierj7.jpg";
import acierjForumImg from "../imagens/acierj diretoria.jpeg";
import mobilizacaoImg from "../imagens/quemsomos.jpeg";
import sobre2Img from "../imagens/sobre2.jpeg";

const lutas = [
  {
    icon: "✊🏾",
    title: "Racismo",
    desc: "Enfrentamos o racismo estrutural que precariza o trabalho e exclui a categoria dos espaços de trabalho.",
  },
  {
    icon: "👩",
    title: "Machismo",
    desc: 'O cuidado é visto como extensão "natural" do trabalho feminino. Lutamos pela valorização de um trabalho historicamente invisibilizado.',
  },
  {
    icon: "🏳️‍🌈",
    title: "LGBTfobia",
    desc: "Muitos cuidadores LGBTQIA+ sofrem discriminação. A ACIERJ defende um ambiente de trabalho livre de qualquer forma de preconceito.",
  },
  {
    icon: "♿",
    title: "Capacitismo",
    desc: "As pessoas em situação de cuidado têm o direito à autonomia e à dignidade. Combatemos o capacitismo em todas as suas formas.",
  },
];

const principios = [
  {
    icon: "⚖️",
    title: "Regulamentação e valorização",
    desc: "Regulamentação da profissão e valorização do trabalho dos cuidadores remunerados, garantindo seus direitos e dignidade nos espaços de trabalho.",
  },
  {
    icon: "🌍",
    title: "Equidade e justiça",
    desc: "Promover equidade e justiça à categoria dos trabalhadores cuidadores, independentemente de raça, gênero, orientação sexual, religião ou qualquer outra característica.",
  },
  {
    icon: "💚",
    title: "Saúde e bem-estar",
    desc: "Oferecer orientação e informações estratégicas para que cuidadores remunerados protejam sua saúde e garantam o bem-estar no ambiente de trabalho.",
  },
  {
    icon: "📚",
    title: "Desenvolvimento profissional",
    desc: "Promover o desenvolvimento profissional dos cuidadores, garantindo a formação como ferramenta para uma prestação de serviços de excelência.",
  },
  {
    icon: "🗣️",
    title: "Participação e representação",
    desc: "Garantir a participação e representação dos cuidadores nas decisões que afetam seu trabalho e suas condições de vida.",
  },
  {
    icon: "🛡️",
    title: "Dignidade no trabalho",
    desc: "Respeitar a dignidade e os direitos dos cuidadores remunerados, garantindo um ambiente de trabalho seguro e saudável.",
  },
  {
    icon: "🔍",
    title: "Transparência e ética",
    desc: "Atuar com transparência e responsabilidade em todas as ações e decisões, garantindo gestão ética e eficiente dos recursos.",
  },
];

const destaques = [
  {
    icon: "🤝",
    title: "Representante da categoria",
    desc: "A ACIERJ é a voz coletiva dos cuidadores, representando a categoria perante ao poder público e à sociedade civil.",
  },
  {
    icon: "⚖️",
    title: "Regulamentação da profissão",
    desc: "Lutamos pelo reconhecimento legal da profissão de cuidador, com direitos trabalhistas garantidos e condições dignas de trabalho.",
  },
  {
    icon: "🌱",
    title: "Inclusão e equidade",
    desc: "Defendemos a inserção dos cuidadores nas políticas públicas de saúde (SUS) e assistência social (SUAS), com equidade e justiça.",
  },
  {
    icon: "💡",
    title: "Formação como direito",
    desc: "Reivindicamos qualificação gratuita e contínua como direito dos cuidadores, garantida e viabilizada pelo Estado.",
  },
];

const objetivos = [
  {
    icon: "🛡️",
    title: "Defesa e Garantia de Direitos",
    desc: "Atuar na defesa dos direitos dos cuidadores remunerados, garantindo condições de trabalho justas e dignas, conforme estabelecido na legislação.",
  },
  {
    icon: "📚",
    title: "Formação e Qualificação Profissional",
    desc: "Promover e incentivar a capacitação contínua dos cuidadores, para que estejam sempre atualizados e preparados para as demandas do cuidado.",
  },
  {
    icon: "🔗",
    title: "Articulação e Participação Social",
    desc: "Articular-se com o poder público e outros setores da sociedade civil para o desenvolvimento e implementação de políticas públicas de cuidado.",
  },
  {
    icon: "🌟",
    title: "Valorização do Trabalho de Cuidado",
    desc: "Atuamos pelo reconhecimento social do cuidado, combatendo o estigma de que se trata de uma atividade exclusivamente feminina e reafirmando-a como uma profissão essencial.",
  },
];

export default function Sobre() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Quem Somos"
        tagline="A Associação representante da categoria dos cuidadores no estado do Rio de Janeiro"
      />

      {/* ═══════════════ Introdução ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-white dark:bg-gray-900"
        aria-labelledby="intro-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-5">
                <h2
                  id="intro-titulo"
                  className="text-3xl md:text-4xl font-extrabold tracking-tight"
                >
                  A ACIERJ
                </h2>
                <div className="w-10 h-1 bg-brand-400 rounded-full" />
                <p className="text-gray-600 leading-relaxed">
                  A{" "}
                  <strong>
                    Associação de Cuidadores da Pessoa Idosa, da Saúde Mental e
                    Pessoa com Deficiência do Estado do Rio de Janeiro (ACIERJ)
                  </strong>{" "}
                  é uma entidade da sociedade civil comprometida com a defesa
                  dos direitos dos cuidadores remunerados.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Com 13 anos de trajetória ativista, a ACIERJ atua em defesa
                  dos cuidadores profissionais, lutando pelo reconhecimento
                  social e pela valorização daqueles que cuidam de pessoas
                  idosas, com deficiência ou em sofrimento psíquico.
                </p>
                <Link
                  href="/cuidadores"
                  className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
                >
                  Seja um associado
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden rounded-xl shadow-lg ring-4 ring-brand-400/20"
              >
                <Image
                  src={acierjForumImg}
                  alt="Reunião institucional da ACIERJ na UERJ — cuidadores mobilizados"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ Missão e Diretrizes ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        aria-labelledby="missao-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-brand-400/20">
                <Image
                  src={sobre2Img}
                  alt="Membros da ACIERJ em atividade coletiva"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover rounded-xl hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-brand-400 px-3.5 py-1.5 bg-brand-50 dark:bg-brand-700/30 rounded-full border border-brand-200 dark:border-brand-400/30">
                    Nossa missão
                  </span>
                  <h2
                    id="missao-titulo"
                    className="text-2xl md:text-3xl font-extrabold tracking-tight"
                  >
                    Regulamentação e Formação Profissional
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    A ACIERJ tem como objetivo institucional dedicar-se, através
                    de um trabalho militante e ativista, à{" "}
                    <strong>regulamentação da profissão</strong> de cuidadores e
                    à <strong>busca por formação</strong> — tanto para
                    profissionais já atuantes quanto para quem deseja ingressar
                    nesse segmento.
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-brand-400 px-3.5 py-1.5 bg-brand-50 dark:bg-brand-700/30 rounded-full border border-brand-200 dark:border-brand-400/30">
                    Nossas diretrizes
                  </span>
                  <ul className="space-y-3">
                    {[
                      {
                        icon: "📋",
                        text: "Direito à formação gratuita e garantida pelo Estado.",
                      },
                      {
                        icon: "🔄",
                        text: "Educação permanente como ferramenta principal para uma formação contínua e de qualidade — que empodere os cuidadores como sujeitos de direito.",
                      },
                    ].map(({ icon, text }) => (
                      <li
                        key={text}
                        className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed"
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5">
                          {icon}
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ Destaques institucionais ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-white dark:bg-gray-900"
        aria-labelledby="destaques-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Destaques institucionais"
            subtitle="Quatro pilares que resumem a atuação da ACIERJ na defesa dos cuidadores e na construção de um sistema de cuidado mais justo e inclusivo."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destaques.map((item, i) => (
              <Card key={item.title} {...item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Nossos objetivos ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        aria-labelledby="objetivos-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Nossos objetivos"
            subtitle="As ações da ACIERJ são orientadas por objetivos concretos que traduzem seu compromisso com a categoria e com a sociedade."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {objetivos.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex gap-5 bg-white dark:bg-gray-800 p-7 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-brand-200 dark:hover:border-brand-400/40 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-700/30 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed m-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Princípios ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-white dark:bg-gray-900"
        aria-labelledby="principios-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Nossos princípios"
            subtitle="Promover equidade e justiça a categoria dos trabalhadores cuidadores, independentemente de raça, gênero, orientação sexual, religião ou qualquer outra característica."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principios.map((item, i) => (
              <Card key={item.title} {...item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Nossa luta ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        aria-labelledby="luta-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Nossa luta"
            subtitle="O trabalho do cuidado sempre existiu, mas foi mantido na invisibilidade. Historicamente realizado por mulheres negras, pobres e periféricas, o cuidado é desvalorizado, não regulamentado e atravessado por múltiplas opressões."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lutas.map((item, i) => (
              <Card key={item.title} {...item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Mobilização ═══════════════ */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="mobilizacao-titulo"
      >
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src={mobilizacaoImg}
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 py-24 md:py-32 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase text-accent mb-6 px-4 py-2 bg-accent/10 border border-accent/25 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Mobilização
            </span>
            <h2
              id="mobilizacao-titulo"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Somos cuidadores.
              <br />
              <span className="text-accent">Não aceitamos o veto!</span>
            </h2>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Em defesa da regulamentação da profissão, a ACIERJ mobiliza
              cuidadores de todo o estado do Rio de Janeiro. A luta pela
              visibilidade e reconhecimento profissional é coletiva.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/cuidadores"
                className="inline-block bg-accent text-brand-800 px-8 py-4 rounded-xl font-bold text-sm no-underline shadow-lg shadow-accent/20 hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-200 hover:no-underline"
              >
                Faça parte do movimento
              </Link>
              <Link
                href="/projetos"
                className="inline-block bg-transparent text-white px-8 py-4 border-2 border-white/40 rounded-xl font-bold text-sm no-underline hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 transition-all duration-200 hover:no-underline"
              >
                Ver nossas ações
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ Formação e capacitação ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-white dark:bg-gray-900"
        aria-labelledby="formacao-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-brand-400/20">
                <Image
                  src={acierj6Img}
                  alt="Atividade de capacitação profissional da ACIERJ"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover rounded-xl hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-5">
                <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-brand-400 px-3.5 py-1.5 bg-brand-50 dark:bg-brand-700/30 rounded-full border border-brand-200 dark:border-brand-400/30">
                  Formação profissional
                </span>
                <h2
                  id="formacao-titulo"
                  className="text-2xl md:text-3xl font-extrabold tracking-tight"
                >
                  Desenvolvimento Profissional em Saúde Mental
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Em 2025, a ACIERJ, em parceria com a Fiocruz, capacitou mais
                  de 100 profissionais da área do cuidado. A formação foi
                  realizada em diversos territórios, na promoção de um cuidado
                  humanizado e ético. Reafirmando a formação como um direito.
                </p>
                <ul className="space-y-2">
                  {[
                    "Cuidado humanizado e ético em saúde mental",
                    "Direitos das pessoas com transtorno mental",
                    "Luta antimanicomial e Reforma Psiquiátrica",
                    "Práticas de escuta ativa e acolhimento",
                    "Autocuidado e saúde do cuidador",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/projetos"
                  className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
                >
                  Conheça nossos projetos
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ Parceiros e Redes ═══════════════ */}
      <section
        id="parceiros"
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        aria-labelledby="parceiros-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Parceiros e Redes"
            subtitle="Trabalhamos em rede para ampliar o impacto das nossas ações e fortalecer a causa dos cuidadores."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏢",
                title: "Instituições Parceiras",
                desc: "ONGs, universidades e entidades com as quais colaboramos para ampliar nossa atuação — como UFF, IFRJ e Fiocruz.",
              },
              {
                icon: "✊",
                title: "Coletivos",
                desc: "Movimentos sociais e coletivos aliados na luta pelos direitos dos cuidadores e das populações assistidas.",
              },
              {
                icon: "🤝",
                title: "Como Cooperar",
                desc: "Quer se envolver com a ACIERJ? Entre em contato para conhecer as formas de parceria e colaboração.",
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
        </div>
      </section>

      {/* ═══════════════ CTA Compromisso ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 relative overflow-hidden"
        aria-labelledby="compromisso-titulo"
      >
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-extrabold text-white/30 italic mb-4 tracking-tight">
              "Nada de nós sem nós."
            </blockquote>
            <h2
              id="compromisso-titulo"
              className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight"
            >
              Nosso compromisso
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              A ACIERJ luta por um sistema de cuidado justo, humanizado e
              público. Defendemos a construção coletiva das políticas que afetam
              nossa categoria — cuidadores, pessoas idosas, com deficiência e em
              sofrimento mental. A luta continua.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/cuidadores"
                className="inline-block bg-white text-brand-400 px-8 py-4 rounded-lg font-bold text-sm no-underline shadow-lg shadow-black/20 hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 hover:no-underline"
              >
                Associe-se à ACIERJ
              </Link>
              <Link
                href="/contato"
                className="inline-block bg-transparent text-white px-8 py-4 border-2 border-white/40 rounded-lg font-bold text-sm no-underline hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 transition-all duration-200 hover:no-underline"
              >
                Entre em contato
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
