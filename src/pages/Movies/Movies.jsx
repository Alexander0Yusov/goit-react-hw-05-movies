import { Link, useLocation } from 'react-router-dom';
import css from './Movies.module.scss';

import { useEffect, useState } from 'react';

const Movies = () => {
  const [response, setResponse] = useState([]);
  const [inputValue, setInputValue] = useState('fast');
  const location = useLocation();

  const submitHandler = e => {
    e.preventDefault();
    console.log(inputValue);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=225e339996bc91260b33199c383c8881&query=${inputValue}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.results);
        setResponse(res.results);
      })
      .catch(er => er.message);
  };

  useEffect(() => {}, [inputValue]);

  const inputHandler = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={submitHandler}>
        <input value={inputValue} onInput={inputHandler} />
        <button type="submit">Search</button>
      </form>

      <ul className={css.gallery}>
        {response &&
          response.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link
                  className={css.link}
                  to={`${id}`}
                  state={{ from: location }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
