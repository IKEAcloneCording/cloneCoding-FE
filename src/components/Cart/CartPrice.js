import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import RefundModal from './RefundModal';
import SSLModal from './SSLModal';
import ModalButton from '../Modal/ModalButton';

const CartPrice = () => {
  const [totalPrice, setTotalPrice] = useState('');
  const [deliveryFee, setDeliveryFee] = useState('');

  const paymentHandler = () => {
    alert('결제하기 서비스는 준비중입니다.');
  };

  return (
    <Container>
      <PriceContainer>
        <FlexRowBox mb>
          <Text bold>주문내역</Text>
        </FlexRowBox>
        <FlexRowBox mb>
          <Text>전체배송비</Text>
          <Text>
            {deliveryFee
              ? { deliveryFee }
              : `아직 배송비가 산정되지 않았습니다`}
          </Text>
        </FlexRowBox>
        <Hr></Hr>
        <FlexRowBox>
          <Text bold>총 주문 금액</Text>
          <LargeText>
            ₩ {totalPrice ? { totalPrice } : `0`}
          </LargeText>
        </FlexRowBox>
      </PriceContainer>
      <SignInBox>
        <FlexRowBox>
          <FlexColBox>
            <Text bold>로그인</Text>
            <FlexRowBox>
              <Text underline>
                <Link to="/signin">
                  로그인 또는 회원가입
                </Link>
              </Text>
              <Text>
                하면 더 편리하게 이용하실수 있어요.
              </Text>
            </FlexRowBox>
          </FlexColBox>
          <H1>
            <FiUser />
          </H1>
        </FlexRowBox>
      </SignInBox>
      <PayBtn onClick={paymentHandler}>
        <Text bold>결제하기</Text>
        <H1>
          <BsArrowRightCircleFill />
        </H1>
      </PayBtn>
      <FlexRowBox start>
        <FaRegHeart />
        <DescText>
          <ModalButton
            buttonName="반품 정책 365일 이내에 제품 환불 가능"
            content={<RefundModal />}
          />
        </DescText>
      </FlexRowBox>
      <FlexRowBox start>
        <MdOutlineShoppingBag />
        <DescText>
          <ModalButton
            buttonName="SSL 데이터 암호화로 안전한 쇼핑"
            content={<SSLModal />}
          />
        </DescText>
      </FlexRowBox>
    </Container>
  );
};

const DescText = styled.span`
  font-size: 14px;
  text-decoration: underline;
  color: #484848;
  font-weight: 700;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    color: #111;
  }
`;

const Hr = styled.hr`
  border-bottom: 2px solid #111;
  margin-bottom: 1.25rem;
  height: 0;
`;

const FlexRowBox = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.mb ? '1.25rem' : 0)};
  justify-content: space-between;
  ${(props) =>
    props.start &&
    css`
      justify-content: flex-start;
      align-items: center;
      margin-top: 1.25rem;
    `}
`;

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const Container = styled.div`
  margin: 0 2rem;
`;

const PriceContainer = styled.div`
  margin: 2.5rem 0;
`;

const SignInBox = styled.div`
  border: 1px solid rgb(223, 223, 223);
  border-radius: 4px;
  width: 100%;
  padding: 2rem 1.25rem;
`;

const PayBtn = styled.button`
  background-color: #0058a3;
  color: white;
  font-weight: 700;
  font-size: 16px;
  padding: 2.5rem 1.5rem;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin: 40px 0;
  width: 100%;
  &:hover {
    background-color: #004f93;
  }
`;

const Text = styled.span`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => (props.bold ? '16px' : '14px')};
  text-decoration: ${(props) =>
    props.underline ? 'underline' : null};
`;

const LargeText = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export default CartPrice;
