import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { SKILL_CATEGORIES } from "../../data/skills";
import Section, { Reveal } from "../ui/Section";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="skills"
      index="03"
      label={t("skills.label")}
      title={t("skills.title")}
      subtitle={t("skills.subtitle")}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, i) => (
          <Reveal
            key={category.id}
            delay={i * 0.05}
            className="card p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                <category.icon size={17} />
              </div>
              <h3 className="font-medium text-white">
                {t(`skills.categories.${category.id}`)}
              </h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item} className="chip">
                  {item.startsWith("skills.") ? t(item) : item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
