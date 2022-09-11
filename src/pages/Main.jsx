import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Header from '../components/Header/Header';
import visual from '../images/visual.png';

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <img src={visual} />
        <div></div>
      </Container>
    </div>
  );
};

// const MainBox = styled.div`
//   max-width: 95rem;
// `;

export default Main;
