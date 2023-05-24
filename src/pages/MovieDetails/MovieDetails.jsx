import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Card from 'components/Card/Card';
import css from './MovieDetails.module.scss';

const MovieDetails = () => {
  const [responseStatus, setResponseStatus] = useState('ok');
  const [releaseDate, setReleaseDate] = useState('');
  const [posterPath, setPosterPath] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [genresIds, setGenresIds] = useState('');
  const [overview, setOverview] = useState('');
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const prevPath = useRef('');

  useEffect(() => {
    prevPath.current = location;
    // eslint-disable-next-line
  }, []);

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

    getDataMovie();
  }, [movieId]);

  useEffect(() => {
    if (genresIds) {
      setGenres(genresIds.map(({ name }) => name).join(', '));
    }
  }, [genresIds]);

  return (
    // location.state?|если такое свойство существует, то берем вложенное-|.from
    <>
      <Link to={prevPath.current.state?.from} className={css.linkBack}>
        Go back
      </Link>

      {responseStatus === 'ok' ? (
        <div>
          <Card
            posterPath={posterPath}
            title={title}
            releaseDate={releaseDate}
            voteAverage={voteAverage}
            overview={overview}
            genres={genres}
          />

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Suspense
            fallback={
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <p>{responseStatus}</p>
      )}
    </>
  );
};

export default MovieDetails;
