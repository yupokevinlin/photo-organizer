import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

export type Store = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

  const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer));

  return {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga),
  };
}
