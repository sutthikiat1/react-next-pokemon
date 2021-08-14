import { AlertProp, initialState, ActionType } from "./type";
import { RESET_ALERT, SET_ALERT } from "./action";

const reducer = (state: AlertProp = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, ...action.payload };
    case RESET_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
