import css from './Card.module.scss';

const Card = ({
  posterPath,
  title,
  releaseDate,
  voteAverage,
  overview,
  genres,
}) => {
  return (
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
  );
};

export default Card;
