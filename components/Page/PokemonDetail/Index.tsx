import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Constant from "constant/index";
import { useDispatch } from "react-redux";
import { SET_LOADING_FULLPAGE } from "store/reducers/loading/action";

function PokemonDetail({ dataFetch }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    name,
    sprites,
    weight,
    height,
    base_experience,
    abilities,
    moves,
    stats,
  } = dataFetch;
  return (
    <Container>
      <BoxHeader>
        <div className="left">
          <i
            className="fas fa-chevron-left"
            onClick={() => {
              dispatch({ type: SET_LOADING_FULLPAGE });
              router.push('/')
            }}
          ></i>
          &nbsp;&nbsp;
          {name}
        </div>
        <div className="right"></div>
      </BoxHeader>
      <BoxBody>
        <BoxImage>
          <Image
            src={sprites.other.dream_world.front_default}
            alt="pokemon"
            width={325}
            height={325}
            placeholder="blur"
            blurDataURL={sprites.other.dream_world.front_default}
          />
        </BoxImage>
        <BoxSprites>
          <Sprites>
            <Image
              src={sprites.front_shiny}
              alt="pokemon"
              width={56}
              height={56}
              placeholder="blur"
              blurDataURL={sprites.front_shiny}
            />
          </Sprites>
          <Sprites>
            <Image
              src={sprites.back_shiny}
              alt="pokemon"
              width={56}
              height={56}
              placeholder="blur"
              blurDataURL={sprites.back_shiny}
            />
          </Sprites>
          <Sprites>
            <Image
              src={sprites.front_default}
              alt="pokemon"
              width={56}
              height={56}
              placeholder="blur"
              blurDataURL={sprites.front_default}
            />
          </Sprites>
        </BoxSprites>
        <BoxDetail>
          <div className="exp">
            <span>Exp: {base_experience}</span>
          </div>
          <div className="exp">
            <span>Height: {height}</span>
          </div>
          <div className="exp">Weight: {weight}</div>
        </BoxDetail>
        <BoxDec>
          <div className="title">
            <div className="box"></div>
            <h1>Abilitie</h1>
          </div>
          <ul>
            {abilities.length > 0 &&
              abilities.map((abilitie, index) => {
                const { ability } = abilitie;
                return <li key={`${abilitie}-${index}`}>{ability.name}</li>;
              })}
          </ul>
        </BoxDec>
        <BoxDec>
          <div className="title">
            <div className="box"></div>
            <h1>Move</h1>
          </div>
          <ul>
            {moves.length > 0 &&
              moves.map((move, index) => {
                const { move: moveSkil } = move;
                return (
                  <li key={`${moveSkil.name}-${index}`}>{moveSkil.name}</li>
                );
              })}
          </ul>
        </BoxDec>
        <BoxDec>
          <div className="title">
            <div className="box"></div>
            <h1>Stats</h1>
          </div>
          <ul>
            {stats.length > 0 &&
              stats.map((stat, index) => {
                const { stat: statSkil } = stat;
                return (
                  <li key={`${statSkil.name}-${index}`}>{statSkil.name}</li>
                );
              })}
          </ul>
        </BoxDec>
      </BoxBody>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const BoxHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  .fa-chevron-left {
    font-size: 24px;
    height: 56px;
    display: flex;
    align-items: center;
  }
  .left {
    font-size: 24px;
    height: 56px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
const BoxBody = styled.div`
  margin-top: 24px;
  flex-grow: 1;
`;

const BoxImage = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
`;
const BoxDetail = styled.div`
  margin-top: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 14px;
  justify-items: center;
  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    font-size: 18px;
    display: inline;
    text-align: center;
    line-height: 44px;
  }
`;
const BoxDec = styled.div`
  margin-top: 60px;
  ul {
    margin-top: 24px;
    margin-left: 48px;
    list-style-type: none;
  }
  li {
    margin: 12px 0px;
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 16px;
    .box {
      margin-right: 24px;
      width: 24px;
      height: 24px;
      background-color: #000;
    }
  }
`;
const BoxSprites = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 8px;
  margin-bottom: 24px;
`;
const Sprites = styled.div`
  width: 106px;
  height: 106px;
  border: 2px solid black;
  border-radius: 50%;
  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    width: 76px;
    height: 76px;
  }
  img {
    width: 106px;
    height: 106px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
      width: 76px;
      height: 76px;
    }
  }
`;
export default PokemonDetail;
