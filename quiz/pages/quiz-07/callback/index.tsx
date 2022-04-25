// 1. /pages/quiz07/callback/index.tsx 페이지를 만들고, 아래 그림과 같이 화면을 완성해 주세요.
// - 각각의 버튼을 눌렀을 때, 버튼에 해당하는 방법으로 데이터를 불러와서 화면에 보여주세요.
//    1) callback - XMLHttpRequest 사용
//    2) promise - axios.then() 사용
//    3) async/await - await axios 사용

// ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/492fb9b9-38c9-41f4-981c-1c3b00991ab9/Untitled.png)

// 1. 3개 버튼 각각 모두에 대해서, 다음 주소([http://numbersapi.com/random?min=1&max=200](http://numbersapi.com/random?min=1&max=200))를 사용하여 임의의 숫자를 하나 불러와 주세요.
// 2. 불러온 숫자를 가지고 다음 주소([https://koreanjson.com/posts/숫자](https://koreanjson.com/posts/$%7Bnum%7D))에 해당하는 게시물을 불러와 주세요.
// 3. 불러온 게시물을 작성한 작성자(UserId)가 쓴 다른 게시물 목록을 다음 주소([https://koreanjson.com/posts?userId=작성자ID](https://koreanjson.com/posts?userId=$%7Buser%7D))를 활용하여 불러와 주세요.
// 4. 위 4번의 게시글 목록을 위 버튼 을 클릭했을 때, 결과로 나타내 보세요.
// (state에 저장하고 map으로 출력해 보세요.)

import axios from 'axios';
import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CallbackPromiseAsyncPage() {
  const [isCallBack, setIsCallBack] = useState([]);
  const [isPromise, setIsPromise] = useState([]);
  const [isAsync, setIsAsync] = useState([]);

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open('get', 'http://numbersapi.com/random?min=1&max=200');
    aaa.send();
    aaa.addEventListener('load', (res) => {
      const num = res.target.response.split(' ')[0]; // 랜덤숫자

      const bbb = new XMLHttpRequest();
      bbb.open('get', `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener('load', (res) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open('get', `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener('load', (res) => {
          setIsCallBack(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get('http://numbersapi.com/random?min=1&max=200')
      .then((res) => {
        const num = res.data.split(' ')[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
        setIsPromise(res.data);
      });
  };

  // 순서가 명확하다
  const onClickAsync = async () => {
    const numData = await axios.get(
      'http://numbersapi.com/random?min=1&max=200'
    );
    const postsData = await axios.get(
      `http://koreanjson.com/posts/${numData.data.split(' ')[0]}`
    );

    const userPost = await axios.get(
      `http://koreanjson.com/posts?userId=${postsData.data.UserId}`
    );
    setIsAsync(userPost.data);
  };

  // {props.data?.fetchUseditems.map((el) => (
  //   <Fragment key={String(uuidv4())}>
  //     <ProductListItemUI el={el} />
  //   </Fragment>
  // ))}

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      {isCallBack?.map((el) => (
        <Fragment key={String(uuidv4())}>
          <div>title : {el.title}</div>
        </Fragment>
      ))}

      <button onClick={onClickPromise}>Promise 요청하기</button>
      {isPromise?.map((el) => (
        <Fragment key={String(uuidv4())}>
          <div>title : {el.title}</div>
        </Fragment>
      ))}
      <button onClick={onClickAsync}>Async 요청하기</button>
      {isAsync?.map((el) => (
        <Fragment key={String(uuidv4())}>
          <div>title : {el.title}</div>
        </Fragment>
      ))}
    </div>
  );
}
