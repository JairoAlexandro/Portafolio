// Datos extraídos del CV (public/Jairo_Curriculum.pdf).
// Los textos (cargo, fechas, logros) viven en los archivos de traducción.

export interface Job {
  /** Clave dentro de experience.jobs */
  id: "renterus" | "greenslope";
  company: string;
  current?: boolean;
  stack: string[];
}

export interface Education {
  /** Clave dentro de experience.education */
  id: "daw" | "animation";
}

export const JOBS: Job[] = [
  {
    id: "renterus",
    company: "Renterus Software",
    current: true,
    stack: ["WebSockets", "Redsys", "SQL", "phpMyAdmin"],
  },
  {
    id: "greenslope",
    company: "GreenSlope",
    stack: ["Symfony", "PHP", "React", "TypeScript", "Grafana"],
  },
];

export const EDUCATION: Education[] = [{ id: "daw" }, { id: "animation" }];

/** Inicio de la experiencia profesional (GreenSlope, marzo 2025) */
export const CAREER_START = new Date(2025, 2, 1);
