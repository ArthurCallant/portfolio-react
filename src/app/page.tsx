'use client';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { ProjectSelectors } from './components/ProjectLink/ProjectSelectors';
import { ProjectSelectorItem } from './components/ProjectLink/ProjectSelectors.types';
import './global.scss';
import { Project } from './components/Project/Project';
import { PROJECTS } from './config/projects';

const items: ProjectSelectorItem[] = [
  { value: 'home' },
  { value: 'core-components-react' },
  { value: 'single-content-sync' },
  { value: 'huis-onder-de-notelaar' }
];

export default function Home() {
  const [project, setProject] = useState<keyof typeof PROJECTS>('home');
  const selectProject = (item: ProjectSelectorItem) => {
    setProject(item.value as keyof typeof PROJECTS);
  };
  return (
    <>
      <ProjectSelectors
        onClick={selectProject}
        items={items.map((item) => {
          return { value: item.value, active: project === item.value };
        })}
      />
      <Header />
      <Project projectValue={project} />
    </>
  );
}
