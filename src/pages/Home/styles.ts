import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    font-family: 'Roboto', Helvetica, serif;
    font-weight: bold;
    color: #fff;
    font-size: 32px;
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const MainTitle = styled.main`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;

  @media (max-width: 900px) {
    img {
      width: 100%;
    }
  }
`;

export const Pokemon = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: #ffcc01;
  max-width: 300px;
  border-radius: 10px;

  div + & {
    margin-top: 20px;
  }

  h2 {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #000;
  }
`;

export const Pagination = styled.div<{ isFirstPage: boolean }>`
  display: flex;
  margin-top: 50px;
  margin-bottom: 70px;
  justify-content: center;

  p:first-child {
    margin-right: 10px;
    display: ${(props) => (props.isFirstPage ? 'none' : 'block')};
  }

  p {
    cursor: pointer;
  }
`;

export const Loading = styled.div`
  text-align: center;

  img {
    width: 50px;
    animation-name: spinner;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
