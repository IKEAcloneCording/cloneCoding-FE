import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CartModal = () => {
  return <>
  <Text large>
    마음이 바뀌어도 괜찮습니다!
  </Text>
  </>;
};


const Text = styled.p`
  font-size: 14px;
  margin-bottom: 0.75rem;
  font-weight: 400;
  ${(props) =>
    props.underline &&
    css`
      font-weight: 700;
      text-decoration: underline;
    `}
  ${(props) =>
    props.large &&
    css`
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 2.5rem;
    `}
`;

export default CartModal;
