import { gql, useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../src/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const client = useApolloClient();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1.로그인하기
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });

    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2.유저정보 받아오기
    // accessToken이 뒤에서 state로 저장되기 때문에 FETCH_USER_LOGGED_IN 시 토큰값이 없다. 그래서 토큰값을 강제로 밀어넣어주기 위해 context 추가
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken); // key, value
    setUserInfo(userInfo);
    // 객체는 local에 저장이 안된다. 그래서 문자열로 바꿔줘야 한다. json형태
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // 4. 로그인 성공페이지로 이동하기

    alert('login success');
    router.push('/24-02-login-use-apollo-client-success');
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
