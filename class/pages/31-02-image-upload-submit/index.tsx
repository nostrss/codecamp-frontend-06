import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
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
  const [file1, setFile1] = useState<File>();
  const [imageURl, setImageUrl] = useState('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [callApi] = useMutation(CREAT_BOARD);

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
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async () => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data.uploadFile.url;
    const result2 = await callApi({
      variables: {
        createBoardInput: {
          writer: '진택',
          password: '1234',
          title: '안녕하세요',
          contents: '이미지 업로드입니다',
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type='file' onChange={onChangeFile} />
      <img src={imageURl} alt='' />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
