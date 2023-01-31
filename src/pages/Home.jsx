import { getTrandItems } from '../API/GetMoves';
import { useState, useEffect } from 'react';
import { MovieItem } from '../components/MovieItem';
import { Link, useLocation } from 'react-router-dom';
import { SearchForm } from '../components/SearchForm';

import styled from 'styled-components';

export const Home = () => {
  const [trandMovesState, setTrendMovesState] = useState([]);
  const location = useLocation();

  async function fetchTrendItems() {
    const moves = await getTrandItems();
    setTrendMovesState(moves);
  }

  useEffect(() => {
    fetchTrendItems();
  }, []);

  return (
    <MainContainer>
      <Title>Товари тижня</Title>
      <ListContainer>
        {trandMovesState.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
            display="grid"
            style={{
              width: 'max-content',
              border: 'solid 4px tomato',
            }}
          >
            {MovieItem(movie)}
          </Link>
        ))}
      </ListContainer>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  background-color: aqua;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: max-content;
  height: min-content;
  color: tomato;
  padding: 2px;
  border: solid 4px green;
`;

const ListContainer = styled.ul`
  display: grid;
  width: max-content;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 0;
  padding: 8px;

  background-color: gray;
  border: solid 2px green;
`;
