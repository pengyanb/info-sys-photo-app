/* eslint-disable import/first */
import { runSaga } from "redux-saga";
import { takeLatest, all } from "redux-saga/effects"
const result = {
  data: "data"
};
const axios = jest.fn(() => Promise.resolve(result));
jest.mock("axios", () => axios);

import apiSaga, {
  getAlbumsRequest,
  getPhotosRequest,
  getAlbumsWatcher,
  getPhotosWatcher
 } from "../../../redux/apis/sagas";
import * as actions from "../../../redux/apis/actions";

import { ACTION_GET_ALBUMS_RESPONSE, ACTION_GET_PHOTOS_RESPONSE, ACTION_GET_ALBUMS, ACTION_GET_PHOTOS } from "../../../redux/apis/constants";

const CONST_ALBUMS_URL = "http://jsonplaceholder.typicode.com/albums";
const CONST_PHOTOS_URL = "http://jsonplaceholder.typicode.com/photos";

 describe("redux/apis/sagas tests", () => {
  it("getAlbumsRequest test", async () => {
    const dispatched: any = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, getAlbumsRequest);

    expect(axios).toBeCalledWith({
      url: CONST_ALBUMS_URL,
      method: "GET"
    });

    expect(dispatched).toEqual([
      {
        type: ACTION_GET_ALBUMS_RESPONSE,
        albums: "data"
      }
    ]);
  });

  it("getPhotosRequest test", async () => {
    const dispatched: any = [];
    await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, getPhotosRequest);

    expect(axios).toBeCalledWith({
      url: CONST_PHOTOS_URL,
      method: "GET"
    });

    expect(dispatched).toEqual([
      {
        type: ACTION_GET_PHOTOS_RESPONSE,
        photos: "data"
      }
    ]);
  });

  it("getAlbumsWatcher test", () => {
    const result = getAlbumsWatcher();
    expect(result.next().value).toEqual(takeLatest(ACTION_GET_ALBUMS, getAlbumsRequest));
  });

  it("getPhotosWatcher test", () => {
    const result = getPhotosWatcher();
    expect(result.next().value).toEqual(takeLatest(ACTION_GET_PHOTOS, getPhotosRequest));
  })

  it("apiSaga test", () => {
    const result = apiSaga();
    expect(result.next().value).toEqual(all([getAlbumsWatcher(), getPhotosWatcher()]));
  })
 });


