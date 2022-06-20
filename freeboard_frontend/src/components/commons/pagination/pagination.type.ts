import { MouseEvent } from 'react';

export interface IPostListToPagination {
  refetch: any;
  lastPage: number;
}

export interface IPagenationToPaginationUI {
  startPage: number;
  currentPage: number;
  onClickPage: (event: { target: { innerText: any } }) => void;
  onClickPrevPage: (event: MouseEvent<HTMLElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLElement>) => void;
  refetch: any;
  lastPage: number;
}

export interface IPresenterToStyle {
  current: boolean;
}
