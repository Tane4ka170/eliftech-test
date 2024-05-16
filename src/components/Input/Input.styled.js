import styled from 'styled-components';

export const InputField = styled.input`
  padding: 10px;
  border: 2px solid #3c5bb0;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #90286a;
  }

  &::placeholder {
    color: #999;
  }
`;
