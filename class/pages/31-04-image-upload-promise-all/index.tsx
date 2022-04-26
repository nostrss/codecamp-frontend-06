import { gql, useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../src/commons/types/generated/types';

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
    }
  }
`;

export default function ImageUploadPreview() {
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);
  const [imageURls, setImageUrls] = useState(['', '', '']);
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [callApi] = useMutation(CREAT_BOARD);

  const onChangeFile = (number) => (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    const file = event.target.files?.[0];
    if (!file) {
      alert('파일이 없습니다');
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        const tmpUrls = [...imageURls];
        tmpUrls[number] = data.target?.result;
        setImageUrls(tmpUrls);
        const tmpFiles = [...files];
        tmpFiles[number] = file;
        setFiles(tmpFiles);
      }
    };
  };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    const resultURLs = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ''
    );

    const imageUrl = results.data?.uploadFile.url;
    const result2 = await callApi({
      variables: {
        createBoardInput: {
          writer: '진택',
          password: '1234',
          title: '안녕하세요',
          contents: '이미지 업로드입니다',
          images: resultURLs,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type='file' onChange={onChangeFile(0)} />
      <input type='file' onChange={onChangeFile(1)} />
      <input type='file' onChange={onChangeFile(2)} />
      <img src={imageURls[0]} alt='' />
      <img src={imageURls[1]} alt='' />
      <img src={imageURls[2]} alt='' />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
