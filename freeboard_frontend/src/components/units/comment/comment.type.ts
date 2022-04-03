import { ChangeEvent, Key, MouseEvent } from 'react';

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
          _id: Key;
          writer: String;
          contents: String;
          rating: any;
          createdAt: String;
          updatedAt: String;
        }
      ];
    };
  };
  textLimit: number;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (event: number) => void;
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitComment: () => void;
  onClickDeleteComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEditComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmitEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onLoadMore: () => void;
  writer: string;
  password: string;
  comment: string;
  rating: number;
  isEdit: boolean;
  commentId: string;
}
