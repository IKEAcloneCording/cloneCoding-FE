import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/Layout/Container';
import Header from '../components/Header/Header';
import CartPrice from '../components/Cart/CartPrice';
import { api } from '../shared/api';
import RecommendProduct from '../components/Cart/RecommendProduct';
import GuestCartItem from '../components/Cart/guest/GuestCartItem';
import GuestRecommendProduct from '../components/Cart/guest/GuestRecommendProduct';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [recommendList, setRecommendList] = useState([]);

  // 로그인 유무 확인
  const token = localStorage.getItem('authorization');

  // 장바구니 조회 api
  const fetchCart = async () => {
    if (token) {
      const { data } = await api.get(`/auth/cart`);
      setCart(data.data);
    }
  };

  // 추천 상품 조회 (sofa로 지정)
  const fetchProductList = async () => {
    const { data } = await api.get(`/products/cat/sofa`);
    setRecommendList(data.data.products);
  };

  useEffect(() => {
    fetchCart();
    fetchProductList();
  }, []);

  return (
    <div>
      <Header />
      {token ? (
        cart && (
          <Container>
            <CartContainer>
              <CartItem
                cart={cart}
                setCart={setCart}
                fetchCart={fetchCart}
              />
              {cart.cartProducts.length && (
                <CartPrice cart={cart} setCart={setCart} />
              )}
            </CartContainer>
            <RecommendProduct
              recommendList={recommendList}
              cart={cart}
              setCart={setCart}
              fetchCart={fetchCart}
            />
          </Container>
        )
      ) : (
        <Container>
          <GuestRecommendProduct
            recommendList={recommendList}
          />
        </Container>
      )}
    </div>
  );
};

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`;

export default Cart;
