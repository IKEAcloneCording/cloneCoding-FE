import React, { useState } from 'react';
import styled from 'styled-components';
import Products from '../CartegoryTab/Products';

const Category = () => {
  const [index, setIndex] = useState(0);

  const catData = [
    {
      id: 0,
      title: '수납/정리',
      category: 'storage',
    },
    {
      id: 1,
      title: '침대/매트리스',
      category: 'bed ',
    },
    {
      id: 2,
      title: '소파',
      category: 'sofa',
    },
    {
      id: 3,
      title: '홈오피스',
      category: 'home-office',
    },
    {
      id: 4,
      title: '어린이 IKEA',
      category: 'children ',
    },
    {
      id: 5,
      title: '조명',
      category: 'light ',
    },
    {
      id: 6,
      title: '홈 액세서리',
      category: 'home-accessory',
    },
  ];

  return (
    <CategoryBox>
      <div>카테고리별 제품 찾기</div>
      <ul className="tabs">
        {catData.map((item) => (
          <li
            key={item.id}
            className={index === item.id ? 'active' : null}
            onClick={() => setIndex(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      {catData
        .filter((item) => index === item.id)
        .map((item) => (
          <div>
            <Products category={item.category} />
          </div>
        ))}
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
  ul {
    display: flex;
    padding-bottom: 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid #eee;
  }
  li {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: 0 20px;
    border-radius: 30px;
    background-color: #eee;
    font-weight: bold;
    font-size: 15px;
    padding: 10px 25px;
  }
  .active {
    /* box-shadow: 0 0 0 1.5px #777 inset; */
    background-color: #bbb;
  }
`;

export default Category;
