// axios 임포트 하기
// axios는 node_modules에 설치되어 있다

import axios from 'axios';
import { useState } from 'react';

export default function RestGetPage() {
  const [data, setData] = useState('');

  const callRestApi = async () => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    console.log(result);
    console.log(result.data.title);
    setData(result.data.title);
  };

  return (
    <div>
      <button onClick={callRestApi}>REST-API 요청하기!!</button>
      <div></div>
      <div>{data}</div>
    </div>
  );
}
