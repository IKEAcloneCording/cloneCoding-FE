import React from 'react';
import styled from 'styled-components';
import sofa from '../../images/sofa.png';
import { FiTruck } from 'react-icons/fi';
import { MdStorefront } from 'react-icons/md';

const DetailBox = () => {
  return (
    <DetailDiv>
      <DetailImg>
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
      </DetailImg>
      <DetailInfo>
        <ProductTitle>
          ANGERSBY 앙에르스뷔<span>￦229,000</span>
        </ProductTitle>
        <ProductSubtitle>
          2인용소파, 크니사 라이트그레이
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
        <button>구매하기</button>
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
