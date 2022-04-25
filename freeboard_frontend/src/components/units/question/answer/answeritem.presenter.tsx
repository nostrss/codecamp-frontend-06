import * as U from './answer.style';
export default function AnswerItemUI(props) {
  return (
    <U.ItemWrapper>
      <U.FlexWrapper>
        <U.Avatar src='/image/user.png' />
        <U.MainWrapper>
          <U.WriterWrapper>
            <U.Writer>대댓글{props.el?.user.name}</U.Writer>
          </U.WriterWrapper>
          <U.Contents>{props.el?.contents}</U.Contents>
        </U.MainWrapper>
        <U.OptionWrapper>
          <button
          // onClick={onClickUpdate}
          >
            수정하기
          </button>
          <button
          // onClick={onClickOpenDeleteModal}
          >
            삭제하기
          </button>
        </U.OptionWrapper>
      </U.FlexWrapper>
      <U.DateString>{props.el?.createdAt}</U.DateString>
    </U.ItemWrapper>
  );
}
