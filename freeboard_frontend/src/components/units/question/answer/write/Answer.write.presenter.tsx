import * as S from './Answer.write.style';

export default function AnswerWriteUI(props) {
  return (
    <>
      <S.Wrapper>
        {props.isAnswerWrite && (
          <>
            <S.ContentsWrapper>
              <S.Contents
                // maxLength={100}
                // defaultValue={props.el?.contents}
                onChange={props.onChangeAnswer}
                placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
              />
              <S.BottomWrapper>
                <S.ContentsLength>
                  {/* {props.contents.length} */}
                  /100
                </S.ContentsLength>
                <S.Button onClick={props.onClickAnswerWrite}>
                  답글등록하기
                </S.Button>
              </S.BottomWrapper>
            </S.ContentsWrapper>
          </>
        )}
        {props.isUpdate && (
          <>
            <S.ContentsWrapper>
              <S.Contents
                maxLength={100}
                defaultValue={props.answerContents}
                onChange={props.onChangeAnswer}
                placeholder='(최대100글자)개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
              />
              <S.BottomWrapper>
                <S.ContentsLength>
                  {props.isAnswerContents.length}
                  /100
                </S.ContentsLength>
                <S.Button onClick={props.onClickUpdateAnswerComplete}>
                  답글수정하기
                </S.Button>
              </S.BottomWrapper>
            </S.ContentsWrapper>
          </>
        )}
      </S.Wrapper>
    </>
  );
}
