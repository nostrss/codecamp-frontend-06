import { FormEvent } from 'react';
import { FieldValues, FormState } from 'react-hook-form';

export interface ISingninPresenter {
  onClickSignin: (event: FormEvent<HTMLFormElement>) => void;
  register: any;
  handleSubmit: Function;
  formState: FormState<FieldValues>;
  isActive: any;
}
