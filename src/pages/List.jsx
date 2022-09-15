import React from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Layout/Container';
import CategoryList from '../List/CategoryList';

const List = () => {
  return (
    <div>
      <Header />
      <Container>
        <CategoryList />
      </Container>
    </div>
  );
};

export default List;
