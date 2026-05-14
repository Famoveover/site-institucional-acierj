"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Image from "next/image";

/**
 * CardParceiro – Card de parceiro/serviço com imagem, informações e contato
 * Props:
 *   logo          string      — caminho da imagem do flyer
 *   nome          string      — nome da empresa/escritório
 *   slogan        string      — descrição breve da parceria
 *   descricao     string      — descrição completa
 *   areas         array       — lista de áreas de atuação
 *   textoAdicional string     — parágrafo adicional
 *   fraseDestaque string      — frase em itálico
 *   endereco      string
 *   telefone      string
 *   email         string
 *   whatsappUrl   string      — URL do WhatsApp
 *   delay         number      — delay de animação (default 0)
 */
export default function CardParceiro({
  logo,
  nome,
  slogan,
  descricao,
  areas = [],
  textoAdicional,
  fraseDestaque,
  endereco,
  telefone,
  email,
  whatsappUrl,
  delay = 0,
}) {
  return (
    <FadeIn delay={delay}>
      <motion.article
        whileHover={{ y: -8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-brand-200 dark:hover:border-brand-400/40"
      >
        {/* Grid: Imagem + Conteúdo */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
          {/* SEÇÃO 1: Imagem do Flyer */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-gradient-to-br from-brand-50 to-gray-50 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
            {logo && (
              <Image
                src={logo}
                alt={nome}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="w-full h-full object-cover object-center"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* SEÇÃO 2: Conteúdo e Contato */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            {/* Cabeçalho */}
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
                {nome}
              </h3>
              <p className="text-base font-semibold text-brand-600 dark:text-brand-400 mb-4">
                {slogan}
              </p>

              {/* Descrição */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5 text-sm">
                {descricao}
              </p>

              {/* Áreas de Atuação */}
              {areas.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">
                    Áreas de Atuação
                  </p>
                  <ul className="space-y-2">
                    {areas.map((area, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 dark:bg-yellow-500 flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Texto Adicional */}
              {textoAdicional && (
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {textoAdicional}
                </p>
              )}

              {/* Frase de Destaque (Itálico) */}
              {fraseDestaque && (
                <p className="text-gray-700 dark:text-gray-300 italic text-sm leading-relaxed mb-6 pl-4 border-l-4 border-brand-400 dark:border-brand-500">
                  {fraseDestaque}
                </p>
              )}
            </div>

            {/* Rodapé: Contato + Botão WhatsApp */}
            <div>
              {/* Informações de Contato */}
              <div className="space-y-3 mb-6 pb-6 border-t border-gray-100 dark:border-gray-700 pt-6">
                {endereco && (
                  <div className="flex gap-3">
                    <span className="text-yellow-400 dark:text-yellow-500 text-lg flex-shrink-0">
                      📍
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{endereco}</p>
                  </div>
                )}
                {telefone && (
                  <div className="flex gap-3">
                    <span className="text-yellow-400 dark:text-yellow-500 text-lg flex-shrink-0">
                      📞
                    </span>
                    <a
                      href={`tel:${telefone.replace(/[^\d+]/g, "")}`}
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {telefone}
                    </a>
                  </div>
                )}
                {email && (
                  <div className="flex gap-3">
                    <span className="text-yellow-400 dark:text-yellow-500 text-lg flex-shrink-0">
                      ✉️
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                )}
              </div>

              {/* Botão WhatsApp */}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.168.493-2.24 1.199-3.07 2.099a8.86 8.86 0 00-1.85 3.05c-.274.835-.412 1.753-.416 2.69v.04c.004.934.142 1.853.416 2.688.312.95.755 1.848 1.31 2.662.556.814 1.23 1.53 1.99 2.117a10.04 10.04 0 003.042 1.402c.933.277 1.924.414 2.923.416h.04a10.01 10.01 0 002.923-.416 10.04 10.04 0 003.042-1.402c.76-.587 1.434-1.303 1.99-2.117a8.86 8.86 0 001.31-2.662c.274-.835.412-1.753.416-2.689v-.04c-.004-.935-.142-1.854-.416-2.691a8.86 8.86 0 00-1.31-2.662 10.04 10.04 0 00-1.99-2.117 10.04 10.04 0 00-3.042-1.402 9.87 9.87 0 00-2.923-.416zm0-1.004h.004c1.066 0 2.12.156 3.15.46 1.003.298 1.956.744 2.83 1.322a11.04 11.04 0 012.297 2.328c.656.916 1.154 1.936 1.473 3.032.337.995.505 2.049.505 3.132v.041c0 1.083-.168 2.137-.505 3.133a9.86 9.86 0 01-1.473 3.031 11.04 11.04 0 01-2.297 2.329c-.874.578-1.827 1.024-2.83 1.322a11.05 11.05 0 01-3.15.46h-.041c-1.066 0-2.12-.156-3.15-.46-1.003-.298-1.956-.744-2.83-1.322a11.04 11.04 0 01-2.297-2.328c-.656-.916-1.154-1.936-1.473-3.032-.337-.995-.505-2.049-.505-3.132v-.041c0-1.083.168-2.137.505-3.133.319-1.096.817-2.116 1.473-3.032.656-.916 1.441-1.704 2.297-2.329.874-.578 1.827-1.024 2.83-1.322a11.05 11.05 0 013.15-.46z" />
                  </svg>
                  Conversar no WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </FadeIn>
  );
}
