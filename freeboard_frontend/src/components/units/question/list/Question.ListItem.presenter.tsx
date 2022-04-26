import AnswerContainer from '../answer/answer.container';
import * as S from './Question.List.style';
export default function QuestionListUIItem(props) {
  return (
    <div>
      {/* {isOpenDeleteModal && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCloseDeleteModal}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type='password' onChange={onChangeDeletePassword} />
        </Modal>
      )} */}
      {/* {!isEdit && ( */}
      <S.ItemWrapper>
        <S.FlexWrapper>
          <S.Avatar src='/image/user.png' />
          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>{props.el?.user.name}</S.Writer>
            </S.WriterWrapper>
            <S.Contents>{props.el?.contents}</S.Contents>
          </S.MainWrapper>
          <S.OptionWrapper>
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
          </S.OptionWrapper>
        </S.FlexWrapper>
        <S.DateString>{props.el?.createdAt}</S.DateString>
      </S.ItemWrapper>
      <AnswerContainer Qid={props.el._id} />
      {/* )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )} */}
    </div>
  );
}
