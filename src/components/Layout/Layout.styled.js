import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #3c5bb0;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #eff341;
    }
  }
`;

export const Main = styled.main`
  padding: 20px;
`;
