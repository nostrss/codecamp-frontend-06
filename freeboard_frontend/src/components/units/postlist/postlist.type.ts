import { Key } from 'react';

export interface IFetchPostList {
  data: {
    fetchBoards: [
      {
        _id: String;
        writer: String;
        title: String;
        createdAt: Key;
      }
    ];
  };
}
