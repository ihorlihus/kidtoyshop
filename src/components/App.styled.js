import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;

  background-color: tomato;

  > nav {
    display: flex;
  }
`;

// export const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
