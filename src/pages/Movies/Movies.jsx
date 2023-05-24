import { useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.scss';

import { useEffect, useState } from 'react';
import Gallery from 'components/Gallery/Gallery';
import Form from 'components/Form/Form';

const Movies = () => {
  const [response, setResponse] = useState([]);
  const [responseStatus, setResponseStatus] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const inputValue = searchParams.get('query') || '';

  const location = useLocation();

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=225e339996bc91260b33199c383c8881&query=${inputValue}`
    )
      .then(res => res.json())
      .then(res => {
        setResponse(res.results);
      })
      .catch(er => er.message);
  };

  const submitHandler = async e => {
    e.preventDefault();

    inputValue ? await getData() : alert('Enter something, please');
    if (response.length === 0) {
      setResponseStatus('Not found');
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [location.pathname]);

  const inputHandler = e => {
    setSearchParams({ query: `${e.target.value}` });
  };

  return (
    <>
      <Form
        submitHandler={submitHandler}
        inputHandler={inputHandler}
        inputValue={inputValue}
      ></Form>

      {response.length !== 0 ? (
        <Gallery items={response} location={location} pathTo={''} />
      ) : (
        <p className={css.responseParagraph}>{responseStatus} </p>
      )}
    </>
  );
};

export default Movies;
