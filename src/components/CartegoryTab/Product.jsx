import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
  const navigate = useNavigate();

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
          <ItemPrice>₩ {item.price}</ItemPrice>
        </div>
      </ItemBox>
    </ProductBox>
  );
};
const ProductBox = styled.div`
  display: flex;
  width: 360px;
  margin-right: 20px;

  background-color: pink;
`;
const ItemBox = styled.div`
  font-size: 10px;
`;
const ItemName = styled.div`
  width: 100%;
  font-size: 10px;
`;
const ItemDesc = styled.div`
  width: 100%;
`;
const ItemPrice = styled.div``;

export default Product;
