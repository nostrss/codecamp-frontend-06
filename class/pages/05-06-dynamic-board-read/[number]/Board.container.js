import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_BOARD } from './Board.queries';
import DetailBoardUI from './Board.presenter';

export default function DetailBoardContainer() {
  const router = useRouter();
  console.log(router);
  Number(router.query.number);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  console.log(data);
  return <DetailBoardUI data={data} />;
}
