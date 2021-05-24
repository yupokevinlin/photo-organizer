import {AppActionTypes} from "./types";
export type AppAction = AppInitAction
  | AppSetIsInitCompleteAction;

export interface AppInitAction {
  type: typeof AppActionTypes.INIT;
}
export const init = (): AppInitAction => {
  return {
    type: AppActionTypes.INIT,
  };
};

export interface AppSetIsInitCompleteAction {
  type: typeof AppActionTypes.SET_IS_INIT_COMPLETE;
  isInitComplete: boolean;
}
export const setIsInitComplete = (isInitComplete: boolean): AppSetIsInitCompleteAction => {
  return {
    type: AppActionTypes.SET_IS_INIT_COMPLETE,
    isInitComplete: isInitComplete,
  };
};
