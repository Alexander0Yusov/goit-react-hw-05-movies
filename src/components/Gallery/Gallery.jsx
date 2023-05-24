import css from './Gallery.module.scss';
import { Link } from 'react-router-dom';

const Gallery = ({ items, location, pathTo }) => {
  return (
    <ul className={css.gallery}>
      {items.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              className={css.link}
              to={`${pathTo}${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
