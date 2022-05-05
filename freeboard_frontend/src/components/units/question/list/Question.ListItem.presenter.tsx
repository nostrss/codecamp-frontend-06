import { useMutation } from '@apollo/client/react';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AnswerContainer from '../answer/Answer.List.container';
import AnswerWriteContainer from '../answer/write/Answer.write.container';
import QuestionWrite from '../write/QuestionWrite.container';
import {
  DELETE_PRODUCT_COMMENT,
  FETCH_QUESTION,
} from './Question.List.queries';
import * as S from './Question.List.style';

export default function QuestionListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswerWrite, setIsAnswerWrite] = useState(false);
  console.log('댓글시작');
  console.log(props.el);

  const [deleteQuestion] = useMutation(DELETE_PRODUCT_COMMENT);

  const onClickDelete = async () => {
    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION,
            variables: { useditemId: router.query.id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickAnswer = () => {
    setIsAnswerWrite(true);
  };

  return (
    <div>
      {!isEdit && (
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
              <button onClick={onClickUpdate}>수정하기</button>
              <button onClick={onClickDelete}>삭제하기</button>
              <button onClick={onClickAnswer}>대댓글쓰기</button>
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{props.el?.createdAt}</S.DateString>
          <AnswerContainer />
        </S.ItemWrapper>
      )}
      {isEdit && (
        <QuestionWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
      {isAnswerWrite && (
        <AnswerWriteContainer
          isAnswerWrite={isAnswerWrite}
          setIsAnswerWrite={setIsAnswerWrite}
          Qid={props.el._id}
        />
      )}

      <AnswerContainer Qid={props.el._id} />
    </div>
  );
}
