// 위에서 만든 폼에 yup을 이용하여 error 메시지에 조건을 추가해 주세요.
// 1-1) 작성자는 5글자 이내 문자열입니다.
// 1-2) 비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다.
// 1-3) 제목은 100자 이내 문자열, 내용은 1000자 이내 문자열입니다.

import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const InputBar = styled.input`
  width: 400px;
  font-size: 20px;
`;
const InputArea = styled.textarea`
  width: 600px;
  height: auto;
  font-size: 20px;
`;

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
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자:
        <InputBar
          placeholder='최대 5글자'
          type='text'
          {...register('writer')}
        />
        <Error>{formState.errors.writer?.message}</Error>
      </div>
      <div>
        비밀번호:
        <InputBar
          maxLength={8}
          placeholder='최대 8자리 영문, 숫자, 특수문자 포함입니다'
          type='password'
          {...register('password')}
        />
        <Error>{formState.errors.password?.message}</Error>
      </div>
      <div>
        제목:
        <InputBar
          placeholder='제목은 최대 100글자입니다.'
          type='text'
          {...register('title', {
            required: '제목이 누락되었습니다.',
          })}
        />
        <Error>{formState.errors.title?.message}</Error>
      </div>
      <div>
        내용
        <div>
          <InputArea
            placeholder='내용은 최대 1000글자입니다'
            {...register('contents', {
              required: '내용이 누락되었습니다.',
            })}
          />
          <Error>{formState.errors.contents?.message}</Error>
        </div>
      </div>
      <button>등록하기</button>
    </form>
  );
}
