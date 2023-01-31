import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../API/GetMoves';
import { Button } from './Button';

import Loader from './../components/Loeder';

export const SearchForm = () => {
  const [setMovesState] = useState([]);
  const [searchMovieQwerry, setSearchMovieQwerry] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const moveName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchMovieQwerry === '') {
      return;
    } else {
      setLoader(true);
      getSearchMovies(searchMovieQwerry)
        .then(movies => setMovesState(movies))
        .finally(setLoader(false));
    }
  }, [searchMovieQwerry]);

  useEffect(() => {
    if (moveName !== '') {
      setSearchMovieQwerry(moveName);
    }
  }, [moveName]);

  const onSummit = event => {
    event.preventDefault();
    const value = event.target.name.value;
    setSearchMovieQwerry(value);
    updateQueryString(value);
    event.target.reset();
  };
  return (
    <>
      {' '}
      <form onSubmit={onSummit}>
        <input type="text" name="name" placeholder="Введіть назву" />
        <Button type={'submit'}>Пошук</Button>
      </form>
      {loader && <Loader />}
    </>
  );
};
