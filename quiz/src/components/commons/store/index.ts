import { atom } from 'recoil';

export const isEditState = atom({
  key: 'isEditState',
  default: false,
});

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});
