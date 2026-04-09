import FadeIn from "./FadeIn";

/**
 * SectionHeader – cabeçalho padronizado de seção.
 * Props:
 *   title     string
 *   subtitle  string
 */
export default function SectionHeader({ title, subtitle }) {
  return (
    <FadeIn className="text-center max-w-2xl mx-auto mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
        {title}
      </h2>
      <div className="w-12 h-1 bg-brand-400 rounded-full mx-auto mb-5" />
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
        {subtitle}
      </p>
    </FadeIn>
  );
}
