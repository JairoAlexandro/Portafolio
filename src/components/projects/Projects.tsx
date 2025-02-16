import React, { useEffect, useState } from 'react';
import projectsData from '../../data/projects';

interface Project {
    title: string;
    description: string;
    image: string;
    demo: string;
    github: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div className='align-center justify-center mt-10' id="projects">
            <h1 className=' text-4xl text-white font-bold border-b-4 border-white p-4' style={{ borderImage: "linear-gradient(to right, transparent, white, transparent) 1"}}>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-8">
            {projects.length > 0 ? (
            projects.map((project, index) => (
            <div key={index} className="bg-[#161616] border-[#0f0f0f] border-2 shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                <h2 className="text-3xl font-bold mt-4 text-white">{project.title}</h2>
                <div className="p-4 flex flex-col justify-center items-center flex-grow">
                <img className="w-full h-auto mb-4 object-cover rounded-lg" src={project.image} alt={project.title} />
                <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl">{project.description}</p>
                </div>
                <div className="flex justify-around p-4 mt-auto mb-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 rounded-full text-white px-9 py-3 hover:bg-blue-700">
                    Proyect
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-full text-white px-9 py-3 hover:bg-gray-900">
                    GitHub
                </a>
                </div>
            </div>
            ))
            ) : (
            <p className="text-center col-span-full text-gray-600">No hay proyectos disponibles.</p>
            )}
            </div>
        </div>
    );
};

export default Projects;
