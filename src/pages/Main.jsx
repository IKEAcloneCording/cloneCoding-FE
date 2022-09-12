import React from 'react';
// import styled, { keyframes } from 'styled-components';
import Header from '../components/Header/Header';
import Container from '../components/Layout/Container';
import Visual from '../components/Main/Visual';
import Category from '../components/Main/Category';
import SideMenu from '../components/Main/SideMenu';
// import { useSelector } from 'react-redux';
// import { sideOpen } from '../redux/modules/HeaderSlice';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

const Main = () => {
  // const Open = useSelector((state) => state.header.isOpen);
  // const dispatch = useDispatch();
  // const [isOpen, setMenu] = useState(true);

  // const sideSign = () => {
  //   setMenu((isOpen) => !isOpen);
  //   dispatch(sideOpen(isOpen));
  // };

  // console.log(Open);
  return (
    <div>
      {/* {Open ? (
        <SideOpen>
          <button onClick={() => sideSign()}> X</button>
        </SideOpen>
      ) : (
        <SideClose />
      )} */}
      <SideMenu />
      <Header />
      <Container>
        <Visual />
        <Category />
      </Container>
    </div>
  );
};

// const open = keyframes` /* 2. css코드를 씀. */
//   0% {
//     right:-1000px
//   }
//   100% {
//     right:0
//   }
// `;
// const close = keyframes` /* 2. css코드를 씀. */
//   0% {
//     right: 0
//   }
//   100% {
//     right:-1000px
//   }
// `;
// const SideOpen = styled.div`
//   background-color: pink;
//   display: flex;
//   width: 500px;
//   height: 100vh;
//   z-index: 2;
//   position: absolute;
//   right: 0;
//   font-size: 30px;
//   animation: ${open} 0.5s linear backwards;
// `;
// const SideClose = styled.div`
//   background-color: pink;
//   display: flex;
//   width: 500px;
//   height: 100vh;
//   z-index: 2;
//   position: absolute;
//   right: -1000px;
//   animation: ${close} 0.5s linear backwards;
// `;
export default Main;
