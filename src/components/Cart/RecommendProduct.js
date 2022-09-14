import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { css } from 'styled-components';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { FaRegHeart } from 'react-icons/fa';
import { api } from '../../shared/api';
import { useNavigate } from 'react-router-dom';

const RecommendProduct = ({
  recommendList,
  cart,
  setCart,
  fetchCart,
}) => {
  const [over, setOver] = useState(false);
  const navigate = useNavigate();

  // 디테일 페이지로 이동
  const goToDetail = (id) => {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  };

  // 장바구니 추가
  const addItem = async (id) => {
    // 로그인 유무 확인
    const token = localStorage.getItem('authorization');

    if (token) {
      try {
        const { data } = await api.post(`/auth/cart`, {
          productId: id,
          count: 1,
        });
        if (data.success) {
          toast(
            `${data.data.product.name} 제품이 장바구니에 추가되었습니다.`,
            {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            }
          );
          setCart({
            ...cart,
            cartProducts: [...cart.cartProducts, data.data],
          });
          fetchCart();
        } else {
          console.log('response-error', data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      localStorage.setItem('cart', `productId : 테스트`);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Text large>추천제품</Text>
      <Items>
        {recommendList.length === 0 ? (
          <Text medium>추천 제품이 없습니다.</Text>
        ) : (
          recommendList.map((item) => (
            <Item
              key={item.id}
              onMouseOver={() => {
                setOver(true);
              }}
              onMouseOut={() => {
                setOver(false);
              }}
            >
              <img
                src={
                  over ? item.subImage_url : item.image_url
                }
                alt="제품이미지"
                onClick={() => {
                  goToDetail(item.id);
                }}
              />
              <DescBox>
                <TextArea>
                  <Text link>{item.name}</Text>
                  <Text>
                    {item.description} {item.measurement}
                  </Text>
                </TextArea>
                <Text medium>
                  <Text>₩</Text> {item.price}
                </Text>
                <BtnBox>
                  <Btn>
                    <FaRegHeart />
                  </Btn>
                  <Btn
                    blue
                    onClick={() => {
                      addItem(item.id);
                    }}
                  >
                    <TbShoppingCartPlus />
                  </Btn>
                </BtnBox>
              </DescBox>
            </Item>
          ))
        )}
      </Items>
    </Container>
  );
};

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.div`
  margin-bottom: 5rem;
  img {
    width: 100%;
    max-width: 348px;
    cursor: pointer;
  }
`;

const Btn = styled.button`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  height: 40px;
  width: 40px;
  color: black;
  ${(props) =>
    props.blue &&
    css`
      border-radius: 100%;
      color: white;
      background-color: #0058a3;
      &:hover {
        background-color: #004f93;
      }
    `}
`;

const TextArea = styled.div`
  margin-top: 2.0625rem;
  margin-bottom: 0.25rem;
`;

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #dfdfdf;
  border-top-width: 1px;
  margin: 2.5rem 0;
  padding-top: 2.5rem;
  box-sizing: border-box;
`;

const Text = styled.span`
  color: #111;
  font-size: 14px;
  font-weight: 400;
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
      display: block;
    `}
  ${(props) =>
    props.underline &&
    css`
      font-weight: 700;
      text-decoration: underline;
      color: #333;
    `}
  ${(props) =>
    props.large &&
    css`
      font-size: 24px;
      font-weight: 700;
      margin: 0 0 0.5rem 2rem;
    `};
  ${(props) =>
    props.medium &&
    css`
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 0.5rem;
    `};
  ${(props) =>
    props.link &&
    css`
      display: block;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `};
`;

export default RecommendProduct;
