import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { FETCH_QUESTION } from '../list/Question.List.queries';
import QuestionWriteUI from './QuestionWrite.presenter';
import {
  CREATE_PRODUCT_COMMENT,
  UPDATE_PRODUCT_COMMENT,
} from './QuestionWrite.queries';

export default function QuestionWrite(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState('');
  const [createProductComment] = useMutation(CREATE_PRODUCT_COMMENT);
  const [updateProductComment] = useMutation(UPDATE_PRODUCT_COMMENT);

  useEffect(() => {
    if (props.isEdit) setContents(props.el?.contents);
  }, []);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickQuestion = async () => {
    try {
      const result = await createProductComment({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      console.log(result);
      setContents('');
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  const onClickQuestionUpdate = async () => {
    try {
      const result = await updateProductComment({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTION,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      console.log(result);
      setContents('');
      props.setIsEdit(false);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  return (
    <QuestionWriteUI
      onClickQuestion={onClickQuestion}
      onChangeContents={onChangeContents}
      onClickQuestionUpdate={onClickQuestionUpdate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
