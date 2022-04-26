// 1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요.
// 2. 이미지를 올릴 file 태그를 만들어 주세요.
// 3. file 태그를 활용해 이미지가 변경되면 이미지가 화면에 나타나도록 만들어 보세요.
// ⇒ 단, 이미지는 빠르게 나타나야 합니다.(미리보기)
// ⇒ 힌트) FileReader() 객체를 사용해 주세요.
// 4. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요.
// ⇒ 단, file이 존재하는 경우 file을 먼저 스토리지에 전송(uploadFile 활용)하고, 전송된 결과로 받은 url과 나머지 데이터들(작성자, 비밀번호, 제목, 내용)을 함께 등록합니다.

import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../src/commons/types/generated/types';
import { useForm } from 'react-hook-form';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREAT_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function ImageUploadPreview() {
  const [file1, setFile1] = useState<File>();
  const [imageURl, setImageUrl] = useState('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [callApi] = useMutation(CREAT_BOARD);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onChangeFile = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert('파일이 없습니다');
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async (data) => {
    console.log(data);
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1?.data?.uploadFile.url;
    const result2 = await callApi({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: [imageUrl],
        },
      },
    });
    alert('게시글이 등록되었습니다.콘솔을 확인해주세요');
    console.log(result2.data.createBoard);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>
          작성자 :
          <input type='text' {...register('writer')} />
        </div>
        <div>
          비밀번호 : <input type='password' {...register('password')} />
        </div>
        <div>
          제목 : <input type='text' {...register('title')} />
        </div>
        <div>
          내용 : <input type='text' {...register('contents')} />
        </div>

        <input type='file' onChange={onChangeFile} />
        <img style={{ width: '400px' }} src={imageURl} alt='' />
        <button>게시글 등록하기</button>
      </form>
    </div>
  );
}
