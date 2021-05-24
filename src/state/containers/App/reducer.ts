import {AppActionTypes, AppState} from "./types";
import {AppAction} from "./actions";

export const initialState: AppState = {
  isInitComplete: false,
};

export const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.SET_IS_INIT_COMPLETE: {
      return {
        ...state,
        isInitComplete: action.isInitComplete,
      }
    }
    default:
      return state;
  }
};
