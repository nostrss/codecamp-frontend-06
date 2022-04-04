// 04-05 리팩토링
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

  // 0404 : 위의 3줄을 아래와 같이 리팩토링
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    contents: '',
  });

  const [callApi] = useMutation(CREAT_BOARD);

  const callGraphqlApi = async () => {
    // 0404 : 24번줄에서 변경한 부분을 스프레드 연산자로 삽입
    const result = await callApi({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
    setData(result.data.createBoard.message);
  };

  // 0404 : 아래와 같이 리팩토링
  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      {/* 0404 :  바뀐 함수 바인딩  */}
      작성자 : <input type='text' id='writer' onChange={onChangeInputs} />{' '}
      <br />
      {/* 0404 :  바뀐 함수 바인딩  */}
      제목 : <input type='text' id='title' onChange={onChangeInputs} /> <br />
      {/* 0404 :  바뀐 함수 바인딩  */}
      내용 : <input type='text' id='contents' onChange={onChangeInputs} />{' '}
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!</button>
      <div></div>
      {/* <div>{data}</div> */}
    </div>
  );
}
