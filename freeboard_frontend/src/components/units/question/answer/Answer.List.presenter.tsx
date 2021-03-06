import * as U from './Answer.List.style';
import AnswerItemUI from './Answer.Listitem.presenter';
import { v4 as uuidv4 } from 'uuid';
export default function AnswerUI(props: any) {
  return (
    <U.ItemWrapper>
      {props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
        <AnswerItemUI key={String(uuidv4())} el={el} Qid={props.Qid} />
      ))}
    </U.ItemWrapper>
  );
}
