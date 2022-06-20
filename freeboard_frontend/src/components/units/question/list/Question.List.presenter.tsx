import { Fragment } from 'react';
import QuestionListUIItem from './Question.ListItem.presenter';
import { v4 as uuidv4 } from 'uuid';

export default function QuestionListUI(props: any) {
  return (
    <Fragment>
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <QuestionListUIItem key={String(uuidv4())} el={el} />
      ))}
    </Fragment>
  );
}
