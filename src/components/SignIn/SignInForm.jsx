import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __login } from '../../redux/modules/SignInSlice';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // data 입력 state
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = async (e) => {
    // 새로고침 막기
    e.preventDefault();
    // 가입되지 않은 유저 확인
    const loginState = await dispatch(__login(loginData));
    if (loginState.payload.success === true) {
      alert('이케아에 오신 것을 환영합니다 :)');
      navigate('/');
    } else {
      alert(loginState.payload.error.message);
    }
  };

  return (
    <SignInLayoutBox>
      <SignInDiv onSubmit={submitLogin}>
        <div>이메일 또는 확인된 휴대폰 번호</div>
        <input
          type="email"
          id="email"
          onChange={changeInput}
          required
        />
        <p>
          다른 로그인 옵션 :
          <span>일회용 코드로 로그인</span>
        </p>
        <div>비밀번호</div>
        <input
          id="password"
          type="password"
          onChange={changeInput}
          required
          minLength={8}
        />
        <LoginButton type="submit">로그인</LoginButton>
        <div>
          IKEA 계정이 없으신가요? 지금 바로 만들어보세요.
        </div>
        <button
          type="button"
          onClick={() => {
            navigate('/signup');
          }}
        >
          개인 회원 가입하기
        </button>
      </SignInDiv>
    </SignInLayoutBox>
  );
};
const SignInLayoutBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 45px;
    margin-bottom: 5px;
    padding: 0 20px;
    font-size: 15px;
    border: 1px solid #999;
    border-radius: 5px;
  }
  button {
    border-radius: 50px;
    border: 1px solid #777;
    padding: 18px 100px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 14px;
    &:hover {
      border: 1px solid #000;
    }
  }
  div {
    margin-top: 35px;
    font-weight: bold;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const SignInDiv = styled.form`
  width: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
  font-size: 13px;
`;

const LoginButton = styled.button`
  background-color: #0058a3;
  color: #fff;
  border: none;
  margin-bottom: 25px;
  &:hover {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    );
  }
`;
export default SignInForm;
