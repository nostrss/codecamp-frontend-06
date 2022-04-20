// 1. /pages/quiz06/editor/writer/index.tsx 페이지를 만들고, 폼을 만들어 주세요.(react-hook-form 사용)
// ⇒ 폼의 내용은 writer, password, title, contents 총 4가지 항목입니다.
// 2. contents 부분은 react-quill 에디터를 사용해서 만들어 주세요.
// ⇒ react-quill을 적용할 때 발생하는 SSR 이슈는 dynamic import를 활용해서 완료해서 주세요.
// 3. [ 등록하기 ] 버튼을 누르면 게시물을 등록하고, /pages/quiz06/editor/detail/[id]/index.tsx 페이지로 이동시켜 주세요.

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import { useAuth } from '../../../../src/components/commons/hooks/useAuth';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorSubmit() {
  useAuth();
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: 'onChange',
  });

  const onChangeContents = (value: string) => {
    setValue('contents', value === '<p><br></p>' ? '' : value);
    trigger('contents');
  };

  const onClickSubmit = async (data: SubmitHandler<FieldValues>) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert('모두 입력해 주세요!');
      return;
    }

    // 뮤테이션
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.title,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/quiz-06/editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ contents: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type='text' {...register('writer')} />
      <br />
      비밀번호 : <input type='password' {...register('password')} />
      <br />
      제목 : <input type='text' {...register('title')} />
      <br />
      내용 :<ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
