import { ChangeEvent } from 'react';

export interface IPostingPathProps {
  isEdit: boolean;
  data?: any;
}

export interface IPostingUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  submitContents: () => void;
  updateButton: () => void;
  nameError?: string;
  passwordError?: string;
  titleError?: string;
  contentsError?: string;
  isEdit?: boolean;
  textLimit: number;
}

export interface ICreateBoardApi {
  writer: string;
  password: string;
  title: string;
  contents: string;
}
