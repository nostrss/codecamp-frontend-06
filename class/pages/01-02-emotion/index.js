import { MyEmail, MyTitle, Wrapper } from '../../styles/emotion';

export default function AAApage() {
  // 자바스크립트 쓰는곳

  // 변수 첫글자는 대문자(파스칼표기법?)

  return (
    // html 쓰는곳
    <Wrapper>
      <MyTitle>
        로그인
        <MyEmail type='text' />
        <img src='/aaa/lotto.png' />
      </MyTitle>
    </Wrapper>
  );
}
