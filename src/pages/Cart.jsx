import React from 'react';
import styled from 'styled-components';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/Layout/Container';
import Header from '../components/Header/Header';
import CartPrice from '../components/Cart/CartPrice';

const Cart = () => {
  return (
    <div>
      <Header />
      <Container>
        <CartContainer>
          <CartItem />
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
