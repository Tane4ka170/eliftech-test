import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #3c5bb0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #3c5bb0;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ErrorMsg = styled.p`
  color: red;
`;

export const RadioButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const RadioButtonLabel = styled.label`
  margin-right: 10px;
  color: #3c5bb0;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;

  input[type='radio'] {
    margin-right: 5px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3c5bb0;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #90286a;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
