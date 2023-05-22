import { useEffect, useState } from 'react';
import css from './Home.module.scss';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [dayTrends, setDayTrends] = useState('');
  const location = useLocation();

  useEffect(() => {
    const getTrends = () => {
      fetch(
        'https://api.themoviedb.org/3/trending/all/day?api_key=225e339996bc91260b33199c383c8881'
      )
        .then(res => res.json())
        .then(res => {
          // console.log(res.results);
          const params = res.results.map(({ id, title, name }) => {
            return { id, title: name || title };
          });
          setDayTrends(params);
        })
        .catch(er => console.log(er.message));
    };

    getTrends();
  }, []);

  return (
    <div className={css.home}>
      <h3>Gallery 'week trands'</h3>
      <ul>
        {dayTrends &&
          dayTrends.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;