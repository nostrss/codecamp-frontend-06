import { useQuery } from '@apollo/client';
import PostCommentUI from './comment.presenter';
import { FETCH_COMMENTS } from './comment.queries';
import { IPostToCommnetData } from './comment.type';

export default function PostComment(props: IPostToCommnetData) {
  const textLimit: number = 100;
  const fetchCommentData = useQuery(FETCH_COMMENTS, {
    variables: {
      page: 1,
      boardId: props.data?.fetchBoard._id,
    },
  });

  console.log(fetchCommentData.data);

  return (
    <PostCommentUI fetchCommentData={fetchCommentData} textLimit={textLimit} />
  );
}
