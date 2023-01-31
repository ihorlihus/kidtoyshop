import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchForm } from '../components/SearchForm';

import Loader from './Loeder';

export const Layout = () => {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <Container>
      <Header>
        <Link to="/">Головна</Link>
        <Link to="/movies">Корзина</Link>
        {location === '/' && <SearchForm />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
