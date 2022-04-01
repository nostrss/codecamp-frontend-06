import * as S from './BoardList.styles';

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.RoutingButton onClick={props.onClickMove1}>
        83010번 게시글 이동하기 !!!
      </S.RoutingButton>
      <S.RoutingButton onClick={props.onClickMove2}>
        83012번 게시글 이동하기 !!!
      </S.RoutingButton>
      <S.RoutingButton onClick={props.onClickMove3}>
        83013번 게시글 이동하기 !!!
      </S.RoutingButton>
    </S.Wrapper>
  );
}
