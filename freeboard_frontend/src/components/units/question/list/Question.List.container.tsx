import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_QUESTION } from './Question.List.queries';
import QuestionListUI from './Question.List.presenter';

export default function QuestionListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_QUESTION, {
    variables: { useditemId: String(router.query.id) },
  });
  return <QuestionListUI data={data} />;
}
