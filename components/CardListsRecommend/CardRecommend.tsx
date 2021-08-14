import React, { useState, useRef } from "react";
import styled from "styled-components";
import IconProfile from "components/IconProfile/IconProfile";

var scrollLeft = 0;
function CardListsRecommend({ data }) {
  const boxItem = useRef(null);
  const [usePosLeft, setPosLeft] = useState(0);
  function scrollByLeft() {
    document.getElementById("box-item").scrollBy({
      left: 100,
      behavior: "smooth",
    });
    scrollLeft = document.getElementById("box-item").scrollLeft + 100;
    setPosLeft(scrollLeft);
  }
  function scrollByRight() {
    document.getElementById("box-item").scrollBy({
      left: -100,
      behavior: "smooth",
    });
    scrollLeft = document.getElementById("box-item").scrollLeft - 100;
    setPosLeft(scrollLeft);
  }

  const handleDisabledScroll = () => {
    if (usePosLeft > 0) return false;
    return true;
  };

  return (
    <Container>
      <BoxItem id="box-item" ref={boxItem}>
        {data.length > 0 &&
          data.map((pokemon) => {
            return (
              <IconProfile
                key={pokemon.id}
                src={pokemon?.sprites?.other?.dream_world?.front_default}
              />
            );
          })}
      </BoxItem>
      <BoxButtonPrev
        onClick={() => scrollByRight()}
        disabled={handleDisabledScroll()}
      >
        <button>
          <i className="fas fa-chevron-left"></i>
        </button>
      </BoxButtonPrev>
      <BoxButtonNext
        onClick={() => scrollByLeft()}
        disabled={handleDisabledScroll()}
      >
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </BoxButtonNext>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 118px;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;
const BoxItem = styled.div`
  position: relative;
  max-width: 100vw;
  padding: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  outline: 0;
  gap: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const BoxButtonNext = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const BoxButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: ${({ disabled }) => (disabled ? "none" : "flex")};
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default CardListsRecommend;
