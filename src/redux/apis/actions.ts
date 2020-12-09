import { ACTION_GET_ALBUMS, ACTION_GET_ALBUMS_RESPONSE, ACTION_GET_ALBUMS_FAILED, ACTION_GET_PHOTOS, ACTION_GET_PHOTOS_RESPONSE, ACTION_GET_PHOTOS_FAILED } from "./constants";

export interface IAlbumInfo {
  userId: number;
  id: number;
  title: string;
}

export interface IPhotoInfo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IActionGetAlbums {
  type: string;
}

export interface IActionGetAlbumsResponse {
  type: string;
  albums: IAlbumInfo[];
}

export interface IActionGetAlbumsFailed {
  type: string;
  error: any;
}

export interface IActionGetPhotos {
  type: string;
}

export interface IActionGetPhotosResponse {
  type: string;
  photos: IPhotoInfo[];
}

export interface IActionGetPhotosFailed {
  type: string;
  error: any;
}

export function actionGetAlbums(): IActionGetAlbums {
  return {
    type: ACTION_GET_ALBUMS
  }
}

export function actionGetAlbumsResponse(albums: IAlbumInfo[]): IActionGetAlbumsResponse {
  return {
    type: ACTION_GET_ALBUMS_RESPONSE,
    albums
  };
}

export function actionGetAlbumsFailed(error: any): IActionGetAlbumsFailed {
  return {
    type: ACTION_GET_ALBUMS_FAILED,
    error
  }
}

export function actionGetPhotos(): IActionGetPhotos {
  return {
    type: ACTION_GET_PHOTOS
  }
}

export function actionGetPhotosResponse(photos: IPhotoInfo[]): IActionGetPhotosResponse {
  return {
    type: ACTION_GET_PHOTOS_RESPONSE,
    photos
  }
}

export function actionGetPhotosFailed(error: any): IActionGetPhotosFailed {
  return {
    type: ACTION_GET_PHOTOS_FAILED,
    error
  }
}