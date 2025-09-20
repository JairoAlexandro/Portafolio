import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, ExternalLink, Github } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import { useTranslation } from '../../hooks/useTranslation';

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const { projects } = useProjects();

    const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});

    const toggleExpanded = (projectId: string) => {
        setIsExpanded(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="w-full py-20 px-4" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {t('projects.title')}
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {t('projects.subtitle')}
                </p>
            </motion.div>


            {/* Grid de proyectos */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                            >
                                {/* Imagen del proyecto */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                                            ⭐ {t('projects.featured')}
                                        </div>
                                    )}
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className={`text-gray-300 leading-relaxed transition-all duration-300 ${
                                        isExpanded[project.id] ? 'line-clamp-none' : 'line-clamp-3'
                                    }`}>
                                        {t(project.description)}
                                    </p>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Métricas */}
                                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                                        {(project.githubStars || 0) > 0 && (
                                            <div className="flex items-center gap-1">
                                                <Star size={16} className="text-yellow-500" />
                                                <span>{project.githubStars}</span>
                                            </div>
                                        )}
                                        {(project.demoVisits || 0) > 0 && (
                                            <div className="flex items-center gap-1">
                                                <Eye size={16} className="text-blue-500" />
                                                <span>{project.demoVisits}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Botones */}
                                    <div className="flex gap-3 mt-6">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors group-hover:bg-blue-500"
                                        >
                                            <ExternalLink size={16} />
                                            {t('projects.live_demo')}
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                                        >
                                            <Github size={16} />
                                            {t('projects.view_code')}
                                        </a>
                                    </div>

                                    {/* Botón expandir/contraer */}
                                    <button
                                        onClick={() => toggleExpanded(project.id)}
                                        className="w-full mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                                    >
                                        {isExpanded[project.id] ? t('projects.show_less') : t('projects.read_more')}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="text-gray-400 text-xl mb-4">📁</div>
                        <p className="text-gray-400 text-lg">{t('projects.no_projects')}</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Projects;
