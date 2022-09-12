import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ikeaSigninLogo from '../../images/ikeaLogo2.png';
import { FaArrowLeft } from 'react-icons/fa';

const SignInImage = () => {
  const navigate = useNavigate();

  return (
    <SignInLayoutBox>
      <SignInImageBox>
        <SignInBack>
          <FaArrowLeft
            color="#fff"
            onClick={() => {
              navigate('/');
            }}
          />
        </SignInBack>
        <SignInDiv>
          <img src={ikeaSigninLogo} alt="ikeaSigninLogo" />
          <SignInTitle>
            로그인
            <SignInUnder2>
              외워야 할 비밀번호가 많아 불편하셨죠?
            </SignInUnder2>
            <SignInUnder>
              이제 일회용 코드를 이용하여 간편하게
              로그인하세요.
            </SignInUnder>
            <SignInUnder2>
              * 이메일 또는 휴대폰 번호 최초 인증 후 사용
              가능
            </SignInUnder2>
          </SignInTitle>
          <SignInUnder>
            IKEA.kr - 쿠키 정책 , 개인정보처리방침
            <SignInUnder>
              © Inter IKEA Systems B.V. 1999-2022
            </SignInUnder>
          </SignInUnder>
        </SignInDiv>
      </SignInImageBox>
    </SignInLayoutBox>
  );
};
const SignInLayoutBox = styled.div`
  background-color: #0058a3;
  width: 40%;
  height: 100vh;

  img {
    width: 90px;
    height: 40px;
  }
`;
const SignInImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  padding: 40px 0px;
`;

const SignInBack = styled.div`
  height: 100%;
  margin-left: 30px;
  cursor: pointer;
  font-size: 18px;
`;
const SignInDiv = styled.div`
  height: 100%;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SignInTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #fbd914;
`;

const SignInUnder = styled.div`
  color: #fff;
  font-size: 12px;
`;
const SignInUnder2 = styled.div`
  color: #fff;
  font-size: 12px;
  margin-top: 20px;
`;

export default SignInImage;
