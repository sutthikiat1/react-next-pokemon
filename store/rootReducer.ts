import { combineReducers } from "redux";
import typeStore from "./type";
import favorite from "./reducers/favorite/reducer";
import fetching from "./reducers/fetching/reducer";
import alert from "./reducers/alert/reducer";
import loading from "./reducers/loading/reducer";

const rootReducer = combineReducers<typeStore>({
  fetching,
  favorite,
  alert,
  loading,
});

export default rootReducer;
