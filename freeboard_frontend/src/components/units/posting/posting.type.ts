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
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: any) => void;
  isOpen: boolean;
  warning: boolean;
  isError: String;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeZipcode: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeAddress1: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress2: (event: ChangeEvent<HTMLInputElement>) => void;
  zipcode: string;
  isAddress: any;
  address2: string;
}

export interface ICreateBoardApi {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  boardAddress: {
    zipcode: String;
    address: String;
    addressDetail: String;
  };
}
