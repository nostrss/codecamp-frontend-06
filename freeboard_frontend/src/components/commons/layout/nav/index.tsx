import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: yellow;
`;

const NavButton = styled.button`
  width: 90px;
  height: 32px;
  margin: 0px 20px;
  font-size: 16px;
  line-height: 32px;
  border-radius: 5px;
`;

export default function LayoutNav() {
  return (
    <Wrapper>
      <NavButton>자유게시판</NavButton>
      <NavButton>중고마켓</NavButton>
      <NavButton>마이페이지</NavButton>
    </Wrapper>
  );
}
