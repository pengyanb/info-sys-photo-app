import { call, put, takeLatest, all } from "redux-saga/effects"
import axios from "axios";
import { ACTION_GET_ALBUMS, ACTION_GET_PHOTOS } from "./constants";
import { actionGetAlbumsResponse, actionGetAlbumsFailed, actionGetPhotosResponse, actionGetPhotosFailed } from "./actions";

const CONST_ALBUMS_URL = "http://jsonplaceholder.typicode.com/albums";
const CONST_PHOTOS_URL = "http://jsonplaceholder.typicode.com/photos";

export function* getAlbumsRequest() {
  
  try {
    const result = yield call((axios as any), {
      url: CONST_ALBUMS_URL,
      method: "GET"
    });
    console.log("!!!!getAlbumsRequest", result.data);
    yield put(actionGetAlbumsResponse(result.data));
  } catch (err) {
    yield put(actionGetAlbumsFailed(err));
  }
};

export function* getPhotosRequest() {
  try {
    const result = yield call((axios as any), {
      url: CONST_PHOTOS_URL,
      method: "GET"
    });
    yield put(actionGetPhotosResponse(result.data));
  } catch (err) {
    yield put(actionGetPhotosFailed(err));
  }
}

export function* getAlbumsWatcher() {
  yield takeLatest(ACTION_GET_ALBUMS, getAlbumsRequest);
}

export function* getPhotosWatcher() {
  yield takeLatest(ACTION_GET_PHOTOS, getPhotosRequest);
}

export default function* apiSaga() {
  yield all([getAlbumsWatcher(), getPhotosWatcher()]);
}