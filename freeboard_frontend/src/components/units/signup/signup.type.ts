import { ChangeEvent } from 'react';

export interface ISingnUpPresenter {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeUseName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword1: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword2: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
}
