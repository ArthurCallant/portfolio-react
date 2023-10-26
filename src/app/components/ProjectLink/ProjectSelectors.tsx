'use client';
import { ProjectSelectorItem, ProjectSelectorsProps } from './ProjectSelectors.types';
import './ProjectSelectors.scss';
import { classNames } from '@/app/utils/dom.utils';
import { KeyboardEvent } from 'react';

export const ProjectSelectors = ({ items, onClick }: ProjectSelectorsProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, item: ProjectSelectorItem) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return onClick(item);
    }
  };
  const renderItems = (items: ProjectSelectorItem[]) => {
    return items.map((item, index) => {
      const classes = classNames({
        'm-project-selectors__item': true,
        'm-project-selectors__item--active': !!item.active,
        'm-project-selectors__item--home': index === 0
      });
      return (
        <div
          key={index}
          className={classes}
          onClick={() => onClick(item)}
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, item)}
        ></div>
      );
    });
  };

  return <div className="m-project-selectors">{renderItems(items)}</div>;
};
