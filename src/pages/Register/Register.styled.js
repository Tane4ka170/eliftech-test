import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  padding: 20px;
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
