import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import {
  IMutation,
  IMutationCreateBoardArgs,
} from '../../src/commons/types/generated/types';

const CREAT_BOARD = gql`
  mutation myMutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function RestGetPage() {
  const [data, setData] = useState<string>('');
  const [myWriter, setMyWriter] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myContents, setMyContents] = useState('');

  // pick 유틸리티 타입이라 부른다

  const [callApi] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(CREAT_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    if (result.data?.createBoard?.message)
      setData(result.data?.createBoard?.message);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      작성자 : <input type='text' onChange={onChangeWriter} /> <br />
      제목 : <input type='text' onChange={onChangeTitle} /> <br />
      내용 : <input type='text' onChange={onChangeContents} /> <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!</button>
      <div></div>
    </div>
  );
}
