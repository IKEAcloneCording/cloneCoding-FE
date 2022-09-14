import React from 'react';
import { api } from '../../shared/api';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import styled from 'styled-components';

const Products = ({ category }) => {
  const [products, setProducts] = useState([
    {
      id: '',
      name: '',
      description: '',
      price: '',
      image_url: '',
      subImage_url: '',
    },
  ]);

  // 해당 카테고리 제품 가져오기
  const fetchCategory = async () => {
    const { data } = await api.get(
      `/products/cat/${category}`
    );
    setProducts(data.data.products);
  };

  useLayoutEffect(() => {
    fetchCategory();
  }, [category]);

  return (
    <ProductsBox>
      <div>
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </ProductsBox>
  );
};
const ProductsBox = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
export default Products;
