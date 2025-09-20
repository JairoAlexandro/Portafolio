import { useMemo } from 'react';
import projectsData from '../data/projects';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demo: string;
  github: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'backend' | 'fullstack';
  featured: boolean;
  githubStars?: number;
  demoVisits?: number;
}

export const useProjects = () => {
  const projects: Project[] = useMemo(() => {
    return projectsData.map((project, index) => ({
      ...project,
      id: `project-${index}`,
      technologies: project.technologies || [],
      category: project.category || 'web',
      featured: project.featured || false,
      githubStars: project.githubStars || 0,
      demoVisits: project.demoVisits || 0,
    }));
  }, []);

  return {
    projects,
  };
};
