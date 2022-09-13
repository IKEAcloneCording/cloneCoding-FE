import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { api } from '../../shared/api';

const CartItem = ({ cartList, setCartList }) => {

  // 장바구니 품목 삭제
  const deleteHandler = async (id) => {
    try {
      await api.delete(`/api/cart/${id}`);
      const newCartList = cartList.filter((product) => {
        return product.id !== id;
      });
      alert('삭제되었습니다.');
      setCartList(newCartList);
    } catch (error) {
      console.log(error);
      // alert(error.response.data.error.message);
    }
  };

  return (
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
                <DelBtn
                  onClick={() => {
                    deleteHandler();
                  }}
                >
                  삭제
                </DelBtn>
              </FlexRowBox>
            </FlexColBox>
            <Text bold>₩ 189,000</Text>
          </FlexRowBox>
        </ContentBox>
      </DescContainer>
    </Container>
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
`;

export default CartItem;
