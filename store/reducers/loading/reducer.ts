import { loadingProps, initialState } from "./type";
import { SET_LOADING_FULLPAGE, RESET_LOADING_ALL } from "./action";

interface ActionType {
  type: string;
  payload: loadingProps;
}

const reducer = (
  state: loadingProps = initialState,
  action: ActionType
): loadingProps => {
  switch (action.type) {
    case SET_LOADING_FULLPAGE:
      return {
        ...state,
        loadingFullPage: true,
      };
    case RESET_LOADING_ALL:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
