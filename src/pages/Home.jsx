import { getTrandMovies } from '../API/GetMoves';
import { useState, useEffect } from 'react';
import { MovieItem } from '../components/MovieItem';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.main`
  background-color: aqua;
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  margin: 0;
  padding: 8px;
`;

// const ItemContainer = styled.a`
//   background-color: blue;
// `;

export const Home = () => {
  const [trandMovesState, setTrendMovesState] = useState([]);
  const location = useLocation();

  async function fetchTrendMoves() {
    const moves = await getTrandMovies();
    setTrendMovesState(moves);
  }

  useEffect(() => {
    fetchTrendMoves();
  }, []);

  return (
    <MainContainer>
      <ListContainer>
        {trandMovesState.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
            display="grid"
          >
            {MovieItem(movie)}
          </Link>
        ))}
      </ListContainer>
    </MainContainer>
  );
};
