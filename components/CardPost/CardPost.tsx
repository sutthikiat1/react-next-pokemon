import React, { useState, useMemo } from "react";
import Constant from "constant/index";
import { motion } from "framer-motion";
import styled from "styled-components";
import IconProfile from "components/IconProfile/IconProfile";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { SET_FAVORITE } from "store/reducers/favorite/action";
import { SET_LOADING_FULLPAGE } from "store/reducers/loading/action";
import { useMediaQuery } from "beautiful-react-hooks";
import typeStore from "store/type";
import { useRouter } from "next/router";

export const Favorite = () => {
  return (
    <ContainerFavorite>
      <>
        <motion.div
          animate={{
            opacity: [1, 1, 1, 1, 1, 1, 0.8, 0.5, 0],
            scale: 3,
          }}
          initial={{
            opacity: 1,
            scale: 0.0,
          }}
          exit="hidden"
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <i className="fas fa-heart"></i>
        </motion.div>
      </>
    </ContainerFavorite>
  );
};

var mylatesttap;
function CardPost({ pokemon }) {
  const router = useRouter();
  let isMobile = false;
  if (process.browser) {
    isMobile = useMediaQuery(`(max-width: ${Constant.SCREEN_SIZE.XS}px)`);
  }
  const { pokemons } = useSelector((state: typeStore) => state.favorite);
  const dispatch = useDispatch();
  const { id, name, order, sprites, weight, abilities, stats } = pokemon;
  const [isFavorite, setFavorite] = useState(false);

  function doubletap() {
    var now = new Date().getTime();
    var timesince = now - mylatesttap;
    if (timesince < 600 && timesince > 0 && isMobile) {
      handleFavorite();
    }
    mylatesttap = new Date().getTime();
  }

  const handleFavorite = () => {
    dispatch({
      type: SET_FAVORITE,
      payload: {
        id,
        name,
      },
    });

    setFavorite(true);
    setTimeout(() => {
      setFavorite(false);
    }, 2000);
  };

  const handleCheckFavorite = useMemo(() => {
    const isFavorite = pokemons.find((favorite) => favorite.id == id);

    if (isFavorite?.id) {
      return "/image/logo/pokeball.png";
    } else {
      return "/image/logo/pokeball-empty.png";
    }
  }, [pokemons]);

  return (
    <Container>
      <BoxHeadeer>
        <div className="left">
          <div className="icon">
            <IconProfile width={32} height={32} src={sprites.front_default} />
          </div>
          <div className="name">
            <span>{name}</span>
          </div>
        </div>

        <div className="right">
          <Image
            src={handleCheckFavorite}
            alt="pokeball-bg"
            width={35}
            height={35}
          />
        </div>
      </BoxHeadeer>
      <BoxBody>
        <BoxProfile>
          <BoxCircle />
          <Image
            src={sprites.other.dream_world.front_default}
            alt="pokemon"
            width={280}
            height={280}
            placeholder="blur"
            blurDataURL={sprites.other.dream_world.front_default}
            onClick={() => doubletap()}
            onDoubleClick={() => {
              if (!isMobile) handleFavorite();
            }}
          />
          {isFavorite && <Favorite />}
        </BoxProfile>
        <BoxAbilities>
          <div className="title">{name}</div>
          <div className="detail">
            <span>
              <i className="fas fa-heart"></i>
              &nbsp;
              {stats[0].base_stat}HP
            </span>
          </div>
        </BoxAbilities>
      </BoxBody>
      <BoxFooter>
        <BoxListsDetail>
          <div className="list">
            <div className="title">
              <span>Weight</span>
            </div>
            <div className="score">
              <span>{weight}</span>
            </div>
          </div>

          <div className="list">
            <div className="title">
              <span>Abilities</span>
            </div>
            <div className="score">
              <span>{abilities.length}</span>
            </div>
          </div>
        </BoxListsDetail>
        <ButtonView
          onClick={() => {
            dispatch({ type: SET_LOADING_FULLPAGE });
            router.push(`/pokemon/${name}`);
          }}
        >
          View
        </ButtonView>
      </BoxFooter>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 640px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  transform-style: preserve-3d;
  background: #fff;
  margin-bottom: 24px;

  &:hover {
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
      border-radius: 16px;
      filter: blur(8px);
      transform: translateZ(-1px);
      animation: rgb 3s infinite;
    }
  }

  @keyframes rgb {
    0% {
      opacity: 0.2;
      background-position: 0% 50%;
    }
    50% {
      opacity: 0.8;
      background-position: 100% 50%;
    }
    100% {
      opacity: 1;
      background-position: 0% 50%;
    }
  }
`;
const BoxHeadeer = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  z-index: 1;
  .left {
    width: 80%;
    height: 100%;
    flex-wrap: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    .icon {
      width: 32px;
      height: 32px;
    }
    .name {
      width: 100%;
      flex-grow: 1;
      font-size: 14px;
    }
  }
  .right {
    width: 20%;
    flex-wrap: 1;
    height: 100%;
    text-align: right;
  }
`;

const BoxBody = styled.div`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;
`;
const BoxProfile = styled.div`
  width: 100%;
  flex-grow: 1;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxCircle = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 325px;
  height: 325px;
  border-radius: 50%;

  background-image: url("/image/logo/pokeball-bg.png");
  background-repeat: no-repeat;
  background-size: 325px 325px;
  opacity: 0.7;
`;

const BoxFooter = styled.div`
  width: 100%;
  height: 120px;
  text-align: center;

  background-color: #c71129;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 8px;
  .list {
    font-size: 12px;
    color: #fff;
  }
`;
const BoxListsDetail = styled.div`
  width: 100%;
  height: 40px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 8px;
  position: relative;
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .title {
      width: 100%;
      flex-grow: 1;
      font-size: 14px;
    }
    .score {
      margin-top: 8px;
      width: 100%;
      flex-grow: 1;
      font-size: 10px;
    }
  }
`;
const ButtonView = styled.button`
  position: relative;
  width: 100%;
  flex-grow: 1;
  max-width: 280px;
  margin: 0 auto;
  height: 26px;
  border-radius: 6px;

  background-color: #ffffff;
  border: none;
  border-radius: 24px;
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
    inset: -4px;
    position: absolute;
    border-radius: 24px;
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
`;

const BoxAbilities = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  .title {
    width: 100%;
  }

  .detail {
    display: flex;
    align-items: center;
    .fa-heart {
      font-size: 24px;
      color: #fb655d;
    }
    font-size: 12px;
    color: #fb655d;
  }
  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    top: 20px;
  }
`;

const ContainerFavorite = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .fa-heart {
    font-size: 32px;
    color: #e10b2f;
    transition: 0.5s all;
  }
`;

export default CardPost;
