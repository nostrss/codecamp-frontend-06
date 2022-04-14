// 버튼과 인풋 컴포넌트들을 공통 컴포넌트로 분리하고, import 해서 사용해 보세요.

import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button01 from '../../../src/components/commons/button/01';
import Input01 from '../../../src/components/commons/inputs/01';
import Textarea01 from '../../../src/components/commons/textarea/01';

const Error = styled.p`
  color: red;
  font-size: 12px;
`;

interface IFormvalues {
  writer?: string;
  title?: string;
  contents?: string;
  password?: string;
}

const schema = yup
  .object({
    writer: yup
      .string()
      .max(5, '작성자는 최대 5글자입니다.')
      .required('작성자는 필수 입력 사항입니다.'),
    password: yup
      .string()
      .max(8, '최대 8자리 영문, 숫자, 특수문자를 포함입니다 ')
      .matches(
        /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        '비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다.'
      )
      .required('비밀번호는 필수 입력 사항입니다'),
    title: yup
      .string()
      .max(100, '제목은 최대 100글자입니다.')
      .required('제목은 필수 입력 사항입니다.'),
    contents: yup
      .string()
      .max(1000, '내용은 최대 1000글자입니다.')
      .required('내용은 필수 입력 사항입니다.'),
  })
  .required();

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickSubmit = (data: IFormvalues) => {
    alert('정상적으로 입력하셨습니다');
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자:
        <Input01
          placeholder='최대 5글자'
          type='text'
          register={register('writer')}
        />
        <Error>{formState.errors.writer?.message}</Error>
      </div>
      <div>
        비밀번호:
        <Input01
          placeholder='비밀번호는 8자리 영문, 숫자, 특수문자 포함입니다'
          type='password'
          register={register('password')}
        />
        <Error>{formState.errors.password?.message}</Error>
      </div>
      <div>
        제목:
        <Input01
          placeholder='제목은 최대 100글자입니다.'
          type='text'
          register={register('title')}
        />
        <Error>{formState.errors.title?.message}</Error>
      </div>
      <div>
        내용
        <div>
          <Textarea01
            placeholder='내용은 최대 1000글자입니다'
            register={register('contents')}
          />
          <Error>{formState.errors.contents?.message}</Error>
        </div>
      </div>
      <Button01 isActive={formState.isValid} title='로그인' />
    </form>
  );
}
