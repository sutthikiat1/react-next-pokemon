import React from "react";
import styled from "styled-components";
import Constant from "constant/index";
function BoxRecommend() {
  return (
    <Container>
      <Box
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  max-width: 375px;
  margin-top: 24px;
  position: relative;

  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    width: 100%;
    max-width: 100%;
  }
`;
const Box = styled.div`
  position: fixed;
  width: 375px;
  height: 200px;
  background-image: url("/image/logo/m-pokedex.png");
  background-repeat: no-repeat;
  background-size: 375px 200px;
  margin: 0 auto;
  cursor: pointer;

  transform-style: preserve-3d;
  transform: translateZ(1px);
  &::before,
  &::after {
    content: "";
    background: linear-gradient(
        45deg,
        #ff0000 0%,
        #ff9a00 10%,
        #d0de21 20%,
        #4fdc4a 30%,
        #3fdad8 40%,
        #2fc9e2 50%,
        #1c7fee 60%,
        #5f15f2 70%,
        #ba0cf8 80%,
        #fb07d9 90%,
        #ff0000 100%
      )
      repeat 0% 0% / 300% 100%;
    inset: -10px;
    position: absolute;
    border-radius: 24px;
    filter: blur(8px);
    transform: translateZ(-1px);
    opacity: 0.5;
    animation: rgb2 4s infinite;
  }
  @keyframes rgb2 {
    0% {
      opacity: 0.5;
      background-position: 0% 50%;
    }
    50% {
      opacity: 0.5;
      background-position: 100% 50%;
    }
    100% {
      opacity: 0.5;
      background-position: 0% 50%;
    }
  }

  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    width: 100px;
    height: 60px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-size: 100px 60px;
  }
`;

export default BoxRecommend;
