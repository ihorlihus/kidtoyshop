import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { MovieItem } from '../components/MovieItem';

const Movies = () => {
  const [movesState] = useState([]);
  const location = useLocation();

  return (
    <main>
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
