import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import projects from "../../data/projects";
import Section, { Reveal } from "../ui/Section";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="projects"
      index="04"
      label={t("projects.label")}
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08} className="h-full">
            <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-ink-900">
                {project.logo ? (
                  <div
                    className="grid h-full w-full place-items-center"
                    style={{
                      background: `radial-gradient(circle at 50% 45%, ${project.logo.color}55, transparent 65%)`,
                    }}
                  >
                    <img
                      src={project.logo.src}
                      alt={project.title}
                      loading="lazy"
                      className="h-24 w-24 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {project.featured && (
                  <span className="chip absolute left-3 top-3 !border-accent/30 !bg-ink-950/80 !text-xs !text-accent backdrop-blur">
                    {t("projects.featured")}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">
                  {t(project.description)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip !px-2.5 !py-0.5 !text-xs">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2 border-t border-white/[0.07] pt-5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex-1 !py-2"
                  >
                    {t("projects.live_demo")}
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex-1 !py-2"
                  >
                    <Github size={15} />
                    {t("projects.view_code")}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
