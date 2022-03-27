import { ChangeEvent, Key } from 'react';

export interface IPostToCommnetData {
  data: {
    fetchBoard: {
      _id: String;
      writer: String;
      title: String;
      contents: String;
      createdAt: String;
      likeCount: Number;
      dislikeCount: Number;
    };
  };
}

export interface IFetchCommentData {
  fetchCommentData: {
    data: {
      fetchBoardComments: [
        {
          _id: String;
          writer: String;
          contents: String;
          rating: any;
          createdAt: Key;
          updatedAt: String;
        }
      ];
    };
  };
  textLimit: number;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitComment: () => void;
}
