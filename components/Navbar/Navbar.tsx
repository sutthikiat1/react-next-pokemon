import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Constant from "constant/index";
import { useSelector } from "react-redux";
import typeStore from "store/type";
import SearchInput from "components/SearchInput/SearchInput";
function Navbar() {
  const { pokemons } = useSelector((state: typeStore) => state.favorite);
  return (
    <Main>
      <Container>
        <BoxLogo>
          <Image
            src="/image/logo/pokemon_logo.png"
            alt="me"
            width="103"
            height="34"
          />
        </BoxLogo>
        <SearchInput />
        <BoxLogo>
          <i className="fas fa-heart"></i>
          <BoxAmountFavorite>{pokemons.length || 0}</BoxAmountFavorite>
        </BoxLogo>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 54px;
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  border-bottom: 1px solid #eb362d;
  background-color: #eb362d;
  z-index: 100;
`;
const Container = styled.div`
  max-width: 975px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  gap: 8px;
  margin: 0 auto;
`;
const BoxLogo = styled.div`
  width: 120px;
  height: 54px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    object-fit: cover;
  }
  .fa-heart {
    font-size: 40px;
    color: #faedef;
  }
`;
const BoxSearch = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 215px;
  height: 28px;
  background: rgba(var(--b3f, 250, 250, 250), 1);
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 6px;
  outline: none;
  text-indent: 8px;
  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    width: 140px;
  }
`;
const BoxAmountFavorite = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e10b2f;
`;
export default Navbar;
