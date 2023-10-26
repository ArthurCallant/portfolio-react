'use client';
import { CardProps, ProjectConfig, Title } from './Card.types';
import './Card.scss';
import { PROJECTS } from '@/app/config/projects';
import { useEffect, useState } from 'react';

export const Card = ({ projectValue }: CardProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const project = PROJECTS[projectValue] as ProjectConfig;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderTitle = (title: Title) => {
    if (title.href) {
      return (
        <a className="m-card__title m-card__title-anchor" href={title.href}>
          {title.label}
        </a>
      );
    }
    return <h1 className="m-card__title">{title.label}</h1>;
  };

  return isMounted ? (
    <div className="m-card">
      {renderTitle(project.title)}
      <div className="m-card__divider"></div>
      <p className="m-card__description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
    </div>
  ) : null;
};
