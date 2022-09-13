import React from 'react';
import styled, { css } from 'styled-components';

const SSLModal = () => {
  return (
    <div>
      <TextBox>
        <Text large>이 사이트는 안전합니다</Text>
        <Text>
          www.ikea.com은 DigiCert EV SSL 인증서를 통해
          중요한 데이터를 주고받을 수 있는 안전한
          사이트입니다.
        </Text>
        <Text underline>
          자세한 내용은 IKEA FAQ 섹션을 참조하세요
        </Text>
      </TextBox>
    </div>
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

export default SSLModal;
