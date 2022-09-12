import styled from 'styled-components';

const Container = (props) => {
  return <ContainerBox>{props.children}</ContainerBox>;
};

const ContainerBox = styled.div`
  max-width: 95rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  box-sizing: border-box;
`;

export default Container;
