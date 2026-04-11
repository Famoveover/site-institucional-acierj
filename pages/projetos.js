import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

import projeto1Img from "../imagens/acierj diretoria.jpeg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/aniversario-acierj2.jpg";

const projetos = [
  {
    img: projeto1Img,
    alt: "Desenvolvimento profissional em saúde mental promovido pela ACIERJ",
    title: "Desenvolvimento Profissional em Saúde Mental",
    desc: "Em 2025, a ACIERJ, em parceria com a Fiocruz, capacitou mais de 100 profissionais da área do cuidado. A formação foi realizada em diversos territórios, na promoção de um cuidado humanizado e ético. Reafirmando  a formação como um direito.",
    tag: "Formação",
  },
  {
    img: projeto2Img,
    alt: "Ação comunitária da ACIERJ",
    title: "Ações comunitárias",
    desc: "Presença ativa em diversos  eventos estratégicos sobre a regulamentação da profissão e a valorização de quem cuida.",
    tag: "Ação territorial",
  },
  {
    img: projeto3Img,
    alt: "Encontro anual de cuidadores ACIERJ",
    title: "Encontros de cuidadores",
    desc: "Nosso encontro anual é um espaço de troca, acolhimento e mobilização. Reunimos trabalhadores cuidadores e demais profissionais de todo o estado do Rio de Janeiro para compartilhar experiências e fortalecer a formação da categoria.",
    tag: "Mobilização social",
  },
];

export default function Projetos() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Projetos e Ações"
        tagline="Conheça as iniciativas, campanhas, eventos e mobilizações promovidas pela ACIERJ."
      />

      {/* ═══════════════ Projetos em destaque ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Iniciativas em destaque"
            subtitle="Projetos que concretizam nossa missão de valorizar o cuidado e fortalecer a categoria dos cuidadores no estado do Rio de Janeiro."
          />
          <div className="grid md:grid-cols-3 gap-7">
            {projetos.map(({ img, alt, title, desc, tag }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-gray-200 dark:hover:border-gray-600 group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={alt}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-brand-400/90 text-white text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed m-0 flex-1">
                      {desc}
                    </p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 relative overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Participe das nossas ações
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Faça parte do movimento e contribua para fortalecer a categoria
              dos cuidadores no estado do Rio de Janeiro.
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
