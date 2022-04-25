import * as U from './bestproduct.style';
import { IFetchBestProductUI } from './bestproduct.types';
import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BestProductItemContainer from './bestproductitem/bestproductitem.container';

export default function BestProductUI(props: IFetchBestProductUI) {
  return (
    <>
      <U.DivFlexRow>
        {props.data?.fetchUseditemsOfTheBest.map((el) => (
          <Fragment key={String(uuidv4())}>
            <BestProductItemContainer el={el} />
          </Fragment>
        ))}
      </U.DivFlexRow>
    </>
  );
}
