import React from 'react';
import styled from 'styled-components';
import signupimg from '../../images/signup.png';
import logo from '../../images/logo.png';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUpImage = () => {
  return (
    <Box>
      <BackBtn>
        <Link to="/signin">
          <FaArrowLeft />
        </Link>
      </BackBtn>
      <div>
        <Container>
          <HeaderLogo src={logo} alt="로고" width="90px" />
        </Container>
        <Container>
          <H1 logo>IKEA Family</H1>
          <H1> 회원가입</H1>
        </Container>
        <Container>
          <Text>이미 가입하셨나요?</Text>
          <LinkText>
            <Link to="/signin">로그인 하기</Link>
          </LinkText>
        </Container>
        <SignupImg src={signupimg} alt="회원가입 이미지" />
      </div>
    </Box>
  );
};

const Box = styled.div`
  padding: 2rem 5rem;
  display: flex;
`;

const BackBtn = styled.div`
  margin: 1.5rem 1rem;
  padding-right: 0.5rem;
`;

const HeaderLogo = styled.img`
  width: 90px;
  height: 40px;
`;

const Container = styled.div`
  margin: 1rem 0px 0px;
`;

const SignupImg = styled.img`
  max-width: 400px;
  margin-top: 3rem;
`;

const Text = styled.span`
  font-size: 0.875rem;
`;

const LinkText = styled(Text)`
  text-decoration: underline;
`;

const H1 = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => (props.logo ? ' #0058a3' : 'black')};
`;

export default SignUpImage;
