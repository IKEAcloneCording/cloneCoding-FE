import React from 'react';
import SignInForm from '../components/SignIn/SignInForm';
import SignInImage from '../components/SignIn/SignInImage';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <SignInBox>
      <SignInImage />
      <SignInForm />
    </SignInBox>
  );
};

const SignInBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
`;
export default SignIn;
