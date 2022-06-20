import { useState, MouseEvent } from 'react';
import PaginationUI from './pagination.presenter';
import { IPostListToPagination } from './pagination.type';

export default function Pagination(props: IPostListToPagination) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickPage = (event: { target: { innerText: any } }) => {
    if (event.target instanceof Element) {
      props.refetch({ page: Number(event.target.innerText) });
      setCurrentPage(Number(event.target.innerText));
    }
  };

  const onClickPrevPage = (event: MouseEvent<HTMLElement>) => {
    if (startPage === 1) return;

    setStartPage((prev) => prev - 10);
    props.refetch({ page: Number(startPage - 10) });
    setCurrentPage(Number(startPage - 10));
  };

  const onClickNextPage = (event: MouseEvent<HTMLElement>) => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: Number(startPage + 10) });
    setCurrentPage(Number(startPage + 10));
  };
  return (
    <>
      <PaginationUI
        startPage={startPage}
        currentPage={currentPage}
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        refetch={props.refetch}
        lastPage={props.lastPage}
      />
    </>
  );
}
