import { ChangeEvent, Key, MouseEvent } from 'react';

export interface IFetchPostList {
  data: {
    fetchBoards: [
      {
        _id: string;
        writer: String;
        title: String;
        createdAt: Key;
        youtubeUrl: String;
        likeCount: Number;
        dislikeCount: Number;
      }
    ];
  };
  onClickTitle: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveWrite: (event: MouseEvent<HTMLElement>) => void;
  keyword: string;
  setKeyword: Function;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeStart: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEnd: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchDate: (event: MouseEvent<HTMLButtonElement>) => void;
}
