import css from './HomeItem.module.scss';
import { Link } from 'react-router-dom';

const HomeItem = ({ id, title }) => {
  return (
    <div className={css.homeItem}>
      <Link to={`movies/${id}`}>{title}</Link>
    </div>
  );
};

export default HomeItem;
