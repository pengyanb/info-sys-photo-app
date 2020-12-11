import React, { FC, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { IApiState } from "./redux/apis/reducer";
import { actionGetAlbums, actionGetPhotos, IAlbumInfo, IPhotoInfo } from "./redux/apis/actions";

import { Alert, List, Typography, Modal } from "antd";
interface IApp {
  albums: IAlbumInfo[];
  albumsError: any;
  photos: IPhotoInfo[];
  photosError: any;
  getAlbums: () => void;
  getPhotos: () => void;
}

export const App: FC<IApp> = ({ albums, photos, albumsError, photosError, getAlbums, getPhotos }) => {
  useEffect(() => {
    getAlbums();
    getPhotos();
  }, [getAlbums, getPhotos]);

  const [selectedAlbum, setSelectedAlbum] = useState<IAlbumInfo | undefined>(undefined);
  const [albumPhotos, setAlbumPhotos] = useState<IPhotoInfo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<IPhotoInfo | undefined>(undefined)

  const onAlbumClick = (album: IAlbumInfo) => {
    if (album.id === selectedAlbum?.id) {
      setSelectedAlbum(undefined);
      setAlbumPhotos([]);
      setSelectedPhoto(undefined);
    } else {
      setSelectedAlbum(album);
      const thumbnails: IPhotoInfo[] = [];
      photos.map(photo => {
        if (photo.albumId === album.id) {
          thumbnails.push(photo)
        }
      });
      setAlbumPhotos(thumbnails)
    }
  }

  const onThumnailClick = (photo: IPhotoInfo) => {
    setSelectedPhoto(photo);
  };

  if (albumsError) {
    return <Alert type="error" message={albumsError.toString()} showIcon />;
  } else if (photosError) {
    return <Alert type="error" message={photosError.toString()} showIcon />;
  } else {
    return (<>
      <List
        header={<h3>Album list</h3>}
        bordered
        dataSource={albums}
        renderItem={item => (
          <List.Item
            style={{ cursor: "pointer", flexDirection: "column" }}
          >
            <div onClick={() => {
              onAlbumClick(item);
            }}><Typography.Text>{item.title}</Typography.Text></div>
            { item.id === selectedAlbum?.id ? <div>{
              albumPhotos.map((photo, index) => <span onClick={() => {
                onThumnailClick(photo);
              }} key={index}><img alt="thumnail" src={photo.thumbnailUrl} /></span>)
            }</div> : null
            }
          </List.Item>)}
      />
      <Modal title={selectedPhoto?.title} visible={selectedPhoto !== undefined} onOk={() => setSelectedPhoto(undefined)} onCancel={() => setSelectedPhoto(undefined)} width={800}>
        <img alt="full" src={selectedPhoto?.url} />
      </Modal>
    </>);
  }
}

const mapStateToProps = (state: { api: IApiState }) => ({
  albums: state.api.albums,
  albumsError: state.api.albumsError,
  photos: state.api.photos,
  photosError: state.api.photosError
});

const mapDispatchToProps = (dispatch: any) => ({
  getAlbums: () => dispatch(actionGetAlbums()),
  getPhotos: () => dispatch(actionGetPhotos())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
