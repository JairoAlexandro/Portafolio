import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { EDUCATION, JOBS } from "../../data/experience";
import Section, { Reveal } from "../ui/Section";

const ColumnTitle: React.FC<{ icon: typeof Briefcase; children: string }> = ({
  icon: Icon,
  children,
}) => (
  <h3 className="mb-8 flex items-center gap-2 text-sm font-medium text-ink-400">
    <Icon size={16} className="text-accent" />
    {children}
  </h3>
);

const Experience: React.FC = () => {
  const { t, tList } = useTranslation();

  return (
    <Section
      id="experience"
      index="02"
      label={t("experience.label")}
      title={t("experience.title")}
    >
      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        {/* Experiencia laboral */}
        <div>
          <ColumnTitle icon={Briefcase}>{t("experience.work")}</ColumnTitle>
          <ol className="relative space-y-6 border-l border-white/10 pl-8">
            {JOBS.map((job, i) => (
              <li key={job.id} className="relative">
                <span
                  className={`absolute -left-[37px] top-7 h-[9px] w-[9px] rounded-full ring-4 ring-ink-950 ${
                    job.current ? "bg-accent" : "bg-ink-600"
                  }`}
                />
                <Reveal delay={i * 0.1} className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {job.company}
                      </p>
                      <p className="text-sm text-ink-400">
                        {t(`experience.jobs.${job.id}.role`)}
                      </p>
                    </div>
                    <span
                      className={`font-mono text-xs ${job.current ? "text-accent" : "text-ink-500"}`}
                    >
                      {t(`experience.jobs.${job.id}.period`)}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-300">
                    {tList(`experience.jobs.${job.id}.bullets`).map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="chip !text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Formación */}
        <div>
          <ColumnTitle icon={GraduationCap}>
            {t("experience.studies")}
          </ColumnTitle>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.id} delay={i * 0.1} className="card p-6">
                <span className="font-mono text-xs text-ink-500">
                  {t(`experience.education.${edu.id}.period`)}
                </span>
                <h4 className="mt-2 font-medium leading-snug text-white">
                  {t(`experience.education.${edu.id}.title`)}
                </h4>
                <p className="mt-1 text-sm text-ink-400">
                  {t(`experience.education.${edu.id}.school`)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {t(`experience.education.${edu.id}.description`)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
