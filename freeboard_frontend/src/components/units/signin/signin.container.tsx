import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../commons/store';
import SignInUI from './signin.presetner';
import { LOGIN_USER } from './signin.query';

export default function SignInContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });

    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    router.push('/boards');
  };

  return (
    <SignInUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignin={onClickSignin}
    />
  );
}
