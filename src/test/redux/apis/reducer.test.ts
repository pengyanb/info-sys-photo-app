import apiReducer from "../../../redux/apis/reducer";
import {
  ACTION_GET_ALBUMS,
  ACTION_GET_ALBUMS_RESPONSE,
  ACTION_GET_ALBUMS_FAILED,
  ACTION_GET_PHOTOS,
  ACTION_GET_PHOTOS_RESPONSE,
  ACTION_GET_PHOTOS_FAILED
} from "../../../redux/apis/constants";
import { IAlbumInfo, IPhotoInfo } from "../../../redux/apis/actions";

const initialState = {
  albums: [],
  albumsError: undefined,
  photos: [],
  photosError: undefined
};

let state:any;

describe("/redux/apis/reducer tests", () => {
  beforeEach(() => {
    state = {
      ...initialState
    };
  });

  it("validate ACTION_GET_ALBUMS", () => {
    const result = apiReducer(state, { type: ACTION_GET_PHOTOS_FAILED });
    expect(result).toMatchObject({
      ...initialState,
      albums: [],
      albumsError: undefined
    });
  });

  it("validate ACTION_GET_ALBUMS_RESPONSE", () => {
    const album: IAlbumInfo = {
      userId: 1,
      id: 1,
      title: "title"
    };
    const result = apiReducer(state, { type: ACTION_GET_ALBUMS_RESPONSE, albums: [album]});
    expect(result).toMatchObject({
      ...initialState,
      albums: [album],
      albumsError: undefined
    });
  });

  it("validate ACTION_GET_ALBUMS_FAILED", () => {
    const result = apiReducer(initialState, { type: ACTION_GET_ALBUMS_FAILED, error: "error" });
    expect(result).toMatchObject({
      ...initialState,
      albums: [],
      albumsError: "error"
    });
  });

  it("validate ACTION_GET_PHOTOS", () => {
    const result = apiReducer(state, { type: ACTION_GET_PHOTOS });
    expect(result).toMatchObject({
      ...initialState,
      photos: [],
      photosError: undefined
    });
  });

  it("validate ACTION_GET_PHOTOS_RESPONSE", () => {
    const photo: IPhotoInfo = {
      albumId: 1,
      id:1,
      title: "title",
      thumbnailUrl: "thumbnailUrl",
      url: "url"
    };
    const result = apiReducer(state, { type: ACTION_GET_PHOTOS_RESPONSE, photos: [photo]});
    expect(result).toMatchObject({
      ...initialState,
      photos: [photo],
      photosError: undefined
    });
  });

  it("validate ACTION_GET_PHOTOS_FAILED", () => {
    const result = apiReducer(state, { type: ACTION_GET_PHOTOS_FAILED, error: "error" });
    expect(result).toMatchObject({
      ...initialState,
      photos: [],
      photosError: "error"
    });
  });
});