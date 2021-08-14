import React from "react";
import styled from "styled-components";
import { getPokemonByName } from "service/pokemon";
import PokemonDetail from "components/Page/PokemonDetail/Index";

function PokemonPage({ dataFetch }) {
  return (
    <Container>
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
