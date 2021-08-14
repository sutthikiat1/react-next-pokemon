import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Constant from "constant/index";
import { getPokemonByName } from "service/pokemon";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SET_ALERT } from "store/reducers/alert/action";
import {
  SET_LOADING_FULLPAGE,
  RESET_LOADING_ALL,
} from "store/reducers/loading/action";

function SearchInput() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [useQuery, setQuery] = useState("");
  const [useResults, setResults] = React.useState({});

  const handleSearch = async () => {
    if (useQuery !== "" || useQuery) {
      dispatch({ type: SET_LOADING_FULLPAGE });
      const res = await getPokemonByName(useQuery);
      dispatch({ type: RESET_LOADING_ALL });
      if (res.id) {
        dispatch({ type: SET_LOADING_FULLPAGE });
        router.push(`/pokemon/${useQuery}`);
      } else {
        dispatch({
          type: SET_ALERT,
          payload: {
            open: true,
            text: "Invalid name pokemon",
          },
        });
      }
    }
  };

  return (
    <BoxSearch>
      <Input
        placeholder="SEARCH Pokemon Name"
        vale={useQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleSearch();
          }
        }}
      />
      <BoxIconSearch onClick={() => handleSearch()}>
        <i className="fas fa-search"></i>
      </BoxIconSearch>
    </BoxSearch>
  );
}
const BoxSearch = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;
const Input = styled.input`
  width: 215px;
  height: 28px;
  background: rgba(var(--b3f, 250, 250, 250), 1);
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 6px;
  outline: none;
  text-indent: 8px;
  font-size: 8px;
  padding-right: 40px;
  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    width: 140px;
  }
`;

const BoxIconSearch = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid #fff;
  background-color: #eb362d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

export default SearchInput;
