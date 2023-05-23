import { useEffect, useState } from 'react';
import css from './Cast.module.scss';
import { useParams } from 'react-router-dom';

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

    if (movieId) {
      getCastMovie();
    }
  }, [movieId]);

  return (
    <div className={css.cast}>
      {dataCast.length > 0 ? (
        <ul className={css.castUl}>
          {dataCast &&
            dataCast.map(
              ({ cast_id, character, original_name, profile_path }) => (
                <li key={cast_id} className={css.castLi}>
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
