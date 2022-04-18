import styled from '@emotion/styled';
import { useRouter } from 'next/router';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 80px;
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
  const router = useRouter();
  const onClickBoard = () => {
    router.push('/boards');
  };

  const onClickArtic = () => {
    router.push('/artic');
  };

  const onClickUsedMarket = () => {
    router.push('/usedmarket');
  };

  return (
    <Wrapper>
      <NavButton onClick={onClickBoard}>자유게시판</NavButton>
      <NavButton onClick={onClickUsedMarket}>중고마켓</NavButton>
      <NavButton>마이페이지</NavButton>
      <NavButton onClick={onClickArtic}>Artic</NavButton>
    </Wrapper>
  );
}
