import { useQuery } from '@apollo/client';
import AnswerUI from './Answer.List.presenter';
import { FETCH_ANSWER } from './Answer.List.queries';

export default function AnswerContainer(props: any) {
  const { data } = useQuery(FETCH_ANSWER, {
    variables: { useditemQuestionId: String(props.Qid) },
  });

  return (
    <div>
      <AnswerUI data={data} Qid={props.Qid} />
    </div>
  );
}
