import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

import projeto1Img from "../imagens/acierj3.jpg";
import projeto2Img from "../imagens/acierj4.jpg";
import projeto3Img from "../imagens/acierj5.jpg";

const projetos = [
  {
    img: projeto1Img,
    alt: "Encontro de cuidadores promovido pela ACIERJ",
    title: "Encontros de cuidadores",
    desc: "Rodas de conversa e troca de experiências entre cuidadores de todo o estado. Espaço de acolhimento, formação e mobilização coletiva.",
    tag: "Mobilização social",
  },
  {
    img: projeto2Img,
    alt: "Ação comunitária da ACIERJ",
    title: "Ações comunitárias",
    desc: "Atividades em comunidades para orientação e apoio às famílias que cuidam de idosos, pessoas com deficiência e em sofrimento mental.",
    tag: "Ação territorial",
  },
  {
    img: projeto3Img,
    alt: "Capacitação profissional ACIERJ",
    title: "Capacitação profissional",
    desc: "Cursos e formações para instrumentalizar o trabalho dos cuidadores, promovendo cuidado humanizado e qualificado.",
    tag: "Formação",
  },
];

export default function Projetos() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Projetos e Ações"
        tagline="Conheça as iniciativas, campanhas, eventos e mobilizações que estão transformando vidas e fortalecendo comunidades."
      />

      {/* ═══════════════ Projetos em destaque ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-gray-200 group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={img}
                      alt={alt}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-brand-400/90 text-white text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed m-0 flex-1">{desc}</p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <FadeIn className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Participe das nossas ações
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Faça parte do movimento e contribua para fortalecer a categoria dos
              cuidadores no estado do Rio de Janeiro.
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
