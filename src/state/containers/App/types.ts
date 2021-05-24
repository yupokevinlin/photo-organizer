export interface AppState {
  isInitComplete: boolean;
}

export enum AppActionTypes {
  INIT = "app.INIT",
  SET_IS_INIT_COMPLETE = "app.SET_IS_INIT_COMPLETE",
}
