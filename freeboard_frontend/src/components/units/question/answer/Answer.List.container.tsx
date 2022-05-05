import { useQuery } from '@apollo/client';
import AnswerUI from './Answer.List.presenter';
import { FETCH_ANSWER } from './Answer.List.queries';

export default function AnswerContainer(props) {
  const { data } = useQuery(FETCH_ANSWER, {
    variables: { useditemQuestionId: String(props.Qid) },
  });

  console.log('대댓글불러오기');
  console.log(data);

  return (
    <div>
      <AnswerUI data={data} Qid={props.Qid} />
    </div>
  );
}
