import { useQuery } from '@apollo/client';
import AnswerUI from './answer.presenter';
import { FETCH_ANSWER } from './answer.queries';

export default function AnswerContainer(props) {
  console.log(props.Qid);
  const { data } = useQuery(FETCH_ANSWER, {
    variables: { useditemQuestionId: String(props.Qid) },
  });
  console.log(data);

  return (
    <div>
      <AnswerUI data={data} />
    </div>
  );
}
