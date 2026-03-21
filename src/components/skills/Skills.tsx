import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Database, Globe, Server, Smartphone, Layers } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows";
import { useTranslation } from "../../hooks/useTranslation";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  skills: Array<{
    name: string;
    icon: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
  }>;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      title: t("skills.categories.languages"),
      icon: Globe,
      description: "Lenguajes de programación y marcado que domino",
      skills: [
        { name: "HTML5", icon: "🌐", level: "expert" },
        { name: "CSS3", icon: "🎨", level: "expert" },
        { name: "JavaScript (ES6+)", icon: "⚡", level: "expert" },
        { name: "TypeScript", icon: "📘", level: "intermediate" },
        { name: "PHP 8", icon: "🐘", level: "advanced" },
        { name: "Python", icon: "🐍", level: "beginner" },
        { name: "Java", icon: "☕", level: "beginner" },
        { name: "SQL", icon: "🗃️", level: "intermediate" },
        { name: "Dart", icon: "🎯", level: "beginner" },
      ],
    },
    {
      id: "frameworks",
      title: t("skills.categories.frameworks"),
      icon: Layers,
      description: "Frameworks y librerías para desarrollo moderno",
      skills: [
        { name: "React", icon: "⚛️", level: "advanced" },
        { name: "Angular", icon: "🅰️", level: "beginner" },
        { name: "Next.js", icon: "▲", level: "intermediate" },
        { name: "Flutter", icon: "🦋", level: "beginner" },
        { name: "Laravel", icon: "🔥", level: "intermediate" },
        { name: "Symfony", icon: "🎭", level: "intermediate" },
        { name: "CodeIgniter", icon: "🔥", level: "intermediate" },
        { name: "Bootstrap", icon: "📱", level: "expert" },
        { name: "Tailwind CSS", icon: "🎨", level: "advanced" },
      ],
    },
    {
      id: "database",
      title: t("skills.categories.database"),
      icon: Database,
      description: "Gestión y administración de bases de datos",
      skills: [
        { name: "MySQL", icon: "🐬", level: "intermediate" },
        { name: "MongoDB", icon: "🍃", level: "intermediate" },
        { name: "MariaDB", icon: "🐬", level: "intermediate" },
      ],
    },
    {
      id: "tools",
      title: t("skills.categories.tools"),
      icon: Server,
      description: "Herramientas de desarrollo y control de versiones",
      skills: [
        { name: "Git", icon: "📝", level: "advanced" },
        { name: "GitHub", icon: "🐙", level: "advanced" },
        { name: "Bitbucket", icon: "🪣", level: "intermediate" },
        { name: "Docker (Devilbox)", icon: "🐳", level: "intermediate" },
        { name: "Grafana", icon: "📊", level: "intermediate" },
        { name: "Atlassian Suite", icon: "🔧", level: "intermediate" },
        { name: "Trello", icon: "📋", level: "intermediate" },
      ],
    },
    {
      id: "design",
      title: t("skills.categories.design"),
      icon: Smartphone,
      description: "Herramientas de diseño y multimedia",
      skills: [
        { name: "Figma", icon: "🎨", level: "intermediate" },
        { name: "Blender", icon: "🎬", level: "intermediate" },
        { name: "Adobe Premiere", icon: "🎞️", level: "intermediate" },
        { name: "After Effects", icon: "✨", level: "intermediate" },
        { name: "Photoshop", icon: "🖼️", level: "intermediate" },
      ],
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_current: number, next: number) => setActiveCategory(next),
  };

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "text-green-400";
      case "advanced":
        return "text-blue-400";
      case "intermediate":
        return "text-yellow-400";
      case "beginner":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full py-20 px-4" id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("skills.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Indicadores de categoría */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-800/50 border-slate-600 text-gray-300 hover:bg-slate-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={16} />
                <span className="hidden sm:inline">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Slider de skills */}
        <motion.div variants={itemVariants} className="relative">
          <Slider ref={sliderRef} {...settings} className="skills-slider">
            {skillCategories.map((category) => (
              <div key={category.id} className="px-4">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                      <category.icon size={32} className="text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <div>
                              <h3 className="font-semibold text-white">
                                {skill.name}
                              </h3>
                            </div>
                          </div>
                          <span
                            className={`text-sm font-medium ${getLevelColor(skill.level)}`}
                          >
                            {skill.level.charAt(0).toUpperCase() +
                              skill.level.slice(1)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Estadísticas adicionales */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: t("skills.stats.experience"), value: "1+" },
              { label: t("skills.stats.projects"), value: "5+" },
              { label: t("skills.stats.technologies"), value: "20+" },
              { label: t("skills.stats.commits"), value: "500+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
