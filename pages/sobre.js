import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FadeIn from "../components/FadeIn";

import acierj1Img from "../imagens/foto da acierj1.jpg";
import acierj6Img from "../imagens/acierj6.jpg";
import acierj7Img from "../imagens/acierj7.jpg";

const lutas = [
  {
    icon: "✊🏾",
    title: "Racismo",
    desc: "A maioria dos cuidadores é negra. Enfrentamos o racismo estrutural que precariza o trabalho e exclui a categoria das políticas públicas.",
  },
  {
    icon: "👩",
    title: "Machismo",
    desc: "O cuidado é visto como extensão \"natural\" do trabalho feminino. Lutamos pela valorização de um trabalho historicamente invisibilizado.",
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

const parceiros = [
  {
    icon: "🎓",
    sigla: "UFF",
    nome: "Universidade Federal Fluminense",
    desc: "Parceria acadêmica que contribui com pesquisa, extensão e formação profissional dos cuidadores.",
  },
  {
    icon: "🏫",
    sigla: "IFRJ",
    nome: "Instituto Federal do Rio de Janeiro",
    desc: "Colaboração na oferta de cursos técnicos e na qualificação profissional da categoria dos cuidadores.",
  },
  {
    icon: "🔬",
    sigla: "Fiocruz",
    nome: "Fundação Oswaldo Cruz",
    desc: "Suporte técnico-científico para iniciativas em saúde pública, saúde mental e cuidado humanizado.",
  },
];

export default function Sobre() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Quem Somos"
        tagline="A luta dos cuidadores invisibilizados"
      />

      {/* ═══════════════ Introdução ═══════════════ */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="intro-titulo">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-5">
                <h2
                  id="intro-titulo"
                  className="text-3xl md:text-4xl font-extrabold tracking-tight"
                >
                  A ACIERJ e sua luta
                </h2>
                <div className="w-10 h-1 bg-brand-400 rounded-full" />
                <p className="text-gray-600 leading-relaxed">
                  A Associação de Cuidadores da Pessoa Idosa, Saúde Mental e com
                  Deficiência do Estado do Rio de Janeiro (ACIERJ) é um coletivo
                  de trabalhadores do cuidado que há mais de 13 anos atua na
                  defesa da regulamentação da profissão e na inclusão dos
                  cuidadores nas políticas públicas de saúde e assistência
                  social — SUS e SUAS.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Somos um movimento social organizado que une cuidadores
                  profissionais, familiares e voluntários na luta pelo
                  reconhecimento da importância social do cuidado e pela
                  valorização das pessoas que dedicam suas vidas a cuidar de
                  idosos, pessoas com deficiência e em sofrimento mental.
                </p>
                <ul className="space-y-2.5">
                  {[
                    { icon: "🤝", text: "Defesa coletiva dos direitos da categoria" },
                    { icon: "⚖️", text: "Regulamentação e reconhecimento profissional" },
                    { icon: "🌱", text: "Inclusão e equidade nas políticas públicas" },
                    { icon: "💡", text: "Formação e instrumentalização dos cuidadores" },
                  ].map(({ icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="text-lg flex-shrink-0">{icon}</span>
                      {text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cuidadores"
                  className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
                >
                  Seja um associado
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-brand-400/20">
                <Image
                  src={acierj1Img}
                  alt="Coletivo ACIERJ reunido — cuidadores organizados em movimento social"
                  width={700}
                  height={450}
                  className="w-full h-auto hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ Nossa luta ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50"
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

      {/* ═══════════════ Formação e capacitação ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-white"
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
                  className="w-full h-auto hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="space-y-5">
                <span className="inline-block text-xs font-bold tracking-[3px] uppercase text-brand-400 px-3.5 py-1.5 bg-brand-50 rounded-full border border-brand-200">
                  Formação profissional
                </span>
                <h2
                  id="formacao-titulo"
                  className="text-2xl md:text-3xl font-extrabold tracking-tight"
                >
                  Curso de desenvolvimento para cuidadores de saúde mental
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A ACIERJ organizou um curso de desenvolvimento profissional
                  voltado para cuidadores que atuam com pessoas em sofrimento
                  mental. O projeto foi construído em parceria com instituições
                  de ensino e pesquisa, garantindo formação qualificada e
                  alinhada à luta antimanicomial.
                </p>
                <ul className="space-y-2">
                  {[
                    "Cuidado humanizado e ético em saúde mental",
                    "Direitos das pessoas com transtorno mental",
                    "Luta antimanicomial e Reforma Psiquiátrica",
                    "Práticas de escuta ativa e acolhimento",
                    "Autocuidado e saúde do cuidador",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cursos"
                  className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
                >
                  Conheça nossos cursos
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════ Parcerias ═══════════════ */}
      <section
        className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50"
        aria-labelledby="parceiros-titulo"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Parcerias institucionais"
            subtitle="A ACIERJ constrói pontes com universidades e centros de pesquisa para fortalecer a formação dos cuidadores e qualificar as políticas públicas voltadas à categoria."
          />
          <div className="grid sm:grid-cols-3 gap-7">
            {parceiros.map(({ icon, sigla, nome, desc }, i) => (
              <FadeIn key={sigla} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:border-brand-200 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-3xl mb-4">
                    {icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                    {sigla}
                  </h3>
                  <p className="text-xs font-semibold text-brand-400 uppercase tracking-wide mb-3">
                    {nome}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed m-0">
                    {desc}
                  </p>
                </motion.div>
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
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
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
              público. Defendemos a construção coletiva das políticas que
              afetam nossa categoria — cuidadores, pessoas idosas, com
              deficiência e em sofrimento mental. A luta continua.
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

