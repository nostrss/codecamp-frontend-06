import { useMutation } from '@apollo/client';
import { SetStateAction, useEffect, useState } from 'react';
import { FETCH_ANSWER } from '../Answer.List.queries';
import AnswerWriteUI from './Answer.write.presenter';
import { CREATE_ANSWER, UPDATE_ANSWER } from './Answer.write.queries';

export default function AnswerWriteContainer(props: any) {
  const [isAnswerContents, setIsAnswerContents] = useState('');
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const [updateAnswer] = useMutation(UPDATE_ANSWER);

  useEffect(() => {
    if (props.isUpdate) setIsAnswerContents(props.answerContents);
  }, []);

  const onChangeAnswer = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setIsAnswerContents(event.target.value);
  };

  const onClickAnswerWrite = async () => {
    try {
      await createAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: isAnswerContents,
          },
          useditemQuestionId: props.Qid,
        },
        refetchQueries: [
          {
            query: FETCH_ANSWER,
            variables: { useditemQuestionId: props.Qid },
          },
        ],
      });
      props.setIsAnswerWrite(false);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  const onClickUpdateAnswerComplete = async () => {
    try {
      await updateAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: isAnswerContents,
          },
          useditemQuestionAnswerId: props.Aid,
        },
        refetchQueries: [
          {
            query: FETCH_ANSWER,
            variables: { useditemQuestionId: props.Qid },
          },
        ],
      });
      props.setIsUpdate(false);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  return (
    <AnswerWriteUI
      isAnswerWrite={props.isAnswerWrite}
      setIsAnswerWrite={props.setIsAnswerWrite}
      onChangeAnswer={onChangeAnswer}
      onClickAnswerWrite={onClickAnswerWrite}
      onClickUpdateAnswerComplete={onClickUpdateAnswerComplete}
      isUpdate={props.isUpdate}
      answerContents={props.answerContents}
      isAnswerContents={isAnswerContents}
    />
  );
}
