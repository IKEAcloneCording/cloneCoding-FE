import React from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Layout/Container';
import Visual from '../components/Main/Visual';
import Category from '../components/Main/Category';
import ListProduct from '../components/Main/ListProduct';

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Visual />
        <Category />
        <ListProduct />
      </Container>
    </div>
  );
};

export default Main;
