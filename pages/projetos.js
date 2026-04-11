import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

// Encontros de Cuidadores
import encontroCuidadorasImg from "../imagens/encontrocuidadoras.jpeg";
import encontroCuidadoras2Img from "../imagens/encontrocuidadoras2.jpeg";
import encontroCuidadoras3Img from "../imagens/encontrocuidadoras3.jpeg";

// Ações Comunitárias
import forumImg from "../imagens/forum.jpeg";

// Formação
import cursoImg from "../imagens/curso.jpeg";
import turma1Img from "../imagens/turma1.jpeg";
import turma2Img from "../imagens/turma2.jpeg";
import turma3Img from "../imagens/turma3.jpeg";

const projetos = [
  {
    tag: "Mobilização social",
    title: "Encontros de Cuidadores",
    desc: "Nosso encontro anual é um espaço de troca, acolhimento e mobilização. Reunimos trabalhadores cuidadores e profissionais de todo o estado do Rio de Janeiro para compartilhar experiências e fortalecer a categoria.",
    mainImg: encontroCuidadorasImg,
    mainAlt: "Encontro anual de cuidadores promovido pela ACIERJ",
    gallery: [
      {
        src: encontroCuidadoras2Img,
        alt: "Cuidadoras reunidas no encontro anual da ACIERJ",
      },
      {
        src: encontroCuidadoras3Img,
        alt: "Momento de integração no encontro de cuidadores da ACIERJ",
      },
    ],
  },
  {
    tag: "Ação territorial",
    title: "Ações Comunitárias",
    desc: "Presença ativa em eventos estratégicos sobre a regulamentação da profissão e a valorização de quem cuida, com representação em diferentes territórios do estado do Rio de Janeiro.",
    mainImg: forumImg,
    mainAlt:
      "Participação da ACIERJ em fórum sobre regulamentação profissional",
    gallery: [],
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

          <div className="flex flex-col gap-20">
            {projetos.map(
              ({ tag, title, desc, mainImg, mainAlt, gallery }, i) => (
                <FadeIn key={title} delay={i * 0.1}>
                  <article className="flex flex-col gap-6">
                    {/* Cabeçalho do projeto */}
                    <div>
                      <span className="px-3 py-1 bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase">
                        {tag}
                      </span>
                      <h3 className="mt-3 text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                        {desc}
                      </p>
                    </div>

                    {/* Imagem principal */}
                    <div className="w-full overflow-hidden rounded-xl shadow-md">
                      <Image
                        src={mainImg}
                        alt={mainAlt}
                        width={1200}
                        height={600}
                        className="w-full h-64 md:h-96 object-cover"
                        priority={i === 0}
                      />
                    </div>

                    {/* Galeria secundária */}
                    {gallery.length > 0 && (
                      <div
                        className={`grid gap-4 ${
                          gallery.length === 1
                            ? "grid-cols-1 max-w-lg"
                            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        }`}
                      >
                        {gallery.map(({ src, alt }, j) => (
                          <motion.div
                            key={j}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden rounded-lg shadow-sm"
                          >
                            <Image
                              src={src}
                              alt={alt}
                              width={400}
                              height={280}
                              className="w-full h-48 md:h-52 object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </article>
                </FadeIn>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════ Destaque: Desenvolvimento Profissional em Saúde Mental ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-3">
              <span className="px-3 py-1 bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase">
                Formação
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight text-gray-900 dark:text-white">
              Desenvolvimento Profissional em Saúde Mental
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
              Em 2025, a ACIERJ, em parceria com a Fiocruz, capacitou mais de
              100 profissionais da área do cuidado em diversos territórios,
              promovendo um cuidado humanizado e ético. Reafirmando a formação
              como um direito.
            </p>
          </FadeIn>

          {/* Imagem principal */}
          <FadeIn>
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg mb-6">
              <Image
                src={cursoImg}
                alt="Curso de desenvolvimento profissional em saúde mental ACIERJ Fiocruz"
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
                priority
              />
            </div>
          </FadeIn>

          {/* Galeria de turmas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              {
                src: turma1Img,
                alt: "Turma 1 do curso de desenvolvimento profissional em saúde mental",
              },
              {
                src: turma2Img,
                alt: "Turma 2 do curso de desenvolvimento profissional em saúde mental",
              },
              {
                src: turma3Img,
                alt: "Turma 3 do curso de desenvolvimento profissional em saúde mental",
              },
            ].map(({ src, alt }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={280}
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Legenda */}
          <FadeIn>
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center italic">
              Turmas formadas no curso de desenvolvimento profissional em saúde
              mental (ACIERJ + Fiocruz)
            </p>
          </FadeIn>
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
