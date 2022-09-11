import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div>
      <div>
        <FaArrowLeft />
        <img
          src="https://kr.accounts.ikea.com/resources/static/logo.png"
          alt="이케아로고"
          width="90px"
        />
      </div>
      <div>
        <h1>
          <span>IKEA Family</span>
          <span>회원가입</span>
        </h1>
      </div>
      <div>
        <span>이미 가입하셨나요?</span>
        <Link to="signin">로그인 하기</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
