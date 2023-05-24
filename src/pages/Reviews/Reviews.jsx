import { useEffect, useState } from 'react';
import css from './Reviews.module.scss';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=225e339996bc91260b33199c383c8881`
      )
        .then(res => res.json())
        .then(res => {
          const needed = res.results.map(({ id, author, content }) => ({
            id,
            author,
            content,
          }));
          //  console.log(needed);
          setReviews(needed);
        })
        .catch(er => console.log(er.message));
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.reviewsUl}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewLi}>
              <p>Author: {author}.</p>
              <p> {content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Sorry, No Reviews'
      )}
    </div>
  );
};

export default Reviews;
