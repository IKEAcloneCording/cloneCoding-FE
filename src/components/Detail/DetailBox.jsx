import React from 'react';
import styled from 'styled-components';
import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../shared/api';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailBox = () => {
  const [item, setItem] = useState([
    {
      id: '',
      name: '',
      description: '',
      price: '',
      image_url: '',
      subImage_url: '',
    },
  ]);

  const TOAST = () =>
    toast(
      `${item.name} 제품이 장바구니에 추가되었습니다. 장바구니로 이동합니다.`,
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

  const navigate = useNavigate();

  // 로그인 유무 확인
  const token = localStorage.getItem('authorization');

  // 비회원 장바구니 추가
  const getItem = localStorage.getItem('guest-cart');

  const addLocalStorage = (item) => {
    const parseItem = JSON.parse(getItem).push([item]);
    const toString = JSON.stringify(parseItem);
    localStorage.setItem('guest-cart', toString);
  };

  const guestAddItem = async (item) => {
    TOAST();
    setTimeout(() => {
      navigate('/cart');
    }, 3000);
    getItem
      ? addLocalStorage(item)
      : localStorage.setItem(
          'guest-cart',
          `[{ 
            id: ${item.id}, 
            name: ${item.name}, 
            image_url: ${item.image_url}, 
            price: ${item.price}
          }]`
        );
  };

  // 회원 장바구니 추가
  const addItem = async (id) => {
    try {
      const { data } = await api.post(`/auth/cart`, {
        productId: id,
        count: 1,
      });
      if (data.success) {
        TOAST();
        setTimeout(() => {
          navigate('/cart');
        }, 3000);
      } else {
        console.log('response-error', data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 클릭한 제품 id 받아오기
  const location = useLocation();
  const id = location.state.id;

  // 제품 상세 가져오기
  const fetchItem = async () => {
    const { data } = await api.get(`/p/${id}`);
    setItem(data.data);
  };

  useLayoutEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <DetailDiv>
      <ToastContainer />
      <DetailImg>
        <img src={`${item.image_url}`} alt="img" />
        <img src={`${item.subImage_url}`} alt="img" />
      </DetailImg>
      <DetailInfo>
        <ProductTitle>
          {item.name}
          <span>
            <span>￦</span>
            {item.price}
          </span>
        </ProductTitle>

        <ProductSubtitle>
          {item.description}
        </ProductSubtitle>

        <InfoIn>
          <div>어떻게 구매하시겠어요?</div>
          <InfoInBox>
            <div>
              <FiTruck className="icon" />
              배송
            </div>
            <p>구매 가능 여부</p>
            <hr />
            <div>
              <MdStorefront className="icon" />
              매장 구매
            </div>
            <p>매장 재고 및 재입고 날짜 확인</p>
          </InfoInBox>
        </InfoIn>
        <button
          onClick={() => {
            token ? addItem(item.id) : guestAddItem(item);
          }}
        >
          구매하기
        </button>
      </DetailInfo>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 50px;

  .icon {
    font-size: 22px;
    margin-right: 14px;
  }
`;
const DetailImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 1000px;
  img {
    height: 470px;
    margin: 0 27px 27px 0;
  }
`;
const DetailInfo = styled.div`
  margin-left: 30px;
  flex-grow: 1;
  height: 500px;
  letter-spacing: -0.5px;

  button {
    width: 90%;
    margin: 40px 30px;
    border-radius: 50px;
    padding: 18px 100px;
    background-color: #0058a3;
    font-size: 15px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      );
    }
  }
`;

const ProductTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
  span {
    float: right;
    span {
      font-size: 15px;
      float: left;
      margin-right: 5px;
    }
  }
`;
const ProductSubtitle = styled.div`
  font-size: 14px;
`;

const InfoIn = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-top: 60px;
`;
const InfoInBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0 20px;
  margin-top: 10px;

  div {
    display: flex;
    margin-top: 20px;
  }
  p {
    color: #555;
    /* font-weight: normal; */
    text-decoration: underline;
    margin-left: 36px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
export default DetailBox;
