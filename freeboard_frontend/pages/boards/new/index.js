import styled from '@emotion/styled';

export default function Home() {
  // 자바스크립트 쓰는곳
  const WrapperCanvas = styled`
  margin: 0px;
  box-sizing: border-box;
}
`;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const MyTitle = styled.div`
    color: red;
  `;

  const MyEmail = styled.input`
    width: 200px;
  `;

  // 변수 첫글자는 대문자(파스칼표기법?)

  return (
    // html 쓰는곳
    <Wrapper>
      <MyTitle>
        로그인
        <MyEmail type="text" />
      </MyTitle>
    </Wrapper>
  );
}
