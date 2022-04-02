import { Key, MouseEvent } from 'react';

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
  onClickTitle: (event: MouseEvent<HTMLElement>) => void;
  onClickMoveWrite: (event: MouseEvent<HTMLElement>) => void;
}
