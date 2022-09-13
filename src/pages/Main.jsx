import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Container from '../components/Layout/Container';
import Visual from '../components/Main/Visual';
import Category from '../components/Main/Category';
import SideMenu from '../components/Main/SideMenu';

const Main = () => {
  return (
    <MainBox>
      <SideMenu />
      <Header />
      <Container>
        <Visual />
        <Category />
      </Container>
    </MainBox>
  );
};
const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default Main;
