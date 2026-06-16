import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import FadeIn from "../components/FadeIn";

import evento1Img from "../imagens/evento1.jpeg";
import evento2Img from "../imagens/evento2.jpeg";
import plenariaCuidadoresImg from "../imagens/plenaria-unificada-cuidadores.jpeg";
import cuidadoIntoleranciaImg from "../imagens/cuidado-intolerancia-religiosa.jpeg";
import comiteCuidadoImg from "../imagens/comite-cuidado-2.jpeg";

export default function Eventos() {
  return (
    <PageLayout>
      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        crumb="ACIERJ"
        title="Eventos"
        tagline="Participe de nossas palestras, seminários, encontros e mobilizações sobre cuidado, direitos sociais e políticas públicas."
      />

      {/* ═══════════════ Próximo Evento em Destaque ═══════════════ */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Próximo Evento"
            subtitle="Acompanhe o próximo evento em destaque da ACIERJ."
          />

          {/* Card do Próximo Evento - Layout Full Width */}
          <FadeIn>
            <motion.article
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                {/* Imagem */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-auto bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden rounded-l-2xl">
                  <Image
                    src={plenariaCuidadoresImg}
                    alt="Plenária Unificada dos Cuidadores Parentais e Remunerados — A Nossa Luta é Unificada por Direitos"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Conteúdo */}
                <div className="p-8 md:p-10 flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                        Maio 2026
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">
                        Plenária Unificada dos Cuidadores Parentais e Remunerados
                      </h3>
                      <p className="text-base text-brand-600 dark:text-brand-400 font-semibold italic">
                        "A Nossa Luta é Unificada por Direitos"
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Evento organizado pela ACIERJ com participação de cuidadores parentais, remunerados e representantes de associações de cuidado para debater direitos e políticas públicas.
                    </p>
                  </div>

                  {/* Informações do evento */}
                  <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-xl flex-shrink-0">📅</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Data e Horário</p>
                        <p className="font-semibold text-gray-900 dark:text-white">29 de maio de 2026 (quinta) — 9h às 12h</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-xl flex-shrink-0">📍</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Local</p>
                        <p className="font-semibold text-gray-900 dark:text-white">Nise da Silveira / Auditório Cetape</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Rua Ramiro Magalhães, 521 — Engenho de Dentro, RJ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 md:pt-0 border-t border-gray-100 dark:border-gray-700 bg-gradient-to-r from-brand-50 to-brand-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 font-bold text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                >
                  <span>Mais informações</span>
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
                </Link>
              </div>
            </motion.article>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ Agenda de Eventos ═══════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-brand-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            title="Agenda"
            subtitle="Conheça os demais eventos e atividades da ACIERJ em 2026."
          />

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card: Cuidado e Intolerância Religiosa */}
            <FadeIn>
              <motion.article
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40 flex flex-col h-full"
              >
                {/* Imagem */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden">
                  <Image
                    src={cuidadoIntoleranciaImg}
                    alt="Cuidado e Intolerância Religiosa — Respeito, Direitos e Cuidado em uma Sociedade Plural"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                        Maio 2026
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">
                        Cuidado e Intolerância Religiosa
                      </h3>
                      <p className="text-sm text-brand-600 dark:text-brand-400 font-semibold italic">
                        Respeito, Direitos e Cuidado em uma Sociedade Plural
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      A ACIERJ convida todos e todas para uma conversa sobre "Cuidado e Intolerância Religiosa". O ato de cuidar vai além do físico: ele exige respeito ao ambiente de trabalho, à história e à fé da pessoa que cuidamos. Preservar e respeitar a espiritualidade de cada pessoa é um dever ético e um pilar fundamental para a saúde física, o equilíbrio emocional, a recuperação e promoção de saúde.
                    </p>

                    {/* Convidados */}
                    <div className="mt-4 space-y-2 bg-brand-50 dark:bg-brand-900/20 p-4 rounded-lg text-sm">
                      <p className="font-bold text-gray-900 dark:text-white">Convidados:</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs ml-2">• Reimont — Dr. em história, teólogo e franciscano. Deputado Federal PT-RJ</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs ml-2">• Pastor Henrique Vieira — Pastor, Professor e Deputado Federal PSOL-RJ</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs ml-2">• Luiz Carlos da Silva — Babalorixá, Professor de Biologia</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs ml-2">• Mediadora: Ana Gilda Soares dos Santos — Assistente Social e Presidente da ACIERJ</p>
                    </div>
                  </div>

                  {/* Informações do evento */}
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📅</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Data e Horário</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">25 de maio de 2026 (segunda) — 20h</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📱</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Formato</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Live pelo Instagram</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">🏢</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Organização</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">ACIERJ</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="https://www.instagram.com/acierjcuidadores"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                      <span>Acompanhar no Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            </FadeIn>

            {/* Card: Semana da Luta Antimanicomial */}
            <FadeIn>
              <motion.article
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40 flex flex-col h-full"
              >
                {/* Imagem */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden">
                  <Image
                    src={evento2Img}
                    alt="Semana da Luta Antimanicomial — Política Pública de Verdade"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                        Maio 2026
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-3 leading-snug">
                        Semana da Luta Antimanicomial
                      </h3>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      Ao longo da semana teremos palestras, debates e atividades construídas por estudantes, trabalhadores, usuários e movimentos sociais em defesa de uma saúde mental pública, antimanicomial, anticapacitista, antirracista e anticapitalista.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      Mais do que uma programação acadêmica, é um espaço de encontro, troca e fortalecimento da luta por cuidado em liberdade e pela defesa do SUS e da RAPS.
                    </p>
                  </div>

                  {/* Informações do evento */}
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📅</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Data</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">12 a 16 de maio de 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📍</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Local</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Diferentes espaços do Rio de Janeiro</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="https://www.instagram.com/p/DX_yjY6FmP3/?igsh=MTQ5azh0azdkZXZjMA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                      <span>Saiba mais</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            </FadeIn>

            {/* Card: ACIERJ na Reunião do Comitê Nacional da Política de Cuidado */}
            <FadeIn>
              <motion.article
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40 flex flex-col h-full"
              >
                {/* Imagem */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden">
                  <Image
                    src={comiteCuidadoImg}
                    alt="ACIERJ na Reunião do Comitê Nacional da Política de Cuidado"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                        Maio 2026
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-3 leading-snug">
                        ACIERJ na Reunião do Comitê Nacional da Política de Cuidado
                      </h3>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      A ACIERJ marcou presença nos dias 28 e 29 de maio na Reunião do Comitê Nacional da Política de Cuidado, reafirmando seu compromisso com a construção de políticas públicas que reconheçam e valorizem o trabalho dos cuidadores no Brasil.
                    </p>
                  </div>

                  {/* Informações do evento */}
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📅</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Data</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">28 e 29 de maio de 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📍</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Formato</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Participação institucional / Presencial</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">🏢</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Organização</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">ACIERJ</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href="/contato"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                      <span>Mais informações</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            </FadeIn>

            {/* Card: 2º SUMMIT de Integração de Cuidados de Saúde */}
            <FadeIn>
              <motion.article
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40 flex flex-col h-full"
              >
                {/* Imagem */}
                <div className="relative aspect-video bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden">
                  <Image
                    src={evento1Img}
                    alt="Ana Gilda dos Santos - Palestrante do 2º SUMMIT de Integração de Cuidados de Saúde"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold rounded-full tracking-wider uppercase mb-3">
                        Maio 2026
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-3 leading-snug">
                        2º SUMMIT de Integração de Cuidados de Saúde
                      </h3>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      A ACIERJ participará do 2º SUMMIT, evento que reunirá especialistas, gestores e instituições para discutir sistemas de saúde mais integrados, eficientes e centrados na pessoa.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      <strong>Ana Gilda dos Santos</strong> será palestrante no evento, promovendo troca de experiências, aprendizado e articulação entre profissionais de diferentes países e áreas da saúde.
                    </p>
                  </div>

                  {/* Informações do evento */}
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📅</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Data</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">13, 14 e 15 de maio de 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">📍</span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Local</p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Fundação Cesgranrio</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Rua Santa Alexandrina, 1011 — Rio Comprido, Rio de Janeiro</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">🎟</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">Evento gratuito</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href="https://tickets.fis.org.br/summit-ics-plp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                      <span>Garantir inscrição</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          </div>
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
