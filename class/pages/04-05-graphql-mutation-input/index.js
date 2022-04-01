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
  const [myWriter, setMyWriter] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myContents, setMyContents] = useState('');

  const [callApi] = useMutation(CREAT_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get('https://koreanjson.com/posts/1'); rest-api 방식!
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    setData(result.data.createBoard.message);
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
      {/* <div>{data}</div> */}
    </div>
  );
}
