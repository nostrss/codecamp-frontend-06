import axios from 'axios';

export default function CallbackPromiseAsyncPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open('get', 'http://numbersapi.com/random?min=1&max=200');
    aaa.send();
    aaa.addEventListener('load', (res) => {
      const num = res.target.response.split(' ')[0]; // 랜덤숫자

      const bbb = new XMLHttpRequest();
      bbb.open('get', `http://koreanjson.com/posts${num}`);
      bbb.send();
      bbb.addEventListener('load', (res) => {
        const userId = res.target.response.UserId;

        const ccc = new XMLHttpRequest();
        ccc.open('get', `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener('load', (res) => {
          console.log(res);
        });
      });
    });
  };

  // new Promise((resolve, reject) => {

  //   // 외부요청코드, 시간이 걸리는 작업

  //   // 성공
  //   resolve('철수')

  //   // 실패
  //   reject('에러발생!')

  // }).then((res) => {console.log(res)}).catch(err => {})

  const onClickPromise = () => {
    console.log('1번입니다');
    axios
      .get('http://numbersapi.com/random?min=1&max=200')
      .then((res) => {
        console.log('2번입니다');
        const num = res.data.split(' ')[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log('3번입니다');
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log('4번입니다');
        console.log(res);
      });
    console.log('5번입니다');
  };

  // 순서가 명확하다
  const onClickAsync = async () => {
    const aaa = await axios.get('http://numbersapi.com/random?min=1&max=200');
    const bbb = await axios.get('http://numbersapi.com/random?min=1&max=200');
    const ccc = await axios.get('http://numbersapi.com/random?min=1&max=200');
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickAsync}>Async 요청하기</button>
    </div>
  );
}
