import { PROJECTS } from '@/app/config/projects';

export interface ProjectProps {
  projectValue: keyof typeof PROJECTS;
}

export interface ProjectConfig {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}
