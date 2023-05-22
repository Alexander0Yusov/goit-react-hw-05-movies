import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.scss';
import { useEffect, useRef } from 'react';

const Header = () => {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const home = document.querySelector('[href="/"]');
    const movies = document.querySelector('[href="/movies"]');

    const resetColor = () => {
      [home, movies].map(item => {
        if (item.classList.contains(`${css.isActive}`)) {
          item.classList.remove(`${css.isActive}`);
        }
      });
    };

    if (location.pathname === '/') {
      resetColor();
      home.classList.add(`${css.isActive}`);
    }
    if (location.pathname === '/movies') {
      resetColor();
      movies.classList.add(`${css.isActive}`);
    }
  }, [location.pathname]);

  const handlerClick = e => {
    // console.log(e.target);
    // ref.current.setAttribute('data-foo', 'bar');
    // console.log(ref.current.getAttribute('data-foo'));
  };

  return (
    <>
      <ul className={css.headerUl}>
        <li className={css.headerLi}>
          <Link
            ref={ref}
            to="/"
            className={css.headerLink}
            onClick={handlerClick}
            data-navigate="home"
          >
            Home
          </Link>
        </li>
        <li className={css.headerLi}>
          <Link
            to="movies"
            className={css.headerLink}
            onClick={handlerClick}
            data-navigate="movies"
          >
            Movies
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
