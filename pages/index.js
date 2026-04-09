import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

import quemSomosImg from "../imagens/foto da acierj1.jpg";
import projeto1Img from "../imagens/acierj3.jpg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/acierj5.jpg";

/* ── Dados reutilizáveis ── */
const areas = [
  {
    icon: "👥",
    title: "Direitos dos Cuidadores",
    desc: "Regulamentação profissional e reconhecimento social.",
  },
  {
    icon: "🧓",
    title: "Pessoa Idosa",
    desc: "Defesa dos direitos e qualidade de vida.",
  },
  {
    icon: (
      <Image
        src="/acessibilidade.png"
        alt=""
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
        aria-hidden="true"
      />
    ),
    title: "Pessoa com Deficiência",
    desc: "Inclusão e acessibilidade.",
  },
  {
    icon: "🧠",
    title: "Saúde Mental",
    desc: "Luta antimanicomial e defesa da saúde mental.",
  },
];

const beneficios = [
  {
    icon: "⚖️",
    title: "Suporte jurídico",
    desc: "Orientação legal para questões trabalhistas e direitos da categoria.",
  },
  {
    icon: "📋",
    title: "Orientação profissional",
    desc: "Capacitação e direcionamento para o exercício da profissão.",
  },
  {
    icon: "🤝",
    title: "Rede de apoio",
    desc: "Parcerias e articulação com políticas públicas e movimentos sociais.",
  },
  {
    icon: "💚",
    title: "Escuta terapêutica",
    desc: "Roda de escuta com psicologia e serviço social para os cuidadores.",
  },
];

const projetos = [
  {
    img: projeto1Img,
    alt: "Encontro de cuidadores promovido pela ACIERJ",
    title: "Encontros de cuidadores",
    desc: "Rodas de conversa e troca de experiências entre cuidadores de todo o estado.",
  },
  {
    img: projeto2Img,
    alt: "Ação comunitária da ACIERJ",
    title: "Ações comunitárias",
    desc: "Atividades em comunidades para orientação e apoio às famílias que cuidam.",
  },
  {
    img: projeto3Img,
    alt: "Capacitação profissional ACIERJ",
    title: "Capacitação profissional",
    desc: "Cursos e formações para instrumentalizar o trabalho dos cuidadores.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ═══════════════ Hero ═══════════════ */}
        <Hero />

        {/* ═══════════════ Quem somos ═══════════════ */}
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              title="Quem somos"
              subtitle="Conheça a história e a missão do nosso coletivo."
            />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="space-y-5">
                  <p className="text-gray-600 leading-relaxed">
                    Somos um coletivo de trabalhadores e trabalhadoras do
                    cuidado que há mais de 13 anos luta pela regulamentação da
                    profissão e pela inclusão dos cuidadores nas políticas
                    públicas de saúde e assistência social (SUS e SUAS).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    A ACIERJ é um movimento social organizado que une cuidadores
                    profissionais, familiares e voluntários na defesa dos
                    direitos da categoria e das pessoas em situação de cuidado.
                  </p>
                  <Link
                    href="/sobre"
                    className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
                  >
                    Saiba mais sobre a associação
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.15}>
                <div className="overflow-hidden rounded-2xl shadow-xl ring-4 ring-brand-400/20">
                  <Image
                    src={quemSomosImg}
                    alt="Reunião do coletivo ACIERJ"
                    width={480}
                    height={360}
                    className="w-full h-auto hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══════════════ Nossa atuação ═══════════════ */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <SectionHeader
              title="Nossa atuação"
              subtitle="Atuamos na defesa dos direitos dos cuidadores e das populações em situação de cuidado, dialogando com diversos movimentos sociais."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((item, i) => (
                <Card key={item.title} {...item} delay={i * 0.08} />
              ))}
            </div>
            <FadeIn className="text-center mt-10">
              <Link
                href="/areas"
                className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
              >
                Conheça nossas áreas de atuação
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════ Benefícios ═══════════════ */}
        <section className="py-14 sm:py-20 md:py-28 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <SectionHeader
              title="Benefícios da associação"
              subtitle="Fortalecer os cuidadores é nossa prioridade. Veja o que a ACIERJ oferece aos associados."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((item, i) => (
                <Card key={item.title} {...item} delay={i * 0.08} />
              ))}
            </div>
            <FadeIn className="text-center mt-10">
              <Link
                href="/cuidadores"
                className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
              >
                Veja como participar
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════ Projetos ═══════════════ */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <SectionHeader
              title="Projetos e ações"
              subtitle="Conheça algumas das iniciativas da ACIERJ em prol dos cuidadores e das pessoas em situação de cuidado."
            />
            <div className="grid md:grid-cols-3 gap-7">
              {projetos.map(({ img, alt, title, desc }, i) => (
                <FadeIn key={title} delay={i * 0.1}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-gray-200 dark:hover:border-gray-600 group"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={img}
                        alt={alt}
                        width={400}
                        height={250}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 tracking-tight">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed m-0">
                        {desc}
                      </p>
                    </div>
                  </motion.article>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="text-center mt-10">
              <Link
                href="/projetos"
                className="inline-block bg-brand-400 text-white px-7 py-3.5 rounded-lg font-bold text-sm no-underline shadow-md shadow-brand-400/30 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:no-underline"
              >
                Ver todos os projetos
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════ CTA Final ═══════════════ */}
        <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
            <FadeIn className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Junte-se ao movimento
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                A luta pela valorização do cuidado precisa de organização
                coletiva. Faça parte da ACIERJ e fortaleça a categoria dos
                cuidadores no estado do Rio de Janeiro.
              </p>
              <Link
                href="/cuidadores"
                className="inline-block bg-white text-brand-400 px-8 py-4 rounded-lg font-bold text-sm no-underline shadow-lg shadow-black/20 hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 hover:no-underline"
              >
                Preencher ficha de inscrição
              </Link>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
