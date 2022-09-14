import React from 'react';
import styled from 'styled-components';
import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../shared/api';
import { useEffect } from 'react';
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

  const navigate = useNavigate();

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
            `${data.data.product.name} 제품이 장바구니에 추가되었습니다. 장바구니로 이동합니다.`,
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
          setTimeout(() => {
            navigate('/cart');
          }, 3000);
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

  const location = useLocation();
  const id = location.state.id;

  const fetchCategory = async () => {
    const { data } = await api.get(`/p/${id}`);
    setItem(data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  console.log(item);
  return (
    <DetailDiv>
      <ToastContainer />
      <DetailImg>
        <img src={`${item.image_url}`} />
        <img src={`${item.subImage_url}`} />
      </DetailImg>
      <DetailInfo>
        <ProductTitle>
          {item.name}
          <span>￦ {item.price}</span>
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
            addItem(item.id);
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
    /* width: 330px; */
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
// const InfoIn = styled.div``;
// const InfoIn = styled.div``;
export default DetailBox;
