import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ListProduct = () => {
  return (
    <ListProductBox>
      <CategoryTitle>수납/정리</CategoryTitle>
      {/* <hr /> */}
      <div>
        <Product />
      </div>
    </ListProductBox>
  );
};

const ListProductBox = styled.div``;
const CategoryTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 60px 0 30px 0;
`;

export default ListProduct;
