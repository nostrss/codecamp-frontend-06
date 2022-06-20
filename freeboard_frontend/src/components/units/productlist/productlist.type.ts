import { ChangeEvent } from 'react';
import { IUseditem } from '../../../commons/types/generated/types';

export interface IFetchProductListUI {
  data: {
    fetchUseditems: Array<IUseditem>;
  };
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onLoadMore: () => void;
  onClickMoveNew: () => void;
  onClickSold: () => void;
  isSoldout: boolean;
  onClickSell: () => void;
}
