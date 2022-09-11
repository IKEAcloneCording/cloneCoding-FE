import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpImage = () => {
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
        <span>IKEA Family</span>
        <span>회원가입</span>
      </div>
      <div>
        <span>이미 가입하셨나요?</span>
        <Link to="/signin">로그인 하기</Link>
      </div>
      <div>
        <img
          src="https://i.ibb.co/wgsDzz5/signup.png"
          alt="회원가입 이미지"
        />
      </div>
    </div>
  );
};

export default SignUpImage;
