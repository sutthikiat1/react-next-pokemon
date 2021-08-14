import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import typeStore from "store/type";
import CardListsRecommend from "components/CardListsRecommend/CardRecommend";
import CardPost from "components/CardPost/CardPost";
import VisibilitySensor from "react-visibility-sensor";
import { Loader } from "components/Loading/Loader";
interface BoxMainProp {
  datas: any;
  fetchDataPokemon: Function;
}
function BoxMain({ datas, fetchDataPokemon }: BoxMainProp) {
  const { data, count } = datas;
  const { isFetchingPokemonLists } = useSelector(
    (state: typeStore) => state.fetching
  );

  const handleFeatch = () => {
    if (!isFetchingPokemonLists) {
      fetchDataPokemon();
    }
  };
  return (
    <Container>
      <CardListsRecommend data={data} />
      <SectionPost id="box-post">
        {data.length > 0 && (
          <>
            {data.map((pokemon, index) => {
              const last = index + 1 === data.length;
              return (
                <React.Fragment key={`${pokemon.name}-${pokemon.id}`}>
                  <CardPost pokemon={pokemon} />
                  {last && data.length < count && (
                    <VisibilitySensor
                      partialVisibility={true}
                      delayedCall={true}
                    >
                      {({ isVisible }) => (
                        <>
                          {isVisible &&
                            !isFetchingPokemonLists &&
                            handleFeatch()}
                          <BoxLoadingItem>
                            <Loader />
                          </BoxLoadingItem>
                        </>
                      )}
                    </VisibilitySensor>
                  )}
                </React.Fragment>
              );
            })}
          </>
        )}
      </SectionPost>
    </Container>
  );
}

const Container = styled.div`
  width: 515px;
  max-width: 515px;
  flex-grow: 1;
  padding-top: 30px;
  margin: 0 auto;
`;
const SectionPost = styled.section`
  margin-top: 24px;
`;
const BoxLoadingItem = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-bottom: 100px;
`;
export default BoxMain;
