// 5. /pages/quiz06/main/index.tsx 페이지를 만들고 로그인 화면을 만들어 주세요.
// 6. 로그인 완료시, 로컬스토리지에 게시물 장바구니 데이터가 있으면 "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?" 라는 메시지를 띄워주세요.

import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../src/components/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function MainPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();
  const [isCart, setIsCart] = useState([]);

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

    if (localStorage.getItem('basket')) {
      if (
        window.confirm(
          '비회원으로 담긴 게시물 장바구니가 있습니다 이동하시겠습니까?'
        )
      ) {
        router.push('/quiz-06/basket');
      }
    }
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
