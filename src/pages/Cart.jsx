import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/Layout/Container';
import Header from '../components/Header/Header';
import CartPrice from '../components/Cart/CartPrice';
import { api } from '../shared/api';
import axios from 'axios';
import RecommendProduct from '../components/Cart/RecommendProduct';

const Cart = () => {
  const [cartList, setCartList] = useState('');
  const [productList, setProductList] = useState('');

  // 장바구니 조회 api
  const fetchCartList = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/cart`
    );
    setCartList(data);
  };

  // 상품 조회
  const fetchProductList = async () => {
    const { data } = await api.get(`/products`);
    setProductList(data.data);
  };

  useEffect(() => {
    fetchCartList();
    fetchProductList();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <CartContainer>
          <CartItem
            cartList={cartList}
            setCartList={setCartList}
          />
          {cartList.length === 0 ? null : <CartPrice />}
        </CartContainer>
        <RecommendProduct
          productList={productList}
          setProductList={setProductList}
          cartList={cartList}
          setCartList={setCartList}
        />
      </Container>
    </div>
  );
};

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`;

export default Cart;
