import Form from 'components/Form/Form';
import React from 'react';
import { Link } from 'react-router-dom';
import { BackLink, RegisterContainer } from './Register.styled';

const Register = () => {
  return (
    <RegisterContainer>
      <BackLink to="/">Go back</BackLink>
      <Form />
    </RegisterContainer>
  );
};

export default Register;
