import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  isEdit?: boolean;
  el?: IBoardComment;
  contents: string;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
