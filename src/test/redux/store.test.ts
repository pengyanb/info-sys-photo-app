/* eslint-disable import/first */
const createStore = jest.fn(() => "store");
const applyMiddleware = jest.fn(() => "middlewares");
const combineReducers = jest.fn(() => "reducers");
const sageMiddleWare = { run: jest.fn() };
const createSagaMiddleware = jest.fn(() => sageMiddleWare);
const composeWithDevTools = jest.fn(() => "devTools");
jest.mock("redux", () => {
  return {
    createStore,
    applyMiddleware,
    combineReducers
  };
});

jest.mock("redux-saga", () => {
  return createSagaMiddleware;
});

jest.mock("redux-devtools-extension", () => {
  return {
    composeWithDevTools
  };
})

import store from "../../redux/store";
import apiSaga from "../../redux/apis/sagas";

describe("redux/store.ts tests", () => {
  it("validate store is created by calling createStore", () => {
    expect(createStore).toBeCalledWith("reducers", undefined, "devTools");
    expect(store).toBe("store");
  });

  it("validate sagaMiddleWare is created", () => {
    expect(createSagaMiddleware).toBeCalledTimes(1);

  });

  it("validate sageMiddleWare.run is triggered", () => {
    expect(sageMiddleWare.run).toBeCalledWith(apiSaga);
  });

  it("validate rest of function is called with correct params", () => {
    expect(applyMiddleware).toBeCalledWith(sageMiddleWare);
    expect(composeWithDevTools).toBeCalledWith("middlewares");
  });
});