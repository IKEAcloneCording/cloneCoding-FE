import React from 'react';
import { api } from '../../shared/api';
import { useEffect } from 'react';
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

  const fetchCategory = async () => {
    const { data } = await api.get(
      `/products/cat/${category}`
    );
    // console.log(data.data.products);

    setProducts(data.data.products);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  console.log(products);

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
