import React from 'react';
import styled, { css } from 'styled-components';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';

const RecommendProduct = ({
  productList,
  setProductList,
}) => {
  return (
    <>
      <Container>
        <Text large>추천제품</Text>
        <Items>
          {productList.length === 0 ? (
            <Text medium>추천 제품이 없습니다.</Text>
          ) : (
            productList.map((item) => (
              <Item>
                <img
                  src="https://www.ikea.com/kr/ko/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s3.jpg"
                  alt="제품사진"
                />
                <DescBox>
                  <TextArea>
                    <Text bold>
                      LINNMON 린몬 / ADILS 아딜스
                    </Text>
                    <Text>
                      옷장+도어3, 화이트, 117x176 cm
                    </Text>
                  </TextArea>
                  <Text medium>₩ 39000</Text>
                  <BtnBox>
                    <Btn>
                      <FaRegHeart />
                    </Btn>
                    <Btn blue>
                      <TbShoppingCartPlus />
                    </Btn>
                  </BtnBox>
                </DescBox>
              </Item>
            ))
          )}
        </Items>
      </Container>
    </>
  );
};

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.div`
  img {
    width: 100%;
    max-width: 348px;
  }
`;

const Btn = styled.button`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  height: 40px;
  width: 40px;
  color: black;
  ${(props) =>
    props.blue &&
    css`
      border-radius: 100%;
      color: white;
      background-color: #0058a3;
      &:hover {
        background-color: #004f93;
      }
    `}
`;

const TextArea = styled.div`
  margin-top: 2.0625rem;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #dfdfdf;
  border-top-width: 1px;
  margin: 2.5rem 0;
  padding-top: 2.5rem;
  box-sizing: border-box;
`;

const Text = styled.p`
  color: #111;
  font-size: 14px;
  margin-bottom: 0.5rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  ${(props) =>
    props.underline &&
    css`
      font-weight: 700;
      text-decoration: underline;
      color: #333;
    `}
  ${(props) =>
    props.large &&
    css`
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 0.5rem;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 0.5rem;
    `};
`;

export default RecommendProduct;
