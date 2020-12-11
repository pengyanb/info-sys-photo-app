/* eslint-disable import/first */
const combineReducers = jest.fn(() => "rootReducer");
jest.mock("redux", () => {
  return {
    combineReducers
  };
});

import rootReducer from "../../redux/reducer";
import apiReducer from "../../redux/apis/reducer";

describe("redux/reducer.ts tests", () => {
  it("validate rootReducer is created and exported", () => {
    expect(combineReducers).toBeCalledWith({
      api: apiReducer
    });

    expect(rootReducer).toBe("rootReducer");
  });
});
