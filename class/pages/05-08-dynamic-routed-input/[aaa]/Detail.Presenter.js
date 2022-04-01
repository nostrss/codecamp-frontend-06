import * as S from './Detail.Styles';

export default function DetailUI(props) {
  return (
    <S.Wrapper>
      <S.Title>
        {' '}
        {props.data?.fetchBoard.number}번 게시글에 오신것을 환영합니다{' '}
      </S.Title>
      <S.TextWrapper>작성자 : {props.data?.fetchBoard.writer}</S.TextWrapper>
      <S.TextWrapper>제목 : {props.data?.fetchBoard.title} </S.TextWrapper>
      <S.TextWrapper>게시글 : {props.data?.fetchBoard.contents} </S.TextWrapper>
    </S.Wrapper>
  );
}
