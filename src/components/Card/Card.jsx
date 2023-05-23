import { useEffect, useRef, useState } from 'react';
import css from './Card.module.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Card = () => {
  const [movieId, setMovieId] = useState('');
  const [responseStatus, setResponseStatus] = useState('ok');
  const [releaseDate, setReleaseDate] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [genresIds, setGenresIds] = useState('');
  const [overview, setOverview] = useState('');
  const [title, setTitle] = useState('');
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
          if (res.id) {
            // console.log(res);
            const {
              release_date,
              poster_path,
              vote_average,
              genres,
              overview,
              title,
            } = res;

            setReleaseDate(release_date);
            setPosterPath(poster_path);
            setVoteAverage(vote_average);
            setGenresIds(genres);
            setOverview(overview);
            setTitle(title);
          }
          if (res.success === false) {
            // console.log(res);
            setResponseStatus(res.status_message);
            throw new Error(`${res.status_message}`);
          }
        })
        .catch(er => console.log(er.message));
    };

    // условие от каскада запросов. так он всего один
    // и ответ валидный когда запрос одиночный
    if (movieId) {
      getDataMovie();
    }
  }, [movieId]);

  useEffect(() => {
    if (genresIds) {
      setGenres(genresIds.map(({ name }) => name).join(', '));
    }
  }, [genresIds]);

  return (
    // { release_date, poster_path, vote_average, genres, overview }
    // location.state?|если такое свойство существует, то берем вложенное-|.from
    <>
      <Link to={prevPath.current.state?.from} className={css.linkBack}>
        Go back
      </Link>

      {responseStatus === 'ok' ? (
        <div>
          <div className={css.card}>
            <div className={css.thumb}>
              <img
                src={`https://image.tmdb.org/t/p/original/${posterPath}`}
                alt="film backdrop"
              ></img>
            </div>
            <div className={css.description}>
              <h3>{`${title} (${releaseDate})`}</h3>

              <p>{`User Score: ${(Number(voteAverage) * 10).toFixed(0)}%`}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
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
        </div>
      ) : (
        <p>{responseStatus}</p>
      )}
    </>
  );
};

export default Card;
