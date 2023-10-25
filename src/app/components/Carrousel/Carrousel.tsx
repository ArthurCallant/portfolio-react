import { CarrouselProps } from './Carrousel.types';
import './Carrousel.scss';

export const Carrousel = ({ children }: CarrouselProps) => {
  return <div className="m-carrousel">{children}</div>;
};
