import {call, put, select, takeEvery, delay} from "redux-saga/effects";
import {
  AppActionTypes,
  AppState,
} from "./types";
import {Store} from "../../store";
import {AppInitAction} from "./actions";

export const appSagas = {
  initSaga: takeEvery(AppActionTypes.INIT, initSaga),
};

function * initSaga(action: AppInitAction): any {

}

function getAppStateSelector(store: Store): AppState {
  return store.app;
}

export default appSagas;
