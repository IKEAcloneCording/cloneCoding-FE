import React, { useState } from 'react';
import styled from 'styled-components';
// import Products from '../CartegoryTab/Products';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [index, setIndex] = useState();

  const categoryData = [
    {
      id: 0,
      title: '수납/정리',
      category: 'storage',
      img: 'img/category0.png',
    },
    {
      id: 1,
      title: '침대/매트리스',
      category: 'bed ',
      img: 'img/category1.png',
    },
    {
      id: 2,
      title: '소파',
      category: 'sofa',
      img: 'img/category2.png',
    },
    {
      id: 3,
      title: '홈오피스',
      category: 'home-office',
      img: 'img/category3.png',
    },
    {
      id: 4,
      title: '어린이 IKEA',
      category: 'children ',
      img: 'img/category4.png',
    },
    {
      id: 5,
      title: '조명',
      category: 'light ',
      img: 'img/category5.png',
    },
    {
      id: 6,
      title: '홈 액세서리',
      category: 'home-accessory',
      img: 'img/category6.png',
    },
  ];

  const navigate = useNavigate();

  // // 클릭한 제품 아이디 상세페이지로 보내기
  // const onClickCategory = (item) => {
  //   setIndex(item.id);
  // };

  return (
    <CategoryBox>
      <div>카테고리별 제품 찾기</div>
      {/* 카테고리 탭 */}
      <CategoryDiv>
        {categoryData.map((item) => (
          <CategoryBg
            img={item.img}
            key={item.id}
            // className={index === item.id ? 'active' : null}
            onClick={() => {
              setIndex(item.id);
            }}
            // onClick={onClickCategory(item)}
          >
            <CategoryButton>{item.title}</CategoryButton>
          </CategoryBg>
        ))}
      </CategoryDiv>

      {/*선택한 카테고리 넘겨주기*/}
      {categoryData
        .filter((item) => index === item.id)
        .map((item) =>
          navigate(`/list/${item.category}`, {
            state: {
              category: item.category,
              title: item.title,
            },
          })
        )}
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
const CategoryDiv = styled.div`
  display: flex;
`;
const CategoryBg = styled.div`
  background: url(${(props) => props.img});
  background-size: cover;
  width: 230px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  margin-right: 15px;
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
