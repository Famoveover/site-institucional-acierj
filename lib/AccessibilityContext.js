import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AccessibilityContext = createContext();

const FONT_STEPS = [100, 112.5, 125]; // %, correspondem a 16px / 18px / 20px
const FONT_MIN = 0;
const FONT_MAX = FONT_STEPS.length - 1;
const STORAGE_KEY = "acierj-a11y";

function loadPrefs() {
  if (typeof window === "undefined") return { dark: false, fontIdx: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { dark: false, fontIdx: 0 };
}

export function AccessibilityProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [fontIdx, setFontIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Carrega preferências do localStorage na montagem
  useEffect(() => {
    const prefs = loadPrefs();
    setDark(prefs.dark);
    setFontIdx(prefs.fontIdx);
    setMounted(true);
  }, []);

  // Persiste e aplica as preferências
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Dark mode — classe no <html>
    root.classList.toggle("dark", dark);

    // Font size — variável CSS no <html>
    root.style.fontSize = `${FONT_STEPS[fontIdx]}%`;

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ dark, fontIdx }));
  }, [dark, fontIdx, mounted]);

  const toggleDark = useCallback(() => setDark((d) => !d), []);

  const increaseFontSize = useCallback(
    () => setFontIdx((i) => Math.min(i + 1, FONT_MAX)),
    [],
  );

  const decreaseFontSize = useCallback(
    () => setFontIdx((i) => Math.max(i - 1, FONT_MIN)),
    [],
  );

  const value = {
    dark,
    toggleDark,
    fontIdx,
    fontMax: FONT_MAX,
    fontMin: FONT_MIN,
    increaseFontSize,
    decreaseFontSize,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return ctx;
}
