import React from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/CartegoryTab/Products';
import styled from 'styled-components';
const CategoryList = () => {
  const location = useLocation();
  // 검색결과 받아오기
  const category = location.state.category;
  const title = location.state.title;

  return (
    <div>
      <CategoryTitle>{title}</CategoryTitle>
      <Products category={category} />
    </div>
  );
};
const CategoryTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 40px 0;
`;
export default CategoryList;
