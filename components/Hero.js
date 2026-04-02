import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroImg from "../imagens/capaacierjoficial.png";

/**
 * Hero – Seção principal da home da ACIERJ.
 *
 * Layout:
 *  - Fullscreen com imagem de fundo (Next/Image fill)
 *  - Overlay gradiente lateral (esquerda escura → direita transparente)
 *  - Conteúdo textual à esquerda, max 600px, centralizado verticalmente
 *  - Mobile: texto centralizado, overlay mais forte
 *
 * Técnica:
 *  - background-image via Next/Image fill + object-cover
 *  - Overlay via div com linear-gradients (suporta Tailwind + transparências complexas)
 *  - Animações de entrada em cascade via Framer Motion
 */

/* Variantes Framer Motion para cascade */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-stretch overflow-hidden bg-brand-700"
      aria-labelledby="hero-title"
    >
      {/* ── Imagem de fundo ── */}
      <Image
        src={heroImg}
        alt="Bandeira da ACIERJ — Cuidar é um ato político. Regulamentar é um ato de justiça social."
        fill
        className="object-cover object-[65%_center] brightness-[0.85] contrast-[1.08] saturate-110"
        priority
      />

      {/* ── Overlay lateral ──
          Gradiente da esquerda (escuro) para direita (transparente)
          + gradiente inferior sutil para profundidade */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none
                   max-md:bg-brand-700/[0.88]"
        style={{
          background:
            "linear-gradient(to right, rgba(15,46,34,0.94) 0%, rgba(15,46,34,0.80) 35%, rgba(15,46,34,0.40) 60%, rgba(15,46,34,0.10) 100%), linear-gradient(to top, rgba(0,0,0,0.30) 0%, transparent 40%)",
        }}
      />

      {/* ── Conteúdo ── */}
      <div
        className="relative z-[2] flex items-center w-full min-h-screen
                    py-28 md:py-20
                    max-md:justify-center max-md:text-center"
      >
        <div className="max-w-[600px] px-6 sm:px-10 md:px-16">
          {/* Tag */}
          <motion.span
            {...fadeUp(0.2)}
            className="inline-block text-xs font-bold tracking-[4px] uppercase
                       text-accent mb-5 px-3.5 py-1.5
                       border border-accent/40 rounded"
          >
            ACIERJ
          </motion.span>

          {/* Título principal */}
          <motion.h1
            id="hero-title"
            {...fadeUp(0.35)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
                       font-extrabold leading-[1.08] text-white mb-3"
          >
            Cuidar é um
            <br />
            <strong className="text-accent font-extrabold">
              ato político.
            </strong>
          </motion.h1>

          {/* Subtítulo com barra lateral */}
          <motion.p
            {...fadeUp(0.5)}
            className="text-lg md:text-[22px] font-semibold text-white/90
                       leading-snug mb-5 pl-4 border-l-[3px] border-brand-400
                       max-md:border-l-0 max-md:pl-0"
          >
            Regulamentar é um ato de justiça social.
          </motion.p>

          {/* Descrição */}
          <motion.p
            {...fadeUp(0.6)}
            className="text-sm md:text-base text-white/65
                       leading-relaxed mb-9 max-w-[480px]
                       max-md:mx-auto"
          >
            Formação, apoio e mobilização para profissionais do cuidado na luta
            pela regulamentação da profissão no Rio de Janeiro.
          </motion.p>

          {/* Botões */}
          <motion.div
            {...fadeUp(0.75)}
            className="flex flex-wrap gap-4 max-md:justify-center"
          >
            {/* Primário */}
            <Link
              href="/contato"
              className="inline-block bg-brand-400 text-white px-8 py-4
                         rounded-lg font-bold text-sm no-underline
                         shadow-lg shadow-brand-400/30
                         hover:bg-accent hover:-translate-y-0.5
                         hover:shadow-accent/30 hover:no-underline
                         transition-all duration-200"
            >
              Solicitar atendimento
            </Link>

            {/* Secundário */}
            <Link
              href="/sobre"
              className="inline-block bg-transparent text-white/90 px-8 py-4
                         border-2 border-white/30 rounded-lg
                         font-semibold text-sm no-underline
                         hover:bg-white/10 hover:border-white/60
                         hover:no-underline
                         transition-all duration-200"
            >
              Saiba mais
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
