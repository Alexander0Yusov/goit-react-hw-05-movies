import css from './CastItem.module.scss';
import PropTypes from 'prop-types';

const CastItem = ({ character, original_name, profile_path }) => {
  return (
    <li className={css.castLi}>
      <div className={css.thumb}>
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt="person portrait"
          ></img>
        ) : (
          '|No photo|'
        )}
      </div>
      <p>{original_name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;

CastItem.propTypes = {
  character: PropTypes.string,
  original_name: PropTypes.string,
  profile_path: PropTypes.string,
};
