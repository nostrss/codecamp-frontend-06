import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../commons/store';
import SignInUI from './signin.presetner';
import { LOGIN_USER } from './signin.query';

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

export default function SignInContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onClickSignin = async (data: any) => {
    const result = await loginUser({
      variables: data,
    });

    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
    console.log(accessToken);
    router.push('/boards');
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
