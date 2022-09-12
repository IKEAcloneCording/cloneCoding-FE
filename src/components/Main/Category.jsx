import React from 'react';
import styled from 'styled-components';
import Category1 from '../../images/category1.png';
import Category2 from '../../images/category2.png';
import Category3 from '../../images/category3.png';
import Category4 from '../../images/category4.png';
import Category5 from '../../images/category5.png';
import Category6 from '../../images/category6.png';
import Category7 from '../../images/category7.png';

const Category = () => {
  return (
    <CategoryBox>
      <div>카테고리별 제품 찾기</div>
      <CategoryList>
        <CategoryDiv1>
          <CategoryButton>수납/정리</CategoryButton>
        </CategoryDiv1>
        <CategoryDiv2>
          <CategoryButton>침대/매트리스</CategoryButton>
        </CategoryDiv2>
        <CategoryDiv3>
          <CategoryButton>소파</CategoryButton>
        </CategoryDiv3>
        <CategoryDiv4>
          <CategoryButton>홈오피스</CategoryButton>
        </CategoryDiv4>
        <CategoryDiv5>
          <CategoryButton>어린이 IKEA</CategoryButton>
        </CategoryDiv5>
        <CategoryDiv6>
          <CategoryButton>조명</CategoryButton>
        </CategoryDiv6>
        <CategoryDiv7>
          <CategoryButton>홈 액세서리</CategoryButton>
        </CategoryDiv7>
      </CategoryList>
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  margin-top: 65px;
  div {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const CategoryList = styled.div`
  display: flex;
`;

const CategoryDiv1 = styled.div`
  background-image: url(${Category1});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;
const CategoryDiv2 = styled.div`
  background-image: url(${Category2});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;
const CategoryDiv3 = styled.div`
  background-image: url(${Category3});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;
const CategoryDiv4 = styled.div`
  background-image: url(${Category4});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;
const CategoryDiv5 = styled.div`
  background-image: url(${Category5});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;
const CategoryDiv6 = styled.div`
  background-image: url(${Category6});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
`;
const CategoryDiv7 = styled.div`
  background-image: url(${Category7});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
`;
const CategoryButton = styled.button`
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 40px;
  padding: 10px 23px;
  font-size: 12px;
  font-weight: bold;
`;

export default Category;
