import { FavoriteProps, initialState, ActionType } from "./type";
import { SET_FAVORITE, RESET_FAVORITE } from "./action";

const reducer = (state: FavoriteProps = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_FAVORITE:
      const index = state.pokemons.find(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (index) {
        return {
          ...state,
          pokemons: state.pokemons.filter(
            (pokemon) => pokemon.id !== action.payload.id
          ),
        };
      } else {
        return { ...state, pokemons: [...state.pokemons, ...[action.payload]] };
      }
    case RESET_FAVORITE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
