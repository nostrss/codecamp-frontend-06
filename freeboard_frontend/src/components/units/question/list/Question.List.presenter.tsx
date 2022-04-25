import { Fragment } from 'react';
import QuestionListUIItem from './Question.ListItem.presenter';
import { v4 as uuidv4 } from 'uuid';

export default function QuestionListUI(props) {
  return (
    <Fragment>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <QuestionListUIItem key={String(uuidv4())} el={el} />
      ))}
    </Fragment>
  );
}
