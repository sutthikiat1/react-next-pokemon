export interface AlertProp {
  open: boolean;
  text: string;
}

export interface ActionType {
  type: string;
  payload: AlertProp;
}

export const initialState: AlertProp = {
  open: false,
  text: "",
};
