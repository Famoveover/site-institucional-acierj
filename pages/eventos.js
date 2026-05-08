import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

export default function Eventos() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Eventos"
        tagline="Participe de nossas palestras, seminários, encontros e mobilizações sobre cuidado, direitos sociais e políticas públicas."
      />

      {/* ═══════════════ Evento em Destaque ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Eventos em Destaque"
            subtitle="Conheça os principais eventos e participações da ACIERJ em 2026."
          />

          {/* Card do evento principal */}
          <FadeIn>
            <motion.article
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                {/* Imagem */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-auto bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500 opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/60 select-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                        Maio 2026
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 leading-snug">
                        2º SUMMIT de Integração de Cuidados de Saúde nos Países de Língua Portuguesa
                      </h3>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      A ACIERJ participará do 2º SUMMIT, evento que reunirá especialistas, gestores e instituições para discutir sistemas de saúde mais integrados, eficientes e centrados na pessoa.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Ana Gilda dos Santos</strong> será palestrante no evento, promovendo troca de experiências, aprendizado e articulação entre profissionais de diferentes países e áreas da saúde.
                    </p>
                  </div>

                  {/* Informações do evento */}
                  <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-xl flex-shrink-0">📅</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Data</p>
                        <p className="font-semibold text-gray-900 dark:text-white">13, 14 e 15 de maio de 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-xl flex-shrink-0">📍</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Local</p>
                        <p className="font-semibold text-gray-900 dark:text-white">Fundação Cesgranrio</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Rua Santa Alexandrina, 1011 — Rio Comprido, Rio de Janeiro</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-xl flex-shrink-0">🎟</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Evento gratuito</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 md:pt-0 border-t border-gray-100 dark:border-gray-700 bg-gradient-to-r from-brand-50 to-brand-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
                <a
                  href="https://tickets.fis.org.br/summit-ics-plp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 font-bold text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                >
                  <span>Garantir inscrição</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.article>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ Próximos Eventos ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Próximos Eventos"
            subtitle="Novos eventos e oportunidades serão divulgados em breve."
          />

          <FadeIn className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 md:p-16 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-brand-300 dark:text-brand-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                Novos eventos e seminários estão sendo preparados.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-500">
                Fique atento às nossas notícias e redes sociais para não perder os próximos encontros da ACIERJ!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ CTA Newsletter ═══════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-brand-600 to-brand-500 dark:from-brand-700 dark:to-brand-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Receba novidades sobre nossos eventos
            </h2>
            <p className="text-lg text-brand-50 mb-8 max-w-2xl mx-auto">
              Inscreva-se para receber informações sobre palestras, encontros e mobilizações da ACIERJ.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-brand-600 px-8 py-3.5 rounded-lg font-bold text-base shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 transition-all duration-200 hover:-translate-y-0.5 no-underline hover:no-underline"
            >
              Inscrever-se
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
