import { ChangeEvent } from 'react';
import {} from '../../../commons/types/generated/types';

export interface IPostingPathProps {
  isEdit: boolean;
  originData?: any;
}

export interface IPostingUIProps {
  submitContents: () => void;
  updateButton: () => void;
  isEdit?: boolean;
  originData: any;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: any) => void;
  isOpen: boolean;
  warning: boolean;
  isError: String;
  onChangeInputs: (event) => void;
  inputs: {
    name: String;
    password: String;
    title: String;
    contents: String;
    youtube: String;
    zipcode: string;
    isAddress: string;
    address2: string;
  };
  isWarning: {
    nameError: boolean;
    passwordError: boolean;
    titleError: boolean;
    contentsError: boolean;
  };
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
