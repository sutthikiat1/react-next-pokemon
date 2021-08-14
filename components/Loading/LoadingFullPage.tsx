import React from "react";
import styled from "styled-components";

const LoadingFullPage = () => {
  return (
    <Container>
      <IconLoading />
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeInAnimation ease 800ms;
`;
const IconLoading = styled.span`
  display: inline-block;
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &:after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    margin: 1px;
    border-radius: 50%;
    border: 3px solid #737373;
    border-color: #737373 transparent #737373 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
`;
export default LoadingFullPage;
