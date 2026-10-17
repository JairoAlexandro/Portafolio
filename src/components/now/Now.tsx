import React from "react";
import { MessagesSquare, CreditCard, DatabaseZap, TrendingUp } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import Section, { Reveal } from "../ui/Section";

const HIGHLIGHTS = [
  { id: "chat", icon: MessagesSquare },
  { id: "payments", icon: CreditCard },
  { id: "data", icon: DatabaseZap },
  { id: "improvements", icon: TrendingUp },
];

const Now: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="now"
      index="01"
      label={t("now.label")}
      title={t("now.title")}
    >
      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="card overflow-hidden p-8 lg:col-span-2">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xl font-semibold text-white">
                  Renterus Software
                </p>
                <p className="text-sm text-ink-400">Full Stack Developer</p>
              </div>
              <span className="chip !border-accent/30 !bg-accent/10 font-mono !text-xs !text-accent">
                {t("now.since")}
              </span>
            </div>
            <div className="mt-8 space-y-4 leading-relaxed text-ink-300">
              <p>{t("now.p1")}</p>
              <p>{t("now.p2")}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.08}
              className="card group p-6 transition-colors hover:border-white/15"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent transition-transform group-hover:-translate-y-0.5">
                <item.icon size={18} />
              </div>
              <h3 className="mt-5 font-medium text-white">
                {t(`now.highlights.${item.id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {t(`now.highlights.${item.id}.description`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Now;
