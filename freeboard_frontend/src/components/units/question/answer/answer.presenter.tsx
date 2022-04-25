import * as U from './answer.style';
import AnswerItemUI from './answeritem.presenter';
import { v4 as uuidv4 } from 'uuid';
export default function AnswerUI(props) {
  return (
    <div>
      <U.ItemWrapper>
        {props.data?.fetchUseditemQuestionAnswers.map((el) => (
          <AnswerItemUI key={String(uuidv4())} el={el} />
        ))}
      </U.ItemWrapper>
    </div>
  );
}
