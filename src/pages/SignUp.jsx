import React from 'react';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpImage from '../components/SignUp/SignUpImage';

const SignUp = () => {
  return (
    <div className="flex">
      <SignUpImage />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
