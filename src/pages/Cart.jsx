import React from 'react';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/Layout/Container';
import Header from '../components/Header/Header';

const Cart = () => {
  return (
    <div>
      <Header />
      <Container>
        <CartItem />
      </Container>
    </div>
  );
};

export default Cart;
