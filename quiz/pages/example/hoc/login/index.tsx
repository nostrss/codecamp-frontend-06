import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
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
  const [isBtnActive, setIsBtnActive] = useState(true);

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (email && password) setIsBtnActive(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (email && password) setIsBtnActive(false);
  };

  const onClickLogin = async () => {
    if (!email || !password) {
      alert('미입력항목이 있습니다');
    } else {
      try {
        const result = await loginUser({
          variables: {
            email: email,
            password: password,
          },
        });
        const accessToken = result.data.loginUser.accessToken;
        setAccessToken(accessToken);
        localStorage.setItem('accessToken', accessToken);
        alert('로그인 성공');
        router.push('/example/hoc/main');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      이메일 <input type='text' onChange={onChangeEmail} />
      <br />
      비밀번호 <input type='password' onChange={onChangePassword} />
      <br />
      <button disabled={isBtnActive} onClick={onClickLogin}>
        로그인
      </button>
    </div>
  );
}
