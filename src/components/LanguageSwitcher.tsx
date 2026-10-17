import React, { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { LANGUAGES } from "../context/TranslationContext";

const LanguageSwitcher: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera o pulsar Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className="flex h-9 items-center gap-1.5 rounded-full px-3 font-mono text-xs uppercase text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
      >
        <Languages size={15} />
        {language}
      </button>

      {open && (
        <ul
          role="listbox"
          className="card absolute right-0 top-full mt-2 w-40 overflow-hidden !bg-ink-900/95 p-1 shadow-2xl"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                role="option"
                aria-selected={language === lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {lang.label}
                {language === lang.code && (
                  <Check size={14} className="text-accent" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
