import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.scss';
import { useEffect } from 'react';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const home = document.querySelector('[href="/"]');
    const movies = document.querySelector('[href="/movies"]');
    const isHomePage = !location.pathname.split('/').includes('movies');

    const resetColor = () => {
      // eslint-disable-next-line
      [home, movies].map(item => {
        if (item.classList.contains(`${css.isActive}`)) {
          item.classList.remove(`${css.isActive}`);
        }
      });
    };

    if (isHomePage) {
      resetColor();
      home.classList.add(`${css.isActive}`);
    }
    if (!isHomePage) {
      resetColor();
      movies.classList.add(`${css.isActive}`);
    }
  }, [location.pathname]);

  return (
    <>
      <ul className={css.headerUl}>
        <li className={css.headerLi}>
          <Link to="/" className={css.headerLink} data-navigate="home">
            Home
          </Link>
        </li>
        <li className={css.headerLi}>
          <Link to="movies" className={css.headerLink} data-navigate="movies">
            Movies
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;