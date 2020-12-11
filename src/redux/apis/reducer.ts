import {
  ACTION_GET_ALBUMS,
  ACTION_GET_ALBUMS_RESPONSE,
  ACTION_GET_ALBUMS_FAILED,
  ACTION_GET_PHOTOS,
  ACTION_GET_PHOTOS_RESPONSE,
  ACTION_GET_PHOTOS_FAILED
} from "./constants";

import {
  IAlbumInfo,
  IPhotoInfo,
  IActionGetAlbums,
  IActionGetAlbumsResponse,
  IActionGetAlbumsFailed,
  IActionGetPhotos,
  IActionGetPhotosResponse,
  IActionGetPhotosFailed
 } from "./actions";

 export interface IApiState {
  albums: IAlbumInfo[];
  albumsError: any;
  photos: IPhotoInfo[];
  photosError: any
 } 

const initialState: IApiState = {
  albums: [],
  albumsError: undefined,
  photos: [],
  photosError: undefined
};

const apiReducer = (state: IApiState = initialState, action: IActionGetAlbums | IActionGetAlbumsResponse | IActionGetAlbumsFailed | IActionGetPhotos | IActionGetPhotosResponse | IActionGetPhotosFailed) => {
  switch (action.type) {
    case ACTION_GET_ALBUMS:
      return {
        ...state,
        albums: [],
        albumsError: undefined,
      };
    case ACTION_GET_ALBUMS_RESPONSE:
      return {
        ...state,
        albums: (action as IActionGetAlbumsResponse).albums,
        albumsError: undefined,
      };
    case ACTION_GET_ALBUMS_FAILED:
      return {
        ...state,
        albums: [],
        albumsError: (action as IActionGetAlbumsFailed).error,
      };
    case ACTION_GET_PHOTOS:
      return {
        ...state,
        photos:[],
        photosError: undefined,
      };
    case ACTION_GET_PHOTOS_RESPONSE:
      return {
        ...state,
        photos: (action as IActionGetPhotosResponse).photos,
        photosError: undefined
      };
    case ACTION_GET_PHOTOS_FAILED:
      return {
        ...state,
        photos: [],
        photosError: (action as IActionGetAlbumsFailed).error
      };
    default:
      return state;
  }
};

export default apiReducer;