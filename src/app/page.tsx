'use client';
import { useState } from 'react';
import { ProjectSelectors } from './components/ProjectLink/ProjectSelectors';
import { ProjectSelectorItem } from './components/ProjectLink/ProjectSelectors.types';
import './global.scss';
import { PROJECTS } from './config/projects';
import { Card } from './components/Card/Card';

const items: ProjectSelectorItem[] = Object.keys(PROJECTS).map((key) => {
  return {
    value: key
  };
});

export default function Home() {
  const [project, setProject] = useState<keyof typeof PROJECTS>('home');
  const selectProject = (item: ProjectSelectorItem) => {
    setProject(item.value as keyof typeof PROJECTS);
  };
  return (
    <div className="o-page">
      <Card projectValue={project} />
      <ProjectSelectors
        onClick={selectProject}
        items={items.map((item) => {
          return { value: item.value, active: project === item.value };
        })}
      />
    </div>
  );
}
