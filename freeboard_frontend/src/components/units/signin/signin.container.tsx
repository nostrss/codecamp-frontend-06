import { useMutation, useApolloClient, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../commons/store';
import SignInUI from './signin.presetner';
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from './signin.query';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('이메일 형식이 적합하지 않습니다.')
      .required('이메일은 필수 입력 사항입니다.'),
    password: yup
      .string()
      .min(4, '비밀번호는 최소 4자리 이상 입력해주세요.')
      .max(15, '비밀번호는 최대 15자리로 입력해주세요 ')
      .required('비밀번호는 필수 입력 사항입니다'),
  })
  .required();

const LOGIN_EXAM = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignInContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [loginUser] = useMutation(LOGIN_EXAM);
  const router = useRouter();
  const client = useApolloClient();

  const onClickSignin = async (data: any) => {
    const result = await loginUser({
      variables: data,
    });

    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    // const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    // localStorage.setItem('accessToken', accessToken);
    // setUserInfo(userInfo);
    // localStorage.setItem('userInfo', JSON.stringify(userInfo));

    router.push('/usedmarket');
  };

  return (
    <SignInUI
      onClickSignin={onClickSignin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isActive={formState}
    />
  );
}
