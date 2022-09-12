import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const CartItem = () => {
  return (
    <CartContainer>
      <Container>
        <TitleBox>
          <H1>장바구니</H1>
          <DescButton>
            <BiDotsHorizontalRounded />
          </DescButton>
        </TitleBox>
        <DescContainer>
          <ContentBox>
            <ProducImg
              src="https://www.ikea.com/kr/ko/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s3.jpg"
              alt="이미지"
            />
            <FlexRowBox>
              <FlexColBox>
                <DescBox>
                  <Text bold>
                    <Link to="/">KLEPPSTAD 클렙스타드</Link>
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
                  <DelBtn>삭제</DelBtn>
                </FlexRowBox>
              </FlexColBox>
              <Text bold>₩ 189,000</Text>
            </FlexRowBox>
          </ContentBox>
        </DescContainer>
      </Container>
      <Container>
        <PriceContainer>
          <Text>주문내역</Text>
          <Text>전체배송비</Text>
          <Text>아직 배송비가 산정되지 않았습니다.</Text>
          <Text>총 주문 금액</Text>
          <Text>₩ 2,817,000</Text>
        </PriceContainer>
        <SignInBox>
          <Text>로그인</Text>
          <Text>
            <Link to="/signin">로그인 또는 회원가입</Link>
          </Text>
          <Text>하면 더 편리하게 이용하실수 있어요.</Text>
          <FiUser />
        </SignInBox>
        <PayBtn>
          <Text bold>결제하기</Text>
          <BsArrowRightCircleFill />
        </PayBtn>
        <FaRegHeart />
        <MdOutlineShoppingBag />
      </Container>
    </CartContainer>
  );
};

const DescButton = styled.button`
  border-radius: 100%;
  font-size: 24px;
  padding: 16px;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`;

const ProducImg = styled.img`
  width: 140px;
  height: 140px;
`;

const FlexRowBox = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const DescContainer = styled.div`
  margin: 2.5rem 0;
  box-sizing: border-box;
  display: flex;
`;

const BtnBox = styled.div`
  width: 85px;
  height: 53px;
`;

const QuantityBtn = styled.button`
  padding: 0.78125rem 2.8125rem 0.78125rem 1.5rem;
  width: 35px;
  height: 26px;
  font-size: 16px;
  border: 1px solid #dfdfdf;
  border-radius: 50px;
  box-sizing: border-box;
  align-items: center;
  box-sizing: border-box;
`;

const Container = styled.div`
  margin: 0 2rem;
`;

const DelBtn = styled.button``;

const PriceContainer = styled.div``;

const SignInBox = styled.div`
  border: 1px solid rgb(223, 223, 223);
  border-radius: 4px;
  width: 100%;
`;

const PayBtn = styled.button`
  background-color: #0058a3;
  color: white;
  font-weight: 700;
  font-size: 16px;
  padding: 2.5rem 1.5rem;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin: 40px 0;
  width: 100%;
  &:hover {
    background-color: #004f93;
  }
`;

const Text = styled.span`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => (props.bold ? '16px' : '14px')};
`;

export default CartItem;
