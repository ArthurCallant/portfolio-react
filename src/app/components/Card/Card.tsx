import { CardProps } from './Card.types';
import './Card.scss';
import Image from 'next/image';

export const Card = ({ title, description, image, alt, href }: CardProps) => {
  const renderTitle = () => {
    if (href) {
      return (
        <a className="m-card__title m-card__title--anchor" href={href}>
          {title}
        </a>
      );
    }
    return <h1 className="m-card__title">{title}</h1>;
  };
  return (
    <div className="m-card">
      {image && <Image src={image} alt={alt || 'Card image'} />}
      {title && renderTitle()}
      {description && <p className="m-card__description">{description}</p>}
    </div>
  );
};
