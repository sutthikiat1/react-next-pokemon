import { FavoriteProps } from "./reducers/favorite/type";
import { FetchingProps } from "./reducers/fetching/type";
import { AlertProp } from "./reducers/alert/type";
import { loadingProps } from "./reducers/loading/type";

export default interface typeStore {
  favorite: FavoriteProps;
  fetching: FetchingProps;
  alert: AlertProp;
  loading: loadingProps;
}
