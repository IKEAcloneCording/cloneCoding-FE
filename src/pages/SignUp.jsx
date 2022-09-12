import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpImage from '../components/SignUp/SignUpImage';
import Container from '../components/Layout/Container';

const SignUp = () => {
  return (
    <Container>
      <ContatinerBox>
        <SignUpImage />
        <SignUpForm />
      </ContatinerBox>
    </Container>
  );
};

const ContatinerBox = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
`;

export default SignUp;
