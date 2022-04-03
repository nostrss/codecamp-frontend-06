import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Fragment, MouseEvent } from 'react';
import BestContentsUI from './bestcontents.presenter';
import { FETCH_BOARD_BEST } from './bestcontents.queries';

export default function BestContents() {
  const { data } = useQuery(FETCH_BOARD_BEST);
  const router = useRouter();
  const onClickBest = (event: MouseEvent<HTMLElement>) => {
    router.push(`/boards/post/${event.target.id}`);
  };
  return (
    <>
      {data?.fetchBoardsOfTheBest.map((el: any, index: number) => (
        <Fragment key={el._id}>
          <BestContentsUI
            onClickBest={onClickBest}
            data={data}
            el={el}
          ></BestContentsUI>
        </Fragment>
      ))}
    </>
  );
}
