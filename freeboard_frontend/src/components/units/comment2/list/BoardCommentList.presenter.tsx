import BoardCommentListUIItem from './BoardCommentList.presenterItem';
import { IBoardCommentListUIProps } from './BoardCommentList.types';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={String(uuidv4())} el={el} />
      ))}
    </InfiniteScroll>
  );
}
