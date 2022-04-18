import { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface ISingninPresenter {
  // onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickSignin: (event: FormEvent<HTMLFormElement>) => void;
  register: any;
  handleSubmit: Function;
  formState: UseFormReturn;
  isActive: boolean;
}
