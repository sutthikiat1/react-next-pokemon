import React from "react";
import styled from "styled-components";
import Constant from "constant/index";
import { useSelector } from "react-redux";
import typeStore from "store/type";
import IconProfile from "components/IconProfile/IconProfile";
function BoxRecommend() {
  const { pokemons } = useSelector((state: typeStore) => state.favorite);
  return (
    <Container>
      <BoxPokedex>
        <BoxLists>
          {pokemons.length > 0 && (
            <ul>
              {pokemons.map((pokemon, index) => {
                const { name, id, img } = pokemon;
                return (
                  <li key={`${name}-${id}-${index}`}>
                    {index + 1}.
                    <IconProfile
                      width={24}
                      height={24}
                      src={img || "/image/logo/icon_item.png"}
                    />
                    <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          )}
          {pokemons.length == 0 && <BoxNotfound>404 Notfound!</BoxNotfound>}
        </BoxLists>
      </BoxPokedex>
      <BoxMPokedex
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
const BoxPokedex = styled.div`
  position: fixed;
  width: 375px;
  height: 200px;
  background-image: url("/image/logo/pokedex-ui.png");
  background-repeat: no-repeat;
  background-size: 375px 200px;
  margin: 0 auto;
  cursor: pointer;

  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    position: static;
    width: 325px;
    height: 200px;
    background-size: 325px 200px;
  }
`;
const BoxLists = styled.div`
  max-width: 235px;
  height: 170px;
  overflow-y: scroll;
  border: 1px solid red;
  padding: 14px 8px;
  ul,
  li {
    list-style-type: none;
  }

  li {
    margin: 8px 0px;
    background: #eb362d;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 10px;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    word-wrap: break-word;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    max-width: 205px;
  }
`;

const BoxMPokedex = styled.div`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 40px;
  background-image: url("/image/logo/m-pokedex.png");
  background-repeat: no-repeat;
  background-size: 80px 40px;
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
    inset: -4px;
    position: absolute;
    border-radius: 24px;
    transform: translateZ(-1px);
    filter: blur(8px);
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
    display: block;
  }
`;
const BoxNotfound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  font-size: 14px;
`;

export default BoxRecommend;
