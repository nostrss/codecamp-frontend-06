import * as S from './QuestionWrite.style';
import { FaCommentAlt } from 'react-icons/fa';

export default function QuestionWriteUI(props) {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <>
          <FaCommentAlt color='#FFD600'></FaCommentAlt> 문의하기
        </>
      )}
      <S.InputWrapper></S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          // maxLength={100}
          // defaultValue={props.el?.contents}
          onChange={props.onChangeContents}
          placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {/* {props.contents.length} */}
            /100
          </S.ContentsLength>
          <S.Button
            onClick={
              props.isEdit ? props.onClickQuestionUpdate : props.onClickQuestion
            }
          >
            {props.isEdit ? '수정하기' : '문의하기'}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
