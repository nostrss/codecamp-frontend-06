import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Modal } from 'antd';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorSubmit() {
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
      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
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
