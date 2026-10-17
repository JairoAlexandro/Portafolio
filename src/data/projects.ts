export interface Project {
  id: string;
  title: string;
  /** Clave de traducción de la descripción */
  description: string;
  image: string;
  demo: string;
  github: string;
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "picanCode",
    title: "PicanCode",
    description: "projects.list.picanCode.description",
    image:
      "https://res.cloudinary.com/dieclsppc/image/upload/f_auto,q_auto/v1751441568/Captura_de_pantalla_2025-07-02_093015_hokxjy.png",
    github: "https://github.com/JairoAlexandro/PicanCode",
    demo: "https://jairo.slope.es/login",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    featured: true,
  },
  {
    id: "chickenWildTournament",
    title: "Chicken Wild Tournament",
    description: "projects.list.chickenWildTournament.description",
    image:
      "https://res.cloudinary.com/dieclsppc/image/upload/f_auto,q_auto/v1/portafolio/fjz3ke1eblvqimjn4iqq",
    github: "https://github.com/JairoAlexandro/Chicken-Wild-Tournament",
    demo: "https://cwt-five.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    id: "hotelJohnnieWalker",
    title: "Hotel Johnnie Walker",
    description: "projects.list.hotelJohnnieWalker.description",
    image:
      "https://res.cloudinary.com/dieclsppc/image/upload/f_auto,q_auto/v1/portafolio/b7lgbxbecatwcn6bgkyz",
    github: "https://github.com/RubenMRDev/hotelJohnnieWalker",
    demo: "https://hoteljohnniewalker.vercel.app/",
    technologies: ["React", "JavaScript", "CSS", "Jest", "Vitest"],
  },
];

export default projects;
