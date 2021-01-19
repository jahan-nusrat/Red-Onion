import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import logger from "redux-logger";

import rootReducer from "./ducks";
import rootSaga from "./sagas";
import history from "../routes/history";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(sagaMiddleware, ...middlewares))
);

sagaMiddleware.run(rootSaga);

export { store };
