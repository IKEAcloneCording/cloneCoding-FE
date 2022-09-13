import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CartModal = () => {
  return (
    <>
      <TextBox>
        <Text large>마음이 바뀌어도 괜찮습니다!</Text>
        <Text>
          구입한 IKEA 제품이 만족스럽지 않다면 365 일 이내에
          새제품과 미개봉 제품을 반품하고 전액 환불받을 수
          있습니다. 180 일 이내에 구매 증빙 자료와 함께
          제품을 반품하면 전액 환불받을 수 있습니다.
        </Text>
        <Text>
          수거 및 픽업 서비스 진행 방식은 지역에 따라
          다릅니다. 계시는 지역에서 픽업 서비스가 가능한
          경우, 지붕 밑 현관 또는 차고로 제품을 가져오세요.
        </Text>
        <Text>
          <b>
            식물, 재단된 패브릭, 주문제작 조리대,
            알뜰코너에서 구매한 제품은 반품이 불가능합니다.
          </b>
          구매시 제품이 원래 형태에서 변형, 오염, 얼룩,
          손상이 있는 경우 환불 또는 교환이 불가능합니다.
          불편을 드려 죄송합니다.
        </Text>
        <Text underline>
          자세한 내용은 IKEA 반품 정책을 참조하세요
        </Text>
      </TextBox>
    </>
  );
};

const Text = styled.p`
  color: #111;
  font-size: 14px;
  margin-bottom: 0.75rem;
  font-weight: 400;
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
      margin-bottom: 2.5rem;
    `}
`;

const TextBox = styled.div`
  padding: 2rem 3rem;
`;

export default CartModal;
