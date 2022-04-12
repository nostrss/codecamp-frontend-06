import { ChangeEvent, MouseEvent } from 'react';

export interface ISingninPresenter {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickSignin: (event: MouseEvent<HTMLButtonElement>) => void;
}
