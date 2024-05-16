import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Logo, Main, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">Events</Logo>
        <Nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
