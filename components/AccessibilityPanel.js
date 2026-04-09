import { useState } from "react";
import { useAccessibility } from "../lib/AccessibilityContext";
import { cn } from "../lib/utils";

export default function AccessibilityPanel() {
  const {
    dark,
    toggleDark,
    fontIdx,
    fontMax,
    fontMin,
    increaseFontSize,
    decreaseFontSize,
  } = useAccessibility();

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Painel de opções */}
      <div
        className={cn(
          "flex flex-col gap-2 p-3 rounded-2xl shadow-xl border transition-all duration-300 origin-bottom-right",
          "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none",
        )}
        role="region"
        aria-label="Painel de acessibilidade"
      >
        {/* Dark mode */}
        <button
          onClick={toggleDark}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "text-gray-700 dark:text-gray-200",
          )}
          aria-pressed={dark}
          title={dark ? "Desativar modo escuro" : "Ativar modo escuro"}
        >
          <span className="text-lg w-6 text-center" aria-hidden="true">
            {dark ? "☀️" : "🌙"}
          </span>
          <span>{dark ? "Modo claro" : "Modo escuro"}</span>
        </button>

        {/* Aumentar fonte */}
        <button
          onClick={increaseFontSize}
          disabled={fontIdx >= fontMax}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "text-gray-700 dark:text-gray-200",
            "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent",
          )}
          title="Aumentar tamanho da fonte"
        >
          <span className="text-lg w-6 text-center" aria-hidden="true">A+</span>
          <span>Aumentar fonte</span>
        </button>

        {/* Diminuir fonte */}
        <button
          onClick={decreaseFontSize}
          disabled={fontIdx <= fontMin}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "text-gray-700 dark:text-gray-200",
            "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent",
          )}
          title="Diminuir tamanho da fonte"
        >
          <span className="text-lg w-6 text-center" aria-hidden="true">A−</span>
          <span>Diminuir fonte</span>
        </button>
      </div>

      {/* Botão de abertura */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          "bg-brand-400 text-white hover:bg-brand-500 hover:scale-105",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2",
          open && "rotate-45",
        )}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={open ? "Fechar painel de acessibilidade" : "Abrir painel de acessibilidade"}
        title="Acessibilidade"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="4.5" r="2" />
          <path d="M12 7v4.5" />
          <path d="m8 15 4-3.5 4 3.5" />
          <path d="m9 19 3-4 3 4" />
          <path d="M6 9h12" />
        </svg>
      </button>
    </div>
  );
}
