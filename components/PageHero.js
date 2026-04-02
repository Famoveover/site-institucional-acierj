import FadeIn from "./FadeIn";

/**
 * PageHero – hero banner para páginas internas.
 * Props:
 *   crumb    string  — label acima do título (ex: "ACIERJ")
 *   title    string  — h1 da página
 *   tagline  string  — subtítulo opcional
 */
export default function PageHero({ crumb = "ACIERJ", title, tagline }) {
  return (
    <section
      className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 py-20 md:py-28 relative overflow-hidden"
      aria-label={title}
    >
      {/* Círculos decorativos */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-white/5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeIn>
          <p className="text-xs font-bold tracking-[4px] uppercase text-accent mb-4">
            {crumb}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            {title}
          </h1>
          {tagline && (
            <p className="text-lg text-white/75 max-w-xl leading-relaxed border-l-[3px] border-brand-400 pl-4">
              {tagline}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
