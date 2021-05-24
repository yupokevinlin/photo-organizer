import { combineReducers } from "redux-immer";
import produce from "immer";
import { reducer as appReducer } from "./containers/App/reducer";

export const rootReducer = combineReducers(produce, {
  app: appReducer,
});
