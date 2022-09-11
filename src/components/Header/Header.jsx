import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import { GoSearch } from 'react-icons/go';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';

const Header = () => {
  return (
    <HeaderBox>
      <HeaderBoxIn>
        <HeaderLogo src={logo} />
        <GoSearch className="search" />
        <HeaderInput placeholder="검색어 입력"></HeaderInput>

        <SignButton>
          <MdOutlinePersonOutline className="icon" />
          Hej! 로그인 또는 가입하기
        </SignButton>
        <ShoppingCart>
          <AiOutlineShopping className="icon" />
        </ShoppingCart>
      </HeaderBoxIn>
      <HeaderMenu>
        <Ul>
          <Li>모든 제품</Li>
          <Li>온라인 쇼룸</Li>
          <Li>홈 액세서리</Li>
          <Li>서비스</Li>
        </Ul>
        <Ul>
          <Li>
            <FiTruck className="icon" />
            우편 번호 입력
          </Li>
          <Li>
            <MdStorefront className="icon" />
            매장 선택
          </Li>
        </Ul>
      </HeaderMenu>
    </HeaderBox>
  );
};
const HeaderBox = styled.div`
  max-width: 95rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: solid 1px #dfdfdf;
  padding-bottom: 1rem;
  .icon {
    font-size: 22px;
    margin-right: 8px;
  }
`;
const HeaderBoxIn = styled.div`
  display: flex;
  align-items: center;

  .search {
    font-size: 1.2rem;
    position: relative;
    left: 60px;
    top: 3px;
  }
`;
const HeaderLogo = styled.img`
  width: 90px;
  height: 40px;
`;
const HeaderInput = styled.input`
  width: 1060px;
  height: 50px;
  border-radius: 40px;
  padding: 0 50px;
  margin-left: 25px;
  background-color: #eee;
`;

const SignButton = styled.button`
  height: 40px;
  border-radius: 40px;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 14px;
  margin: 0 10px 0 40px;
  display: flex;
  &:hover {
    background-color: #eee;
  }
`;

const ShoppingCart = styled.button`
  border-radius: 100%;
  padding: 8px;
  margin: auto;
  .icon {
    font-size: 22px;
    margin: 0;
  }
  :hover {
    background-color: #eee;
  }
`;

const HeaderMenu = styled.div`
  width: 95rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
`;
const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

const Li = styled.li`
  display: flex;
  margin-right: 30px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  :last-child {
    margin-right: 0px;
  }
`;

export default Header;
