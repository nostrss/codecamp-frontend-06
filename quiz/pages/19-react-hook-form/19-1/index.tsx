// 1.  작성자, 비밀번호, 제목, 내용 입력창을 만들고, 게시물 등록하기 버튼을 만들어 주세요.
// 2. react-hook-form을 적용해서 등록해 보세요.
// 3. error 메시지도 각각의 입력창 아래에 추가해 보세요.

import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const InputBar = styled.input`
  width: 300px;
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

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onClickSubmit = (data: IFormvalues) => {
    alert('정상적으로 입력하셨습니다');
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <div>
        작성자:
        <InputBar
          placeholder='최소2글자 이상 입력해주세요'
          type='text'
          {...register('writer', {
            required: '작성자는 필수항목입니다.',
            minLength: {
              value: 2,
              message: '최소2글자 이상 입력해야합니다.',
            },
          })}
        />
        {errors.writer && <Error>{errors.writer.message}</Error>}
      </div>
      <div>
        비밀번호:
        <InputBar
          placeholder='최소8글자 이상 입력해주세요'
          type='password'
          {...register('password', {
            required: '비밀번호는 필수항목입니다.',
            minLength: {
              value: 8,
              message: '최소8글자 이상 입력해야합니다.',
            },
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
      </div>
      <div>
        제목:
        <InputBar
          placeholder='제목을 입력해주세요'
          type='text'
          {...register('title', {
            required: '제목이 누락되었습니다.',
          })}
        />
        {errors.title && <Error>{errors.title.message}</Error>}
      </div>
      <div>
        내용:{' '}
        <InputBar
          placeholder='내용을 입력해주세요'
          type='text'
          {...register('contents', {
            required: '내용이 누락되었습니다.',
          })}
        />
        {errors.contents && <Error>{errors.contents.message}</Error>}
      </div>
      <button>등록하기</button>
    </form>
  );
}
