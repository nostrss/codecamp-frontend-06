import { IUseditem } from '../../../../commons/types/generated/types';

export interface IFetchBestProductUI {
  data: {
    fetchUseditemsOfTheBest: [IUseditem];
  };
}
