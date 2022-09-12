import React from 'react';

import Header from '../components/Header/Header';
import Container from '../components/Layout/Container';
import DetailBox from '../components/Detail/DetailBox';

const Detail = () => {
  return (
    <div>
      <Header />
      <Container>
        <DetailBox />
      </Container>
    </div>
  );
};

export default Detail;
