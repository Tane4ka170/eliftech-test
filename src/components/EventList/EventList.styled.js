import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  color: #3c5bb0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  margin: 0;
  color: #666;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionLink = styled(NavLink)`
  color: #3c5bb0;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #3c5bb0;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3c5bb0;
    color: #ffffff;
  }
`;
