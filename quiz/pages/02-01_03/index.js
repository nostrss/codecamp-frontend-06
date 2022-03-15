import { useState } from 'react';
import styled from '@emotion/styled';

export default function DocumentNice() {

  const Wrapper = styled.div`
    padding: 20px 50px;
  `;



  function docNice() {
    document.getElementById('hi').innerText = '반갑습니다';
  }

  const [hello, setNice] = useState('안녕하세요');
  function stateNice(){
    setNice('반갑습니다')
  }

  function docCounter() {
    const result = Number(document.getElementById('count').innerText) + 1;
    document.getElementById('count').innerText = result;
  }

  const [count, setCount] = useState(0);
  function stateCounter() {
    setCount(count + 1);
  }

  function docRandom(){
    const randomNumber = String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById('random').innerText = randomNumber
  }

  const [random, setRandom] = useState("000000");
  function stateRandom() {
    setRandom(String(Math.floor(Math.random()*1000000)).padStart(6,0));
  }


  return (
    // react에서 내보낼때 꼭 태그를 묶어주고 내보내야한다.
    <Wrapper>
      <h3>1. "안녕하세요"라는 버튼을 만들고, 버튼 클릭시 "반갑습니다" 로 변경해 보세요</h3>
      <p>
        1-1 let과 document.getElementById()를 사용해 주세요.
      </p>
      <button id="hi" onClick={docNice}>안녕하세요</button>
      <p>
        1-2 state를 사용해 주세요.
      </p>
      <button onClick={stateNice}>{hello}</button>
      <h3>2. 0이라는 숫자와 "카운트올리기"라는 버튼을 만들고, 버튼 클릭시 숫자를 1씩 증가해 주세요.</h3>
      <p>
      2-1 let과 document.getElementById()를 사용해 주세요.
      </p>
      <div id="count">0</div>
      <button onClick={docCounter}> 카운트 증가</button>
      <p>
      2-2 state를 사용해 주세요.
      </p>
      <div>{count}</div>
      <button onClick={stateCounter}> 카운트 증가</button>
      <h3>3.인증번호 6자리 "000000"과 "인증번호전송"이라는 버튼을 만들고, 버튼 클릭시 인증번호를 만들어서
인증번호 6자리가 변경되도록 적용해 주세요.</h3>
      <p>
      3-1 let과 document.getElementById()를 사용해 주세요.
      </p>
      <div id="random">000000</div>
      <button onClick={docRandom}>인증번호전송</button>
      <p>
      3-2 state를 사용해 주세요
      </p>
      <div >{random}</div>
      <button onClick={stateRandom}>인증번호전송</button>

    </Wrapper>
    );
  }

