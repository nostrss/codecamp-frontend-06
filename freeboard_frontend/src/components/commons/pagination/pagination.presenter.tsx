import * as P from './pagination.style';
import { IPagenationToPaginationUI } from './pagination.type';
import { v4 as uuidv4 } from 'uuid';

export default function PaginationUI(props: IPagenationToPaginationUI) {
  return (
    <P.Wrapper>
      <button disabled={props.startPage === 1} onClick={props.onClickPrevPage}>
        이전페이지
      </button>
      {new Array(10).fill(1).map((el, index) =>
        index + props.startPage <= props.lastPage ? (
          <P.ActivePage
            current={props.currentPage === index + props.startPage}
            key={String(uuidv4())}
            onClick={props.onClickPage}
            // className={String(index + props.startPage)}
            // id={String(index + props.startPage)}
          >
            {index + props.startPage}
          </P.ActivePage>
        ) : (
          <span key={String(uuidv4())}></span>
        )
      )}
      <button
        disabled={props.lastPage - props.startPage < 10}
        onClick={props.onClickNextPage}
      >
        다음페이지
      </button>
    </P.Wrapper>
  );
}
