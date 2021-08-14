import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import typeStore from "store/type";
import { SET_FETCHING } from "store/reducers/fetching/action";
import styled from "styled-components";
import Constant from "constant/index";
import Navbar from "components/Navbar/Navbar";
import BoxMain from "components/Page/Index/BoxMain";
import BoxRecommend from "components/Page/Index/BoxRecommend";
import { getPokemonLists, getPokemonByName } from "service/pokemon";
import PopupAlert from "components/Popup/Popup";
import LoadingFullPage from "components/Loading/LoadingFullPage";

const Index = ({ dataFetch }) => {
  const { loadingFullPage } = useSelector((state: typeStore) => state.loading);
  const dispatch = useDispatch();
  const [usePokemons, setPokemons] = useState({
    data: dataFetch.data,
    count: dataFetch.count,
  });

  const handleGetPokemonLists = async () => {
    const { results: pokemons } = await getPokemonLists(
      usePokemons.data.length
    );
    if (pokemons.length > 0) {
      const dataFeatch = await Promise.all(
        pokemons.map(async (pokemon) => {
          const pokemonData = await getPokemonByName(pokemon.name);
          return pokemonData;
        })
      );
      dispatch({
        type: SET_FETCHING,
        payload: {
          isFetchingPokemonLists: true,
        },
      });
      setPokemons((prev) => ({
        ...prev,
        data: [...prev.data, ...dataFeatch],
      }));

      setTimeout(() => {
        dispatch({
          type: SET_FETCHING,
          payload: {
            isFetchingPokemonLists: false,
          },
        });
      }, 1000);
    }
  };

  return (
    <Container>
      {loadingFullPage && <LoadingFullPage />}
      <PopupAlert />
      <Navbar />
      <ContainerMain>
        <SectionMain>
          <BoxMain
            datas={usePokemons}
            fetchDataPokemon={() => handleGetPokemonLists()}
          />
          <BoxRecommend />
        </SectionMain>
      </ContainerMain>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;
const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 54px;
  max-width: 935px;
  min-height: 100vh;
  margin: 0 auto;
`;
const SectionMain = styled.section`
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  @media only screen and (max-width: ${Constant.SCREEN_SIZE.XS}px) {
    flex-wrap: wrap-reverse;
  }
`;

export async function getStaticProps() {
  const { results: pokemons, count } = await getPokemonLists(0);
  if (pokemons.length > 0) {
    const data = await Promise.all(
      pokemons.map(async (pokemon) => {
        const pokemonData = await getPokemonByName(pokemon.name);
        return pokemonData;
      })
    );
    return {
      props: {
        dataFetch: {
          data,
          count,
        },
      },
    };
  }
}

export default Index;
