export interface ActionType {
  type: string;
  payload: pokemonsProp;
}

export interface FavoriteProps {
  pokemons: any[];
}

export interface pokemonsProp {
  id: string;
  name: string;
  img: string;
}

export const initialState: FavoriteProps = {
  pokemons: [],
};
