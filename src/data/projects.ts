export interface Project {
  id: string;
  title: string;
  /** Clave de traducción de la descripción */
  description: string;
  /** Captura del proyecto (se muestra a pantalla completa) */
  image?: string;
  /** Icono de la app: se muestra centrado sobre un fondo con el color de marca */
  logo?: { src: string; color: string };
  demo: string;
  github: string;
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "docFill",
    title: "DocFill",
    description: "projects.list.docFill.description",
    logo: {
      src: "https://docfill-app.vercel.app/icons/icon-512.png",
      color: "#2f5bea",
    },
    github: "https://github.com/JairoAlexandro/DocFill",
    demo: "https://docfill-app.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Tesseract.js",
      "pdf-lib",
      "PWA",
    ],
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
