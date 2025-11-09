import projectsData from './projects.json';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = projectsData as Project[];

export default projects;