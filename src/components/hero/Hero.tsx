import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { CV_URL, PROFILE_IMAGE, SOCIAL_LINKS } from "../../constants";
import { CAREER_START, JOBS } from "../../data/experience";
import { TECHNOLOGY_COUNT } from "../../data/skills";
import projects from "../../data/projects";

// Años desde el primer empleo, redondeado hacia abajo a medio año (p. ej. "1.5")
const yearsOfExperience = () => {
  const now = new Date();
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 +
    (now.getMonth() - CAREER_START.getMonth());
  return Math.max(0.5, Math.floor(months / 6) / 2);
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero: React.FC = () => {
  const { t, language } = useTranslation();

  const stats = [
    {
      value: `${yearsOfExperience().toLocaleString(language)}+`,
      label: t("hero.stats.experience"),
    },
    { value: JOBS.length, label: t("hero.stats.companies") },
    { value: projects.length, label: t("hero.stats.projects") },
    { value: `${TECHNOLOGY_COUNT}+`, label: t("hero.stats.technologies") },
  ];

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <motion.a
            {...fadeUp(0)}
            href="#now"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-3 pr-4 text-sm text-ink-200 transition-colors hover:border-accent/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t("hero.status")}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </motion.a>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl"
          >
            <span className="block text-ink-400">{t("hero.greeting")}</span>
            <span className="text-gradient block">{t("hero.name")}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-accent"
          >
            {t("hero.title")}
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              {t("hero.cta")}
              <ArrowRight size={16} />
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Download size={16} />
              {t("hero.download_cv")}
            </a>
            <div className="ml-1 flex items-center gap-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-56 sm:w-64 md:w-72"
        >
          <div className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative rounded-full border border-white/10 bg-gradient-to-b from-accent/40 via-white/10 to-transparent p-1.5">
            <div className="overflow-hidden rounded-full bg-ink-200">
              <img
                src={PROFILE_IMAGE}
                alt="Jairo Alexandro"
                width={288}
                height={288}
                className="aspect-square w-full scale-[1.03] object-cover"
              />
            </div>
          </div>
          <div className="card absolute -bottom-2 -left-2 flex items-center gap-2 !rounded-full !bg-ink-900/90 px-3.5 py-2 text-sm text-ink-200">
            <MapPin size={14} className="text-accent" />
            {t("hero.location")}
          </div>
        </motion.div>
      </div>

      <motion.dl
        {...fadeUp(0.5)}
        className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink-950 px-6 py-5">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-white">
              {stat.value}
            </dd>
            <dd className="mt-1 text-sm text-ink-400">{stat.label}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
};

export default Hero;
