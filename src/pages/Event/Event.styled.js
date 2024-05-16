import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const EventContainer = styled.div`
  padding: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const NoParticipantsMessage = styled.p`
  color: #666;
`;

export const BackLink = styled(Link)`
  color: #3c5bb0;
  text-decoration: none;
  margin-bottom: 20px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;
