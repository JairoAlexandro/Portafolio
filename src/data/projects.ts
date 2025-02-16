interface Project {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string;
}

const projects: Project[] = [
    {
        title: "Chicken Wild Tournament",
        description: "Interactive web application optimized for mobile, tablet, and desktop. Players compete in 1vs1 matches where each one receives an egg, and the winner is determined by the egg's rank.",
        image: "../src/images/faviconCWT.png",
        github: "https://github.com/JairoAlexandro/Chicken-Wild-Tournament",
        demo: "https://cwt-five.vercel.app/"
    },
    {
        title: "YOURGAINZ",
        description: "Platform with over 200 exercises explained through animations, designed to guide users in their workouts. It includes a ranking system where each user can log and share their personal weightlifting records, promoting motivation and competitiveness.",
        image: "../src/images/YourGainz_Logo.png",
        github: "https://github.com/Nando218/YourGainz",
        demo: "#"
    },
    {
        title: "To-Do List",
        description: "This is a web-based To-Do List application built with HTML, CSS, and JavaScript. It uses Bootstrap for layout and user interface design. The application allows users to add, complete, and delete tasks, as well as filter tasks by status (all, completed, not completed). It also includes both dark mode and light mode.",
        image: "../src/images/to-do.png",
        github: "https://github.com/JairoAlexandro/ToDoList",
        demo: "https://to-do-list-lake-rho.vercel.app/"
    },
    {
        title: "Hotel Johnnie Walker",
        description: "The Hotel Johnnie Walker application allows managing hotel bookings, including customer search, booking visualization, and stay calculation. It also handles restaurant reservations, integrates with an external API for data, and performs form validation. Best practices are implemented using React.js, with hooks like useState and useEffect, and components are tested with Jest and Vitest.",
        image: "../src/images/Johnnie.png",
        github: "https://github.com/RubenMRDev/hotelJohnnieWalker",
        demo: "#"
    }
];

export default projects;

  