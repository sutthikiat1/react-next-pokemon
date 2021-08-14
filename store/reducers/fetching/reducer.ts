import { FetchingProps, initialState, ActionType } from "./type";
import { SET_FETCHING, RESET_FETCHING } from "./action";

const reducer = (state: FetchingProps = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_FETCHING:
      return { ...state, ...action.payload };
    case RESET_FETCHING:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
