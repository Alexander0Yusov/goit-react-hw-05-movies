import css from './Gallery.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  location: PropTypes.object,
  pathTo: PropTypes.string,
};
