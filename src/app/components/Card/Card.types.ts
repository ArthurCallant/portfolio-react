import { PROJECTS } from '@/app/config/projects';

export interface CardProps {
  projectValue: keyof typeof PROJECTS;
}

export interface ProjectConfig {
  title: Title;
  description: string;
}

export interface Title {
  label: string;
  href?: string;
}
