import React from "react";
import { shallow, mount } from "enzyme";

import { App } from "../App";
import { IAlbumInfo, IPhotoInfo } from "../redux/apis/actions";

describe("App tests", () => {
  it("snapshot test", () => {
    const getAlbums = jest.fn();
    const getPhotos = jest.fn();

    const album: IAlbumInfo = {
      id: 1,
      userId: 1,
      title: "album"
    };

    const photo: IPhotoInfo = {
      id: 1,
      albumId: 1,
      title: "photo",
      thumbnailUrl: "thumbnailUrl",
      url: "url"
    };
    window.matchMedia = jest.fn();
    const renderedApp = shallow(<App albums={[album]} photos={[photo]} getAlbums={getAlbums} getPhotos={getPhotos} albumsError={undefined} photosError={undefined} />);
    expect(renderedApp).toMatchSnapshot();
  });

  it("click on list item and click on thumbnail", () => {
    const getAlbums = jest.fn();
    const getPhotos = jest.fn();

    const album: IAlbumInfo = {
      id: 1,
      userId: 1,
      title: "album"
    };

    const photo: IPhotoInfo = {
      id: 1,
      albumId: 1,
      title: "photo",
      thumbnailUrl: "thumbnailUrl",
      url: "url"
    };
    (window as any).matchMedia = jest.fn(() => ({
      addListener: jest.fn()
    }));
    const renderedApp = mount(<App albums={[album]} photos={[photo]} getAlbums={getAlbums} getPhotos={getPhotos} albumsError={undefined} photosError={undefined} />);

    const listDiv = renderedApp.find('li.ant-list-item > div');
    expect(listDiv).not.toBeUndefined();
    expect(listDiv.html()).toBe('<div><span class=\"ant-typography\">album</span></div>');

    listDiv.simulate("click");

    const img = renderedApp.find('img[alt="thumnail"]');
    expect(img.html()).toEqual('<img alt="thumnail" src="thumbnailUrl">');

    const imgSpan = renderedApp.find("li.ant-list-item>div>span");
    imgSpan.simulate("click");
    const imgFull = renderedApp.find('img[alt="full"]');
    expect(imgFull).not.toBeUndefined();
  })
});

