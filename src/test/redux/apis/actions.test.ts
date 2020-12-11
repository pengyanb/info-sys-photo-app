import { 
  actionGetAlbums, 
  actionGetAlbumsResponse,
  actionGetAlbumsFailed,
  actionGetPhotos,
  actionGetPhotosResponse,
  actionGetPhotosFailed
} from "../../../redux/apis/actions";

import {
  ACTION_GET_ALBUMS,
  ACTION_GET_ALBUMS_RESPONSE,
  ACTION_GET_ALBUMS_FAILED,
  ACTION_GET_PHOTOS,
  ACTION_GET_PHOTOS_RESPONSE,
  ACTION_GET_PHOTOS_FAILED
} from "../../../redux/apis/constants";

describe("redux/apis/actions.ts tests", () => {
  it("validate actionGetAlbums returned value", () => {
    expect(actionGetAlbums()).toMatchObject({
      type: ACTION_GET_ALBUMS
    });
  });

  it("validate actionGetAlbumsResponse returned value", () => {
    expect(actionGetAlbumsResponse([])).toMatchObject({
      type: ACTION_GET_ALBUMS_RESPONSE,
      albums: []
    });
  });

  it("validate actionGetAlbumsFailed returned value", () => {
    expect(actionGetAlbumsFailed("error")).toMatchObject({
      type: ACTION_GET_ALBUMS_FAILED,
      error: "error"
    });
  });

  it("validate actionGetPhotos returned value", () => {
    expect(actionGetPhotos()).toMatchObject({
      type: ACTION_GET_PHOTOS
    });
  });

  it("validate actionGetPhotosResponse returned value", () => {
    expect(actionGetPhotosResponse([])).toMatchObject({
      type: ACTION_GET_PHOTOS_RESPONSE,
      photos: []
    });
  });

  it("validate actionGetPhotoFailed returned value", () => {
    expect(actionGetPhotosFailed("error")).toMatchObject({
      type: ACTION_GET_PHOTOS_FAILED,
      error: "error"
    });
  });
});