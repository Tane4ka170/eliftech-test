import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const EventsContainer = styled.div`
  margin-top: 20px;
`;

export const BottomBoundary = styled.div`
  height: 10px;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
