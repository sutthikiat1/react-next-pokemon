import React, { useEffect } from "react";
import styled from "styled-components";
import { getPokemonByName } from "service/pokemon";
import { useDispatch, useSelector } from "react-redux";
import typeStore from "store/type";
import PokemonDetail from "components/Page/PokemonDetail/Index";
import LoadingFullPage from "components/Loading/LoadingFullPage";
import { RESET_LOADING_ALL } from "store/reducers/loading/action";
import SetTagMeta from "components/Metatag/MetaTag";

function PokemonPage({ dataFetch }) {
  const dispatch = useDispatch();
  const { loadingFullPage } = useSelector((state: typeStore) => state.loading);
  useEffect(() => {
    if (loadingFullPage) {
      dispatch({ type: RESET_LOADING_ALL });
    }
  }, []);
  return (
    <Container>
      <SetTagMeta
        titleWeb={`${dataFetch.name}`}
        descriptionWeb={"Pokémon Web App with React"}
        urlShare={`https://sutthikiat-pokemon.netlify.app/pokemon/${dataFetch.name}`}
        keywords={`Pokemon ${dataFetch.name}`}
        imageShare={"/image/logo/pokemon-hero.png"}
        author={"Sutthikiat Phongsakornmetha"}
        siteName={`https://sutthikiat-pokemon.netlify.app/pokemon/${dataFetch.name}`}
      />
      {loadingFullPage && <LoadingFullPage />}
      <ContainerMain>
        <PokemonDetail dataFetch={dataFetch} />
      </ContainerMain>
    </Container>
  );
}

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
  max-width: 935px;
  min-height: 100vh;
  margin: 0 auto;
`;

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await getPokemonByName(params.name);
  if (res) {
    return {
      props: {
        dataFetch: res,
      },
      revalidate: 60,
    };
  } else {
    return { notFound: true };
  }
}
export default PokemonPage;
