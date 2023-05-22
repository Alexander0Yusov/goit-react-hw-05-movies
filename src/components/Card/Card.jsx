import { useEffect, useRef, useState } from 'react';
import css from './Card.module.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Card = () => {
  const [movieId, setMovieId] = useState('');
  const [dataMovie, setDataMovie] = useState('');
  const [genres, setGenres] = useState('');
  const location = useLocation();
  const prevPath = useRef('');

  useEffect(() => {
    prevPath.current = location;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setMovieId(location.pathname.split('/')[2]);
  }, [location.pathname]);

  useEffect(() => {
    const getDataMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=225e339996bc91260b33199c383c8881`
      )
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          const {
            release_date,
            poster_path,
            vote_average,
            genres,
            overview,
            title,
          } = res;

          setDataMovie({
            release_date,
            poster_path,
            vote_average,
            genres,
            overview,
            title,
          });
        })
        .catch(er => console.log(er.message));
    };

    // условие спасает от каскада запросов. так он всего один
    // и ответ валидный когда запрос одиночный
    if (movieId) {
      getDataMovie();
    }
  }, [movieId, setDataMovie]);

  useEffect(() => {
    if (dataMovie) {
      setGenres(dataMovie.genres.map(({ name }) => name).join(', '));
    }
  }, [dataMovie]);

  const clickHandler = () => {
    // console.log(location);
    // console.log(prevPath.current);
  };

  return (
    // { release_date, poster_path, vote_average, genres, overview }
    // location.state?|если такое свойство существует, то берем вложенное-|.from
    <>
      <Link
        onClick={clickHandler}
        to={prevPath.current.state?.from}
        className={css.linkBack}
      >
        Go back
      </Link>

      <div className={css.card}>
        <div className={css.thumb}>
          <img
            src={`https://image.tmdb.org/t/p/original/${dataMovie.poster_path}`}
            alt="film backdrop"
          ></img>
        </div>
        <div className={css.description}>
          <h3>{`${dataMovie.title} (${dataMovie.release_date})`}</h3>

          <p>{`User Score: ${(Number(dataMovie.vote_average) * 10).toFixed(
            0
          )}%`}</p>
          <h3>Overview</h3>
          <p>{dataMovie.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Card;
