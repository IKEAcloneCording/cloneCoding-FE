import React from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Layout/Container';
import SearchResult from '../components/Search/SearchResult';

const Search = () => {
  return (
    <div>
      <Header />
      <Container>
        <SearchResult />
      </Container>
    </div>
  );
};

export default Search;
