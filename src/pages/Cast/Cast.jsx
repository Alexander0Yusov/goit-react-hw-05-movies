import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.scss';
import CastItem from 'pages/CastItem/CastItem';

const Cast = () => {
  const [dataCast, setDataCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getCastMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=225e339996bc91260b33199c383c8881`
      )
        .then(res => res.json())
        .then(res => {
          const needed = res.cast.map(
            ({ cast_id, character, original_name, profile_path }) => ({
              cast_id,
              character,
              original_name,
              profile_path,
            })
          );

          // console.log(needed);
          setDataCast(needed);
        })
        .catch(er => console.log(er.message));
    };

    getCastMovie();
  }, [movieId]);

  return (
    <div className={css.cast}>
      {dataCast.length > 0 ? (
        <ul className={css.castUl}>
          {dataCast &&
            dataCast.map(
              ({ cast_id, character, original_name, profile_path }) => (
                <CastItem
                  key={cast_id}
                  character={character}
                  original_name={original_name}
                  profile_path={profile_path}
                />
              )
            )}
        </ul>
      ) : (
        'Sorry, No Cast'
      )}
    </div>
  );
};

export default Cast;
