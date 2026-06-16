import { useState } from "react";
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
import comiteCuidadoImg from "../imagens/comite-cuidado-1.jpeg";
import congressoAbrasmeImg from "../imagens/congresso-abrasme-1.jpeg";
import cuidadoSemPreconceito from "../imagens/Cuidado sem Preconceito.jpeg";

export default function Eventos() {
  const eventosData = [
    {
      id: "plenaria",
      data: "2026-06-18",
      tipo: "featured",
      titulo: "Cuidado sem Preconceito: Desafios na Proteção à Velhice LGBT+",
      subtitulo:
        "Junho Violeta – Mês de campanha e combate à violência contra pessoa idosa",
      descricao:
        "A ACIERJ convida para uma live sobre Cuidado sem preconceito como direito de todas as velhices. Neste Junho Violeta e Mês do Orgulho LGBT+, debateremos cuidado, inclusão, respeito e o direito de envelhecer com dignidade. A população 60+ LGBT+ enfrenta desafios ainda maiores com a invisibilidade e a falta de políticas públicas específicas de amparo.",
      badge: "Junho 2026",
      imagem: cuidadoSemPreconceito,
      imagemAlt:
        "Cuidado sem Preconceito: Desafios na Proteção à Velhice LGBT+",
      dataFormatada: "18 de junho de 2026 (quinta) — 19h",
      local: "Live pelo Instagram",
      localDetalhes: "@acierjcuidadores",
      convidados: [
        "Diego Félix Miguel – Professor, pesquisador, Doutorando em Saúde Pública e Especialista em Gerontologia pela SBGG",
        "Glauco Vital – Coordenador do Centro de Cidadania LGBT/ Zona Oeste - RJ",
        "Dora Cudignola – Membra Associada EternamenteSou. / SP",
        "Cássia Gouveia – Assistente social e Vice-Presidente da ACIERJ (Mediadora)",
      ],
      cta: "Acompanhar no Instagram",
      ctaHref: "https://www.instagram.com/acierjcuidadores",
      ctaTarget: "_blank",
    },
    {
      id: "intolerancia-religiosa",
      data: "2026-05-25",
      tipo: "agenda",
      titulo: "Cuidado e Intolerância Religiosa",
      subtitulo: "Respeito, Direitos e Cuidado em uma Sociedade Plural",
      descricao:
        'A ACIERJ convida todos e todas para uma conversa sobre "Cuidado e Intolerância Religiosa". O ato de cuidar vai além do físico: ele exige respeito ao ambiente de trabalho, à história e à fé da pessoa que cuidamos. Preservar e respeitar a espiritualidade de cada pessoa é um dever ético e um pilar fundamental para a saúde física, o equilíbrio emocional, a recuperação e promoção de saúde.',
      badge: "Maio 2026",
      imagem: cuidadoIntoleranciaImg,
      imagemAlt:
        "Cuidado e Intolerância Religiosa — Respeito, Direitos e Cuidado em uma Sociedade Plural",
      dataFormatada: "25 de maio de 2026 (segunda) — 20h",
      formato: "Live pelo Instagram",
      convidados: [
        "Reimont — Dr. em história, teólogo e franciscano. Deputado Federal PT-RJ",
        "Pastor Henrique Vieira — Pastor, Professor e Deputado Federal PSOL-RJ",
        "Luiz Carlos da Silva — Babalorixá, Professor de Biologia",
        "Mediadora: Ana Gilda Soares dos Santos — Assistente Social e Presidente da ACIERJ",
      ],
      cta: "Acompanhar no Instagram",
      ctaHref: "https://www.instagram.com/acierjcuidadores",
      ctaTarget: "_blank",
    },
    {
      id: "semana-antimanicomial",
      data: "2026-05-12",
      tipo: "agenda",
      titulo: "Semana da Luta Antimanicomial",
      descricao:
        "Ao longo da semana teremos palestras, debates e atividades construídas por estudantes, trabalhadores, usuários e movimentos sociais em defesa de uma saúde mental pública, antimanicomial, anticapacitista, antirracista e anticapitalista.\n\nMais do que uma programação acadêmica, é um espaço de encontro, troca e fortalecimento da luta por cuidado em liberdade e pela defesa do SUS e da RAPS.",
      badge: "Maio 2026",
      imagem: evento2Img,
      imagemAlt: "Semana da Luta Antimanicomial — Política Pública de Verdade",
      dataFormatada: "12 a 16 de maio de 2026",
      local: "Diferentes espaços do Rio de Janeiro",
      cta: "Saiba mais",
      ctaHref:
        "https://www.instagram.com/p/DX_yjY6FmP3/?igsh=MTQ5azh0azdkZXZjMA==",
      ctaTarget: "_blank",
    },
    {
      id: "comite-nacional",
      data: "2026-05-28",
      tipo: "agenda",
      titulo: "ACIERJ na Reunião do Comitê Nacional da Política de Cuidado",
      descricao:
        "A ACIERJ marcou presença nos dias 28 e 29 de maio na Reunião do Comitê Nacional da Política de Cuidado, reafirmando seu compromisso com a construção de políticas públicas que reconheçam e valorizem o trabalho dos cuidadores no Brasil.",
      badge: "Maio 2026",
      imagem: comiteCuidadoImg,
      imagemAlt: "ACIERJ na Reunião do Comitê Nacional da Política de Cuidado",
      dataFormatada: "28 e 29 de maio de 2026",
      formato: "Participação institucional / Presencial",
      cta: "Mais informações",
      ctaHref: "/contato",
      ctaTarget: null,
    },
    {
      id: "summit",
      data: "2026-05-13",
      tipo: "agenda",
      titulo: "2º SUMMIT de Integração de Cuidados de Saúde",
      descricao:
        "A ACIERJ participará do 2º SUMMIT, evento que reunirá especialistas, gestores e instituições para discutir sistemas de saúde mais integrados, eficientes e centrados na pessoa.\n\n**Ana Gilda dos Santos** será palestrante no evento, promovendo troca de experiências, aprendizado e articulação entre profissionais de diferentes países e áreas da saúde.",
      badge: "Maio 2026",
      imagem: evento1Img,
      imagemAlt:
        "Ana Gilda dos Santos - Palestrante do 2º SUMMIT de Integração de Cuidados de Saúde",
      dataFormatada: "13, 14 e 15 de maio de 2026",
      local: "Fundação Cesgranrio",
      localDetalhes:
        "Rua Santa Alexandrina, 1011 — Rio Comprido, Rio de Janeiro",
      extra: "Evento gratuito",
      cta: "Garantir inscrição",
      ctaHref: "https://tickets.fis.org.br/summit-ics-plp",
      ctaTarget: "_blank",
    },
    {
      id: "abrasme",
      data: "2026-06-04",
      tipo: "agenda",
      titulo: "ACIERJ no 10º Congresso Brasileiro de Saúde Mental — ABRASME",
      descricao:
        "Nos dias 4, 5 e 6 de junho, a ACIERJ marcou presença no 10º Congresso Brasileiro de Saúde Mental (ABRASME), em Vitória/ES, apresentando artigos sobre a ACIERJ como movimento social e político na luta por políticas públicas de cuidado.\n\nO evento também celebrou um marco histórico: a apresentação da 1ª Formação para Cuidadores da Saúde Mental no Rio de Janeiro, realizada em parceria com a Escola Politécnica de Saúde Joaquim Venâncio — Fiocruz.\n\nSeguimos com o compromisso e protagonismo das trabalhadoras cuidadoras na construção de um cuidado ético, humanizado e politicamente engajado.",
      badge: "Junho 2026",
      imagem: congressoAbrasmeImg,
      imagemAlt: "ACIERJ no 10º Congresso Brasileiro de Saúde Mental — ABRASME",
      dataFormatada: "4, 5 e 6 de junho de 2026",
      local: "Vitória, Espírito Santo",
      formato: "Participação institucional / Presencial",
      cta: "Mais informações",
      ctaHref: "/contato",
      ctaTarget: null,
    },
  ];

  // Ordenação cronológica
  const hoje = new Date(2026, 5, 16); // 16 de junho de 2026
  const eventosFuturos = eventosData
    .map((evento) => ({ ...evento, dataObj: new Date(evento.data) }))
    .sort((a, b) => {
      const diffA = a.dataObj - hoje;
      const diffB = b.dataObj - hoje;
      if (diffA >= 0 && diffB >= 0) return diffA - diffB;
      if (diffA < 0 && diffB < 0) return diffB - diffA;
      return diffA >= 0 ? -1 : 1;
    })
    .map(({ dataObj, ...evento }) => evento);

  const eventoDestaque = eventosFuturos.find((e) => e.tipo === "featured");
  const eventosAgenda = eventosFuturos.filter((e) => e.tipo === "agenda");
  const [showSpeakers, setShowSpeakers] = useState(false);

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

          {eventoDestaque && (
            <FadeIn>
              <motion.article
                whileHover={{ y: -4 }}
                className="mx-auto w-full max-w-[900px] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row"
              >
                {/* ── Imagem ── */}
                <div className="relative w-full md:w-[42%] md:flex-shrink-0 h-[380px] md:h-auto md:self-stretch overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20">
                  <Image
                    src={eventoDestaque.imagem}
                    alt={eventoDestaque.imagemAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* ── Conteúdo ── */}
                <div className="flex-1 p-6 md:p-7 flex flex-col gap-3 overflow-hidden">
                  {/* Cabeçalho */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-[10px] font-bold rounded-full tracking-wider uppercase mb-2">
                      {eventoDestaque.badge}
                    </span>
                    <h3 className="text-sm md:text-base font-extrabold text-gray-900 dark:text-white leading-snug mb-1">
                      {eventoDestaque.titulo}
                    </h3>
                    {eventoDestaque.subtitulo && (
                      <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold italic">
                        "{eventoDestaque.subtitulo}"
                      </p>
                    )}
                  </div>

                  {/* Descrição com line-clamp */}
                  <p
                    className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed overflow-hidden"
                    style={{ maxHeight: "4.5rem" }}
                  >
                    {eventoDestaque.descricao}
                  </p>
                  {/* Informações */}
                  <div className="space-y-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2 items-start">
                      <span className="text-brand-600 dark:text-brand-400 text-sm flex-shrink-0 mt-0.5">
                        📅
                      </span>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Data e Horário
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {eventoDestaque.dataFormatada}
                        </p>
                      </div>
                    </div>

                    {eventoDestaque.local && (
                      <div className="flex gap-2 items-start">
                        <span className="text-brand-600 dark:text-brand-400 text-sm flex-shrink-0 mt-0.5">
                          📍
                        </span>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Local
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">
                            {eventoDestaque.local}
                          </p>
                          {eventoDestaque.localDetalhes && (
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {eventoDestaque.localDetalhes}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {eventoDestaque.convidados?.length > 0 && (
                      <div className="flex gap-2 items-start">
                        <span className="text-brand-600 dark:text-brand-400 text-sm flex-shrink-0 mt-0.5">
                          🎤
                        </span>
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Palestrantes
                            </p>
                            {eventoDestaque.convidados.length > 2 && (
                              <button
                                type="button"
                                onClick={() => setShowSpeakers(!showSpeakers)}
                                className="text-[11px] font-semibold text-brand-600 dark:text-brand-300 hover:underline"
                              >
                                {showSpeakers ? "Ver menos" : "Ver mais"}
                              </button>
                            )}
                          </div>
                          <div className="space-y-1">
                            {(showSpeakers
                              ? eventoDestaque.convidados
                              : eventoDestaque.convidados.slice(0, 2)
                            ).map((convidado, idx) => (
                              <p
                                key={idx}
                                className="text-xs text-gray-700 dark:text-gray-300"
                              >
                                {convidado}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA — sempre no fundo */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={eventoDestaque.ctaHref}
                      target={eventoDestaque.ctaTarget}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                      <span>{eventoDestaque.cta}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          )}
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
            {eventosAgenda.map((evento) => (
              <FadeIn key={evento.id}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40 flex flex-col h-full"
                >
                  {/* Imagem */}
                  <div className="relative aspect-video bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-800/20 overflow-hidden">
                    <Image
                      src={evento.imagem}
                      alt={evento.imagemAlt}
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
                          {evento.badge}
                        </span>
                        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">
                          {evento.titulo}
                        </h3>
                        {evento.subtitulo && (
                          <p className="text-sm text-brand-600 dark:text-brand-400 font-semibold italic">
                            {evento.subtitulo}
                          </p>
                        )}
                      </div>

                      <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {evento.descricao.split("\n\n").map((para, idx) => (
                          <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                            {para
                              .split("**")
                              .map((part, i) =>
                                i % 2 === 1 ? (
                                  <strong key={i}>{part}</strong>
                                ) : (
                                  part
                                ),
                              )}
                          </p>
                        ))}
                      </div>

                      {evento.convidados && (
                        <div className="mt-4 space-y-2 bg-brand-50 dark:bg-brand-900/20 p-4 rounded-lg text-sm">
                          <p className="font-bold text-gray-900 dark:text-white">
                            Convidados:
                          </p>
                          {evento.convidados.map((convidado, idx) => (
                            <p
                              key={idx}
                              className="text-gray-700 dark:text-gray-300 text-xs ml-2"
                            >
                              • {convidado}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Informações */}
                    <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                      <div className="flex gap-3">
                        <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">
                          📅
                        </span>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Data {evento.formato ? "" : "e Horário"}
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                            {evento.dataFormatada}
                          </p>
                        </div>
                      </div>

                      {evento.local && (
                        <div className="flex gap-3">
                          <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">
                            📍
                          </span>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Local
                            </p>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                              {evento.local}
                            </p>
                            {evento.localDetalhes && (
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {evento.localDetalhes}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {evento.formato && (
                        <div className="flex gap-3">
                          <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">
                            📱
                          </span>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Formato
                            </p>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                              {evento.formato}
                            </p>
                          </div>
                        </div>
                      )}

                      {evento.extra && (
                        <div className="flex gap-3">
                          <span className="text-brand-600 dark:text-brand-400 text-lg flex-shrink-0">
                            🎟
                          </span>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                              {evento.extra}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                      {evento.ctaTarget ? (
                        <a
                          href={evento.ctaHref}
                          target={evento.ctaTarget}
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                        >
                          <span>{evento.cta}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={evento.ctaHref}
                          className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-bold text-sm md:text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                        >
                          <span>{evento.cta}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
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
              Inscreva-se para receber informações sobre palestras, encontros e
              mobilizações da ACIERJ.
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
