// axios 임포트 하기
// axios는 node_modules에 설치되어 있다

// import axios from 'axios';
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

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
  const [data, setData] = useState('');
  const [callApi] = useMutation(CREAT_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get('https://koreanjson.com/posts/1'); rest-api 방식!
    const result = await callApi({
      variables: { writer: '철수', title: 'title', contents: '내용' },
    });
    console.log(result);
    setData(result.data.createBoard.message);
  };

  return (
    <div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!</button>
      <div></div>
      <div>{data}</div>
    </div>
  );
}
