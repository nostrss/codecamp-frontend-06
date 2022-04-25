import { useMutation, useApolloClient } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import SignUpUI from './signup.presetner';
import { SIGNUP_USER, FETCH_USER_LOGGED_IN } from './signup.query';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../commons/store';

export default function SignUpContainer() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [signupUser] = useMutation(SIGNUP_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeUseName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangePassword1 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword1(event.target.value);
  };

  const onChangePassword2 = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };

  const onClickSignUp = async () => {
    try {
      const result = await signupUser({
        variables: {
          createUserInput: {
            email: email,
            password: password1,
            name: username,
          },
        },
      });
      alert('회원가입이 완료 되었습니다. 로그인 화면으로 이동합니다.');
      router.push('/signin');
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <SignUpUI
      onChangeEmail={onChangeEmail}
      onChangeUseName={onChangeUseName}
      onChangePassword1={onChangePassword1}
      onChangePassword2={onChangePassword2}
      onClickSignUp={onClickSignUp}
    />
  );
}
