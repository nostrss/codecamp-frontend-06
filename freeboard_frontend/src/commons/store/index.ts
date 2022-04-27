// 글로벌 스테이트 만들기

import { atom } from 'recoil';

// export const isEditState = atom({
//   key: 'isEditState',
//   default: false,
// });

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
