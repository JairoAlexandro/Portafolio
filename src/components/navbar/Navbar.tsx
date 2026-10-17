import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { CV_URL, SECTIONS } from "../../constants";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-white/[0.08] bg-ink-950/75 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-2 py-1 font-semibold tracking-tight text-white"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-ink-950">
            JA
          </span>
          <span className="hidden sm:inline">Jairo Alexandro</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === id
                    ? "bg-white/[0.07] text-white"
                    : "text-ink-300 hover:text-white"
                }`}
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-4 !py-2 sm:inline-flex"
          >
            <Download size={15} />
            CV
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-white transition-colors hover:bg-white/5 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t("nav.menu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="card absolute inset-x-4 top-[4.75rem] !bg-ink-950/95 p-2 backdrop-blur-xl md:hidden"
          >
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full sm:hidden"
            >
              <Download size={15} />
              {t("hero.download_cv")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
