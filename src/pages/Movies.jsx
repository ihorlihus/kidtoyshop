import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { getSearchMovies } from '../API/GetMoves';
import { MovieItem } from '../components/MovieItem';
import Loader from './../components/Loeder';

const Movies = () => {
  const [movesState, setMovesState] = useState([]);
  const [searchMovieQwerry, setSearchMovieQwerry] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const moveName = searchParams.get('name') ?? '';
  const location = useLocation();

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
    <main>
      <form onSubmit={onSummit}>
        <input type="text" name="name" placeholder="Search movies..." />
        <button type={'submit'}>Search</button>
      </form>
      {loader && <Loader />}
      <Outlet />
      <ul>
        {movesState?.map(movie => (
          <Link to={`${movie.id}`} key={movie.id} state={{ from: location }}>
            {MovieItem(movie)}
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
