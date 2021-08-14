export interface FetchingProps {
  isFetchingPokemonLists: boolean;
}

export interface ActionType {
  type: string;
  payload: FetchingProps;
}

export const initialState: FetchingProps = {
  isFetchingPokemonLists: false,
};
