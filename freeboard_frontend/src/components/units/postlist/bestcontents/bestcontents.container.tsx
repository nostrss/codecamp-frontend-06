import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import BestContentsUI from './bestcontents.presenter';
import { FETCH_BOARD_BEST } from './bestcontents.queries';
import { v4 as uuidv4 } from 'uuid';

export default function BestContents() {
  const { data } = useQuery(FETCH_BOARD_BEST);
  const router = useRouter();

  const onClickBest = (data: any) => {
    router.push(`/boards/post/${data}`);
  };

  return (
    <>
      {data?.fetchBoardsOfTheBest.map((el: any, index: number) => (
        <Fragment key={uuidv4()}>
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
