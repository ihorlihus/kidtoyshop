import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { Suspense } from 'react';

import Loader from './Loeder';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
