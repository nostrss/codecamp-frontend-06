import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
import BestContentsUI from './bestcontents.presenter';
import { FETCH_BOARD_BEST } from './bestcontents.queries';

export default function BestContents() {
  const { data } = useQuery(FETCH_BOARD_BEST);
  return (
    <>
      {data?.fetchBoardsOfTheBest.map((el, index) => (
        <Fragment key={el._id}>
          <BestContentsUI data={data} el={el}></BestContentsUI>
        </Fragment>
      ))}
    </>
  );
}
