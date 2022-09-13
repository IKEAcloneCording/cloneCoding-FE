import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <SideMenuBox>
      <SideOpen>
        <SideDiv>
          <div>
            <SideTitle>
              Hej
              <LoginButton
                onClick={() => {
                  navigate('/signin');
                }}
              >
                로그인
              </LoginButton>
            </SideTitle>
            <hr />
          </div>
          <SideSubDiv
            onClick={() => {
              navigate('/signup');
            }}
          >
            <SideSubTitle>
              IKEA 계정 생성하기
              <p>
                계정을 생성하여 IKEA Family 클럽에 지금
                가입해보세요. 가입은 무료입니다!
              </p>
            </SideSubTitle>

            <SideButton>
              <BiChevronRight />
            </SideButton>
          </SideSubDiv>
          <hr />
          <SideSubDiv
            onClick={() => {
              navigate('/signup');
            }}
          >
            <SideSubTitle>
              IKEA for Business 계정 생성하기
              <p>
                IKEA 비즈니스 계정을 생성하여 다양한
                비즈니스 회원 혜택을 받아보세요
              </p>
            </SideSubTitle>
            <SideButton>
              <BiChevronRight />
            </SideButton>
          </SideSubDiv>
        </SideDiv>
        <ul>
          <li>로그인</li>
          <li>구매 내역</li>
          <li>위시리스트</li>
          <li>플래너</li>
          <li>배송 조회</li>
        </ul>
      </SideOpen>
    </SideMenuBox>
  );
};

const SideMenuBox = styled.div`
  width: 100%;
`;
const SideOpen = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  z-index: 2;
  position: absolute;
  right: 0;
  ul {
    padding: 30px 50px;
  }
  li {
    margin-bottom: 15px;
    font-size: 14px;
    cursor: pointer;
  }
  hr {
    border: 0.5px solid #3e9bed;
    width: 100%;
  }
  div {
  }
`;

const SideDiv = styled.div`
  background-color: #0058a3;
  width: 100%;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const SideSubDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SideButton = styled.button`
  display: flex;
  border-radius: 100%;
  background-color: #fff;
  padding: 5px;
  margin-left: 20px;
  font-size: 30px;
`;

const SideTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;
const LoginButton = styled.button`
  font-size: 13px;
  color: #000;

  border-radius: 20px;
  background-color: #fff;
  padding: 8px 20px;
`;
const SideSubTitle = styled.div`
  margin: 20px 0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 12px;
    margin-top: 5px;
  }
`;

export default SideMenu;
