import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../CartegoryTab/Product';
import styled from 'styled-components';

const SearchResult = () => {
  const location = useLocation();
  // 검색결과 받아오기
  const result = location.state.result;
  // 검색 입력어 받아오기
  const search = location.state.search;

  return (
    <ResultBox>
      <SearchName>
        "{search}"와(과) 일치하는 항목 표시
      </SearchName>
      <ResultCount>
        {result.length} 제품을 찾았습니다.
      </ResultCount>
      {result.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </ResultBox>
  );
};

const ResultBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SearchName = styled.p`
  font-size: 30px;
  width: 100%;
  margin: 30px 0;
`;
const ResultCount = styled.p`
  font-size: 18px;
  width: 100%;
  margin-bottom: 30px;
`;

export default SearchResult;
