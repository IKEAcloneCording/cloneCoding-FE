import React from 'react';
import styled, { keyframes } from 'styled-components';

import { sideOpen } from '../../redux/modules/HeaderSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BiChevronRight } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

const SideMenu = () => {
  const isOpen = useSelector(
    (state) => state.header.isOpen
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sideSign = () => {
    dispatch(sideOpen(!isOpen));
  };
  console.log(isOpen);
  return (
    <>
      {isOpen ? (
        <SideOpen>
          <SideDiv>
            <div>
              <CloseButton onClick={() => sideSign()}>
                <GrFormClose />
              </CloseButton>
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
      ) : (
        <SideClose />
      )}
    </>
  );
};
const open = keyframes`
  0% {
    right:-1000px
  }
  100% {
    right:0
  }
`;
const close = keyframes`
  0% {
    right: 0
  }
  100% {
    right:-1000px
  }
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
  animation: ${open} 0.3s linear backwards;
`;
const SideClose = styled.div`
  background-color: #0058a3;
  display: flex;
  width: 500px;
  height: 100vh;
  z-index: 2;
  position: absolute;
  right: -1000px;
  animation: ${close} 0.3s linear backwards;
`;
const SideDiv = styled.div`
  background-color: #0058a3;
  width: 100%;
  padding: 30px 50px;
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
const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border-radius: 100%;
  background-color: #fff;
  padding: 5px;
  margin-left: 370px;
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
  /* justify-content: space-between; */
  /* align-items: center; */
  p {
    font-size: 12px;
  }
`;

export default SideMenu;
