import {
  Code2,
  Layers,
  Database,
  GitBranch,
  PenTool,
  Users,
  LucideIcon,
} from "lucide-react";

export interface SkillCategory {
  /** Clave dentro de skills.categories */
  id: string;
  icon: LucideIcon;
  items: string[];
}

// Mismo listado que el CV
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    icon: Code2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "PHP 8",
      "SQL",
      "Python",
      "Java",
      "Dart",
    ],
  },
  {
    id: "frameworks",
    icon: Layers,
    items: [
      "React",
      "Next.js",
      "Angular",
      "Symfony",
      "Laravel",
      "CodeIgniter",
      "Flutter",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    id: "database",
    icon: Database,
    items: ["MySQL", "MariaDB", "MongoDB"],
  },
  {
    id: "tools",
    icon: GitBranch,
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Docker (Devilbox)",
      "Grafana",
      "Atlassian Suite",
      "Trello",
    ],
  },
  {
    id: "design",
    icon: PenTool,
    items: ["Figma", "Blender", "Photoshop", "Premiere", "After Effects"],
  },
  {
    id: "methods",
    icon: Users,
    items: ["Scrum", "skills.items.spanish", "skills.items.english"],
  },
];

export const TECHNOLOGY_COUNT = SKILL_CATEGORIES.filter(
  (c) => c.id !== "methods",
).reduce((total, c) => total + c.items.length, 0);
