import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainModalButton from '../Modal/Main/MainModalButton';
import SideMenu from '../Main/SideMenu';
import { api } from '../../shared/api';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

// 아이콘,이미지
import logo from '../../images/logo.png';
import { GoSearch } from 'react-icons/go';
import { AiOutlineShopping } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // 로그아웃
  const logout = () => {
    window.localStorage.removeItem('authorization');
    window.localStorage.removeItem('refresh-token');
    window.location.reload();
  };

  //검색하기
  const [search, setSearch] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    navigate(`/search/${search}`, {
      state: {
        result: result,
        search: search,
      },
    });

    setSearch('');
  };

  //검색결과
  const [result, setResult] = useState([
    {
      id: '',
      name: '',
      description: '',
      price: '',
      image_url: '',
      subImage_url: '',
    },
  ]);

  const fetchSearchItem = async () => {
    const { data } = await api.get(
      `products/search?keyword=${search}`
    );
    setResult(data.data.products);
  };

  useLayoutEffect(() => {
    fetchSearchItem();
  }, [search]);

  return (
    <HeaderBox>
      <HeaderBoxIn>
        <Link to="/">
          <HeaderLogo src={logo} />
        </Link>

        <GoSearch className="search" />
        <form onSubmit={onSubmitHandler}>
          <HeaderInput
            type="text"
            value={search}
            onChange={onChange}
            placeholder="검색어 입력"
          ></HeaderInput>
        </form>

        {localStorage.getItem('authorization') ? (
          <LogoutButton
            onClick={() => {
              logout();
            }}
          >
            <MdOutlinePersonOutline className="icon" />
            로그아웃하기
          </LogoutButton>
        ) : (
          <MainModalButton
            buttonName="Hej! 로그인 또는 가입하기"
            content={<SideMenu />}
          ></MainModalButton>
        )}
        <FaRegHeart className="heartIcon" />
        <Link to="/cart">
          <ShoppingCart>
            <AiOutlineShopping className="icon" />
          </ShoppingCart>
        </Link>
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
  .heartIcon {
    border-radius: 100%;
    padding: 10px;
    margin: auto;
    font-size: 39px;
    margin-right: 10px;
    :hover {
      background-color: #eee;
    }
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
  cursor: pointer;
`;
const HeaderInput = styled.input`
  width: 1030px;
  height: 50px;
  border-radius: 40px;
  padding: 0 50px;
  margin-left: 25px;
  background-color: #eee;
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
const LogoutButton = styled.button`
  height: 40px;
  border-radius: 40px;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 14px;
  margin: 0 40px 0 70px;
  display: flex;
  &:hover {
    background-color: #eee;
  }
  .icon {
    font-size: 22px;
    margin-right: 8px;
  }
`;
export default Header;
