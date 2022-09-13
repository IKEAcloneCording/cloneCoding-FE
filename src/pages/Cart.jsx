import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/Layout/Container';
import Header from '../components/Header/Header';
import CartPrice from '../components/Cart/CartPrice';
import { api } from '../shared/api';

const Cart = () => {
  const [cartList, setCartList] = useState('');

  // 장바구니 조회 api
  const fetchCartList = async () => {
    const { data } = await api.get(`/api/cart`);
    setCartList(data.product);
  };

  useEffect(() => {
    fetchCartList();
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
          <CartPrice />
        </CartContainer>
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
