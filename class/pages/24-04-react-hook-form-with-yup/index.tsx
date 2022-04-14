import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from '@emotion/styled';

interface IProps {
  isActive: boolean;
}
const Error = styled.div`
  color: red;
  font-size: 9px;
`;
const LoginButton = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? 'yellow' : '')};
`;

interface IFormvalues {
  email?: string;
  password?: string;
}

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

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  // register에 이름등의 정보가 다 저장되어 있어서 스프레드로 뿌려주면 된다.
  // handleSubmit input값들을 onclickSubmit에 전달해준다
  // formState에 에러가 담겨있다.

  const onClickSubmit = (data: IFormvalues) => {
    console.log(data);
  };

  console.log('rerender check');

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type='text' {...register('email')} />
      <Error>{formState.errors.email?.message}</Error>
      비밀번호: <input type='text' {...register('password')} />
      <Error>{formState.errors.password?.message}</Error>
      <LoginButton isActive={formState.isValid}>로그인하기</LoginButton>
    </form>
  );
}
