import { Project } from '../hooks/useProjects';

const projects: Omit<Project, 'id'>[] = [
    {
        title: "PicanCode",
        description: "projects.list.picanCode.description",
        image: "https://res.cloudinary.com/dieclsppc/image/upload/v1751441568/Captura_de_pantalla_2025-07-02_093015_hokxjy.png",
        github: "https://github.com/JairoAlexandro/PicanCode",
        demo: "https://jairo.slope.es/login",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
        category: "fullstack",
        featured: true,
        githubStars: 15,
        demoVisits: 1200
    },
    {
        title: "Hotel Johnnie Walker",
        description: "projects.list.hotelJohnnieWalker.description",
        image: "https://res.cloudinary.com/dieclsppc/image/upload/f_auto,q_auto/v1/portafolio/b7lgbxbecatwcn6bgkyz",
        github: "https://github.com/RubenMRDev/hotelJohnnieWalker",
        demo: "https://hoteljohnniewalker.vercel.app/",
        technologies: ["React", "JavaScript", "CSS", "HTML", "Jest", "Vitest"],
        category: "web",
        featured: false,
        githubStars: 8,
        demoVisits: 450
    },
    {
        title: "Chicken Wild Tournament",
        description: "projects.list.chickenWildTournament.description",
        image: "https://res.cloudinary.com/dieclsppc/image/upload/f_auto,q_auto/v1/portafolio/fjz3ke1eblvqimjn4iqq",
        github: "https://github.com/JairoAlexandro/Chicken-Wild-Tournament",
        demo: "https://cwt-five.vercel.app/",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        category: "web",
        featured: true,
        githubStars: 12,
        demoVisits: 800
    }
];

export default projects;

  