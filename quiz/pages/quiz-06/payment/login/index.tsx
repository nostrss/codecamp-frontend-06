// 1. /pages/quiz06/payment/login/index.tsx 페이지를 만들고, 로그인 화면을 구현해 주세요.
// 2. 로그인에 성공하면 /pages/quiz06/payment/loading/index.tsx 페이지로 이동해 주세요.

import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../src/components/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });

    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
    router.push('/quiz-06/payment/loading');
  };

  return (
    <div>
      이메일 <input type='text' onChange={onChangeEmail} />
      <br />
      비밀번호 <input type='password' onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
