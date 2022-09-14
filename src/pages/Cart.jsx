import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/Layout/Container';
import Header from '../components/Header/Header';
import CartPrice from '../components/Cart/CartPrice';
import { api } from '../shared/api';
import RecommendProduct from '../components/Cart/RecommendProduct';

const Cart = () => {
  const [cartList, setCartList] = useState('');
  const [price, setPrice] = useState('');
  const [recommendList, setRecommendList] = useState('');

  // 장바구니 조회 api
  const fetchCartList = async () => {
    const { data } = await api.get(`/auth/cart`);
    setCartList(data.data.cartProducts);
    setPrice(data.data);
  };

  // 추천 상품 조회 (sofa로 지정)
  const fetchProductList = async () => {
    const { data } = await api.get(`/products/cat/sofa`);
    setRecommendList(data.data.products);
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
          {cartList.length === 0 ? null : (
            <CartPrice price={price} setPrice={setPrice} />
          )}
        </CartContainer>
        <RecommendProduct
          recommendList={recommendList}
          setRecommendList={setRecommendList}
          cartList={cartList}
          setCartList={setCartList}
          price={price}
          setPrice={setPrice}
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
