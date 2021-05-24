import { all } from "redux-saga/effects";
import AppSagas from "./containers/App/saga";

function* rootSaga() {
  yield all({
    app: all({
      ...AppSagas,
    }),
  });
}

export default rootSaga;
