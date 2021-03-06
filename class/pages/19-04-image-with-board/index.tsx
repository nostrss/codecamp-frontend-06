import { useMutation, gql } from '@apollo/client';
import { Modal } from 'antd';
import { ChangeEvent, useRef, useState } from 'react';
import { checkFileValidation } from '../../src/commons/libraries/validation';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../src/commons/types/generated/types';
const CREAT_BOARD = gql`
  mutation myMutation($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function RestGetPage() {
  const [data, setData] = useState('');
  const [myWriter, setMyWriter] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myContents, setMyContents] = useState('');
  const [myPassword, setMyPassword] = useState('');

  const [callApi] = useMutation(CREAT_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: imageUrl,
        },
      },
    });

    console.log(result);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  console.log(data);

  return (
    <div>
      ????????? : <input type='text' onChange={onChangeWriter} /> <br />
      ???????????? : <input type='text' onChange={onChangePassword} /> <br />
      ?????? : <input type='text' onChange={onChangeTitle} /> <br />
      ?????? : <input type='text' onChange={onChangeContents} /> <br />
      <div>
        <div>????????? ????????? ????????????</div>
        <div
          style={{ width: '150px', height: '150px', backgroundColor: 'gray' }}
          onClick={onClickImage}
        >
          ???????????????
        </div>
        <input
          style={{ display: 'none' }}
          type='file'
          onChange={onChangeFile}
          ref={fileRef}
        />
        <button onClick={callGraphqlApi}>GRAPHQL-API ????????????!!</button>
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
    </div>
  );
}
