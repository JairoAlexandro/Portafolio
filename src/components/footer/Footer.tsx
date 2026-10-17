import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { SOCIAL_LINKS } from "../../constants";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 pb-24 pt-10 text-sm md:pb-10 md:pr-20 text-ink-500 sm:px-6 md:flex-row">
        <p>
          © {new Date().getFullYear()} Jairo Alexandro. {t("footer.rights")}
        </p>
        <p className="font-mono text-xs">{t("footer.built_with")}</p>
        <div className="flex gap-1">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-white"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("footer.back_to_top")}
            className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-900/80 text-white shadow-xl backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
