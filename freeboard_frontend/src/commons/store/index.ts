// 글로벌 스테이트 만들기

import { atom, selector } from 'recoil';
import { getAccessToken } from '../libraries/getAccessToken';

export const isEditState = atom({
  key: 'isEditState',
  default: false,
});

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    email: '',
    name: '',
  },
});

export const postDataState = atom({
  key: 'postData',
  default: {
    fetchBoard: {
      boardAddress: {
        __typename: '',
        zipcode: '',
        address: '',
        addressDetail: '',
      },
      contents: '',
      createdAt: '',
      dislikeCount: 0,
      images: [],
      likeCount: 0,
      title: '',
      writer: '',
      youtubeUrl: '',
      __typename: '',
      _id: '',
    },
  },
});

export const productDataState = atom({
  key: 'productData',
  default: {
    fetchUseditem: {
      contents: '',
      createdAt: '',
      images: [],
      name: '',
      pickedCount: 0,
      price: 0,
      remarks: '',
      seller: {},
      tags: [],
      useditemAddress: {},
    },
  },
});

export const visitedPageState = atom({
  key: 'visitedPageState',
  default: '/',
});

export const cartCount = atom({
  key: 'localCart',
  default: 0,
});

export const restoreAccessTokenLoadable = selector({
  key: 'restoreAccessTokenLoadable',
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
