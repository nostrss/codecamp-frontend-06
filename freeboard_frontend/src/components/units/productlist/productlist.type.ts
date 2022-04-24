import { IUseditem } from '../../../commons/types/generated/types';

export interface IFetchProductListUI {
  data: {
    fetchUseditems: Array<IUseditem>;
  };
}
