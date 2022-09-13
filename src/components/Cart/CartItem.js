import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { api } from '../../shared/api';

const CartItem = ({ cartList, setCartList }) => {
  const [quantity, setQuantity] = useState('');

  // 장바구니 품목 삭제
  const deleteHandler = async (id) => {
    try {
      const response = await api.delete(`/cart/${id}`);
      const newCartList = cartList.filter((product) => {
        return product.id !== id;
      });
      if (response.success === true) {
        alert('삭제되었습니다.');
        setCartList(newCartList);
      } else {
        alert(response.data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 장바구니 수량 조절
  const editHandler = async (id) => {
    try {
      const response = await api.put(
        `/auth/cart/${id}/chage-count`,
        {
          count: { quantity },
        }
      );
      if (response.success === false) {
        alert(response.data.error.message);
      } else {
        setCartList.map((item) =>
          item.id === id
            ? {
                ...item,
                count: quantity,
              }
            : item
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TitleBox>
        {cartList.length === 0 ? (
          <Text medium>장바구니가 비어있습니다</Text>
        ) : (
          <H1>장바구니</H1>
        )}
        <DescButton>
          <BiDotsHorizontalRounded />
        </DescButton>
      </TitleBox>
      <DescContainer>
        {cartList.length === 0 ? (
          <>
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
          </>
        ) : (
          cartList.map((item) => (
            <ContentBox key={item.product.id}>
              <ProducImg
                src="https://www.ikea.com/kr/ko/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s3.jpg"
                alt="이미지"
              />
              <FlexRowBox>
                <FlexColBox>
                  <DescBox>
                    <Text bold>
                      <Link to="/">
                        {item.product.name}
                      </Link>
                    </Text>
                    <Text>옷장+도어3, 화이트</Text>
                    <Text>117x176 cm</Text>
                  </DescBox>
                  <FlexRowBox>
                    <BtnBox>
                      <QuantityBtn>
                        <select
                          name="quantity"
                          id="selectQuantity"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </QuantityBtn>
                    </BtnBox>
                    <DelBtn
                      onClick={() => {
                        deleteHandler(item.product.id);
                      }}
                    >
                      삭제
                    </DelBtn>
                  </FlexRowBox>
                </FlexColBox>
                <Text bold>₩ {item.product.price}</Text>
              </FlexRowBox>
            </ContentBox>
          ))
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
  align-items: flex-start;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  padding: 2.5rem 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 140px auto;
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
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => (props.bold ? '16px' : '14px')};
  text-decoration: ${(props) =>
    props.underline ? 'underline' : null};
  ${(props) =>
    props.medium &&
    css`
      font-size: 24px;
      font-weight: 700;
      margin: 1.25rem;
    `};
`;

export default CartItem;
