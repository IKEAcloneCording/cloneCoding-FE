import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../CartegoryTab/Product';
import styled from 'styled-components';
// import { api } from '../../shared/api';
// import { useLayoutEffect } from 'react';
// import { useState } from 'react';

const SearchResult = () => {
  const location = useLocation();
  // 검색결과 받아오기
  const result = location.state.result;
  // 검색 입력어 받아오기
  const search = location.state.search;
  // const all = location.state.all;

  // const [all, setAll] = useState([
  //   {
  //     id: '',
  //     name: '',
  //     description: '',
  //     price: '',
  //   },
  // ]);
  // const fetchSearchItem = async () => {
  //   const { data } = await api.get(
  //     `products/search?keyword=${search}`
  //   );
  //   setResult(data.data.products);
  // };

  // useLayoutEffect(() => {
  //   fetchSearchItem();
  // }, [search]);

  // const fetchSearchItem = async () => {
  //   const { data } = await api.get(`products`);
  //   setAll(data);
  // };

  // useLayoutEffect(() => {
  //   fetchSearchItem();
  // }, [search]);

  // console.log(all);

  // const filter = all.data.filter((item) => {
  //   return item
  //     .replace(' ', '')
  //     .toLocaleUpperCase()
  //     .includes(search.toLocaleUpperCase());
  // });

  // console.log(all.data);
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

      {/* {all
        .filter((item) => search === item.data.name)
        .map((item) => (
          <Product key={item.id} item={item} />
        ))} */}

      {/* {filter.map((item) => (
        <Product key={item.id} item={item} />
      ))} */}
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
