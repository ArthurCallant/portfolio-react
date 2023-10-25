import { PROJECTS } from '@/app/config/projects';
import { ProjectConfig, ProjectProps } from './Project.types';
import Image from 'next/image';
import './Project.scss';

export const Project = ({ projectValue }: ProjectProps) => {
  const project = PROJECTS[projectValue] as ProjectConfig;
  return (
    <div className="m-project">
      <div className="m-project__left">
        <h1 className="m-project__title">{project.title}</h1>
        <p className="m-project__description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
      </div>
      <div className="m-project__right">
        {project.image ? (
          <div className="m-project__image">
            <Image src={project.image.src} alt={project.image.alt} fill />
          </div>
        ) : null}
      </div>
    </div>
  );
};
