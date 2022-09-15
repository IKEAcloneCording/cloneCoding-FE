import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { api } from '../../../shared/api';

const GuestCartItem = () => {
  const navigate = useNavigate();

  const getItem = localStorage.getItem('guest-cart');

  const addLocalStorage = (item) => {
    const parseItem = JSON.parse(getItem).push([item]);
    const toString = JSON.stringify(parseItem);
    localStorage.setItem('guest-cart', toString);
  };

  const quantityArr = Array(10)
    .fill()
    .map((_, i) => i + 1);
  const [quantity, setQuantity] = useState('');

  // 디테일 페이지로 이동
  const goToDetail = (id) => {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  };

  const handleSelected = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Container>
      <ToastContainer />
      <TitleBox>
        {getItem ? (
          <H1>장바구니</H1>
        ) : (
          <Text medium>장바구니가 비어있습니다</Text>
        )}
        <DescButton>
          <BiDotsHorizontalRounded />
        </DescButton>
      </TitleBox>
      <DescContainer>
        {!getItem ? (
          <SignInBox>
            <FlexRowBox>
              <FlexColBox>
                <Text bold>로그인</Text>
                <FlexRowBox>
                  <Text underline>
                    <Link to="/signin">
                      로그인 또는 회원가입
                    </Link>
                  </Text>
                  <Text>
                    하면 더 편리하게 이용하실수 있어요.
                  </Text>
                </FlexRowBox>
              </FlexColBox>
              <H1>
                <FiUser />
              </H1>
            </FlexRowBox>
          </SignInBox>
        ) : (
          <ContentBox>
            <ProducImg
              src={getItem.image_url}
              alt="제품 썸네일 이미지"
              onClick={() => {
                goToDetail();
              }}
            />
            <FlexRowBox>
              <FlexColBox>
                <DescBox>
                  <Text
                    link
                    onClick={() => {
                      goToDetail();
                    }}
                  >
                    {getItem.name}
                  </Text>
                  {/* <Text>{getItem.description}</Text>
                  <Text>{getItem.measurement}</Text> */}
                </DescBox>
                <FlexRowBox>
                  {/* <DelBtn
                    onClick={() => {
                      editHandler(item.cart_id);
                    }}
                  >
                    수정
                  </DelBtn>
                  <DelBtn
                    onClick={() => {
                      deleteHandler(item.cart_id);
                    }}
                  >
                    삭제
                  </DelBtn> */}
                </FlexRowBox>
              </FlexColBox>
              <FlexColBox end>
                <Text small>개당 금액</Text>
                <Text bold>₩ {getItem.price}</Text>
              </FlexColBox>
            </FlexRowBox>
          </ContentBox>
        )}
      </DescContainer>
    </Container>
  );
};

const SignInBox = styled.div`
  border: 1px solid rgb(223, 223, 223);
  border-radius: 4px;
  width: 100%;
  padding: 2rem 1.25rem;
`;

const DescButton = styled.button`
  border-radius: 100%;
  font-size: 24px;
  padding: 16px;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

const ProducImg = styled.img`
  cursor: pointer;
  margin-right: 1rem;
  width: 140px;
  height: 140px;
`;

const FlexRowBox = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.mb ? '1.25rem' : 0)};
  justify-content: space-between;
  ${(props) =>
    props.start &&
    css`
      justify-content: flex-start;
      align-items: center;
      margin-top: 1.25rem;
    `}
`;

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.end ? 'flex-end' : 'flex-start'};
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  padding: 2.5rem 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 160px auto;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const DescContainer = styled.div`
  margin: 2.5rem 0;
  box-sizing: border-box;
  display: grid;
`;

const BtnBox = styled.div`
  width: 85px;
  height: 53px;
  display: flex;
  align-items: center;
`;

const QuantityBtn = styled.button`
  width: 85px;
  height: 43px;
  font-size: 16px;
  border: 1px solid #dfdfdf;
  border-radius: 50px;
  box-sizing: border-box;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #929292;
  }
`;

const Container = styled.div`
  margin: 0 2rem;
`;

const DelBtn = styled.button`
  margin-left: 1.25rem;
  font-size: 14px;
  color: #484848;
  &:hover {
    color: #111;
  }
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-decoration: ${(props) =>
    props.underline ? 'underline' : null};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
      font-size: 16px;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-size: 24px;
      font-weight: 700;
      margin: 1.25rem;
    `};
  ${(props) =>
    props.small &&
    css`
      font-size: 12px;
    `};
  ${(props) =>
    props.link &&
    css`
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `};
`;

export default GuestCartItem;
