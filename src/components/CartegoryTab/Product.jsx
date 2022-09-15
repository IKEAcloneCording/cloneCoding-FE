import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
  const navigate = useNavigate();

  // 클릭한 제품 아이디 상세페이지로 보내기
  const onClickDetail = () => {
    navigate(`/detail/${item.id}`, {
      state: {
        id: item.id,
      },
    });
  };

  return (
    <ProductBox
      onClick={() => {
        onClickDetail();
      }}
    >
      <ItemBox>
        <img src={`${item.image_url}`} />
        <div>
          <ItemName>{item.name}</ItemName>
          <ItemDesc>{item.description}</ItemDesc>
          <ItemPrice>
            <span>₩</span> {item.price}
          </ItemPrice>
        </div>
      </ItemBox>
    </ProductBox>
  );
};
const ProductBox = styled.div`
  display: flex;
  width: 360px;
  margin-right: 20px;
  cursor: pointer;
`;
const ItemBox = styled.div`
  font-size: 10px;
  div {
    margin-top: 20px;
    padding-left: 20px;
  }
`;
const ItemName = styled.p`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
`;
const ItemDesc = styled.p`
  width: 100%;
  font-size: 12px;
`;
const ItemPrice = styled.p`
  margin-top: 10px;
  margin-bottom: 60px;
  font-size: 25px;
  span {
    font-size: 15px;
    font-weight: bold;
  }
`;

export default Product;
