import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: white;
  justify-content: center;
  position: fixed;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
  width: 1200px;
  height: 100%;
`;

const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
`;
const WrapperLogo = styled.div`
  width: 200px;
  height: 40px;
  line-height: 40px;
`;

const SignUpButton = styled.button`
  width: 90px;
  height: 40px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 40px;
  border-radius: 5px;
`;

export default function LayoutHeader() {
  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo>NoStrss</WrapperLogo>
        <WrapperHeaderMenu>
          <SignUpButton>로그인</SignUpButton>
          <SignUpButton>회원가입</SignUpButton>
        </WrapperHeaderMenu>
      </WrapperHeader>
    </Wrapper>
  );
}
