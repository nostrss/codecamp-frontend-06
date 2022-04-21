import { FormEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface ISingninPresenter {
  onClickSignin: (event: FormEvent<HTMLFormElement>) => void;
  register: any;
  handleSubmit: Function;
  formState: UseFormReturn;
  isActive: boolean;
}
