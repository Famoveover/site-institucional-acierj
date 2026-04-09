import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroImg from "../imagens/capaacierjoficial.png";

/* Animação cascade: sobe + aparece */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" },
});

const STATS = [
  { value: "13+", label: "Anos de atuação" },
  { value: "RJ", label: "Estado do Rio" },
  { value: "100%", label: "Sem fins lucrativos" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-700"
      aria-labelledby="hero-title"
    >
      {/* ── Glows decorativos de fundo ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-brand-600/50 blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-brand-400/20 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-14 items-center">

          {/* ════════════════════════════════
              Coluna esquerda — conteúdo
          ════════════════════════════════ */}
          <div className="flex flex-col items-start max-lg:items-center max-lg:text-center">

            {/* Linha institucional discreta */}
            <motion.p
              {...fadeUp(0.05)}
              className="text-xs text-white/40 uppercase tracking-widest mb-3"
            >
              Associação registrada &middot; Estado do Rio de Janeiro
            </motion.p>

            {/* Badge */}
            <motion.span
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[3px] uppercase
                         text-accent mb-6 px-4 py-2
                         bg-accent/10 border border-accent/25 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              ACIERJ — Rio de Janeiro
            </motion.span>

            {/* Título */}
            <motion.h1
              id="hero-title"
              {...fadeUp(0.25)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px]
                         font-extrabold leading-[1.08] text-white mb-4"
            >
              Cuidar é um{" "}
              <span className="text-accent">ato político.</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.38)}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-white/75 leading-snug mb-5"
            >
              Regulamentar é um ato de justiça social.
            </motion.p>

            {/* Divisor */}
            <motion.div
              {...fadeUp(0.44)}
              className="w-14 h-[3px] bg-accent rounded-full mb-6 max-lg:mx-auto"
            />

            {/* Descrição */}
            <motion.p
              {...fadeUp(0.52)}
              className="text-base text-white/55 leading-relaxed mb-10
                         max-w-lg max-lg:max-w-md"
            >
              Formação, apoio e mobilização para profissionais do cuidado
              na luta pela regulamentação da profissão no Estado do Rio de
              Janeiro.
            </motion.p>

            {/* Botões CTA */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto max-lg:items-center"
            >
              {/* Primário */}
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2.5
                           bg-accent text-brand-800 px-7 py-4
                           rounded-xl font-bold text-sm no-underline
                           w-full sm:w-auto
                           shadow-lg shadow-accent/20
                           hover:bg-accent-light hover:-translate-y-0.5
                           hover:shadow-accent/35 hover:no-underline
                           transition-all duration-200"
              >
                Solicitar atendimento
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Secundário */}
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2.5
                           bg-white/5 text-white px-7 py-4
                           border border-white/20 rounded-xl
                           font-semibold text-sm no-underline
                           w-full sm:w-auto
                           hover:bg-white/10 hover:border-white/40
                           hover:no-underline
                           transition-all duration-200"
              >
                Conhecer a ACIERJ
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.8)}
              className="flex gap-6 sm:gap-8 mt-10 sm:mt-12 pt-8 sm:pt-10
                         border-t border-white/10
                         max-lg:justify-center max-lg:w-full"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-accent leading-none">{s.value}</p>
                  <p className="text-xs text-white/45 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════════════════════════════════
              Coluna direita — imagem
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow atrás da imagem */}
            <div
              className="absolute inset-6 rounded-3xl blur-2xl opacity-40
                         bg-gradient-to-br from-accent/30 to-brand-400/30"
              aria-hidden="true"
            />

            {/* Moldura da imagem */}
            <div
              className="relative rounded-3xl overflow-hidden
                         shadow-2xl shadow-black/50
                         border border-white/10
                         w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              <Image
                src={heroImg}
                alt="Bandeira da ACIERJ — Cuidar é um ato político. Regulamentar é um ato de justiça social."
                className="w-full h-auto object-contain"
                priority
              />
              {/* Reflexo interno */}
              <div
                className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none"
                aria-hidden="true"
              />
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
