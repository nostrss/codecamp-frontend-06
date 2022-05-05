import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { FETCH_ANSWER, REMOVE_ANSWER } from './Answer.List.queries';
import * as U from './Answer.List.style';
import AnswerWriteContainer from './write/Answer.write.container';

export default function AnswerItemUI(props) {
  const [removeAnswer] = useMutation(REMOVE_ANSWER);
  const [isUpdate, setIsUpdate] = useState(false);

  const onClickRemoveAnswer = async () => {
    try {
      await removeAnswer({
        variables: { useditemQuestionAnswerId: props.el._id },
        refetchQueries: [
          {
            query: FETCH_ANSWER,
            variables: { useditemQuestionId: props.Qid },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdateAnswer = () => {
    setIsUpdate(true);
  };

  return (
    <>
      {!isUpdate && (
        <U.ItemWrapper>
          <U.FlexWrapper>
            <U.Avatar src='/image/user.png' />
            <U.MainWrapper>
              <U.WriterWrapper>
                <U.Writer>{props.el?.user.name}</U.Writer>
              </U.WriterWrapper>
              <U.Contents>{props.el?.contents}</U.Contents>
            </U.MainWrapper>
            <U.OptionWrapper>
              <button onClick={onClickUpdateAnswer}>수정하기</button>
              <button onClick={onClickRemoveAnswer}>삭제하기</button>
            </U.OptionWrapper>
          </U.FlexWrapper>
          <U.DateString>{props.el?.createdAt}</U.DateString>
        </U.ItemWrapper>
      )}
      {isUpdate && (
        <AnswerWriteContainer
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          Aid={props.el._id}
          Qid={props.Qid}
        />
      )}
    </>
  );
}
