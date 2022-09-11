import React from 'react';
import styled from 'styled-components';
import visualImg from '../../images/visualImg.png';

const Visual = () => {
  return (
    <VisualBox>
      <VisualImg src={visualImg} />
      <TextDiv>
        <Text1>집은, 해냄.</Text1>
        <Text2>
          IKEA의 새로운 브랜드 캠페인을 소개합니다.
        </Text2>
        <Text2>
          IKEA의 솔루션으로 더하고, 채우고, 꺼내고, 펼치고.
          집에 한계를 두지 않을 때 우리의 삶은 더욱
          무한해지니까, 집에서 무엇이든 해내 보세요.
        </Text2>
        <Text2>집은, 해냄. </Text2>
        <TextButton>
          브랜드 캠페인 지금 보러 가기
        </TextButton>
      </TextDiv>
    </VisualBox>
  );
};

const VisualBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  margin-top: 50px;
`;
const VisualImg = styled.img`
  flex-shrink: 0;
  width: 1000px;
`;
const TextDiv = styled.div`
  flex-grow: 1;
  background-color: #ffe699;
  padding: 50px;
`;
const Text1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: -1px;
`;
const Text2 = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  letter-spacing: -1px;
`;
const TextButton = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 40px;
  font-size: 12px;
  padding: 10px 20px;
  letter-spacing: -1px;
  margin-top: 10px;
  font-weight: bold;
`;
export default Visual;
