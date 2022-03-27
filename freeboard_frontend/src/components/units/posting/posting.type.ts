import { ChangeEvent } from 'react';
import {} from '../../../commons/types/generated/types';

export interface IPostingPathProps {
  isEdit: boolean;
  originData?: any;
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
  originData: any;
}

export interface ICreateBoardApi {
  writer: string;
  password: string;
  title: string;
  contents: string;
}
