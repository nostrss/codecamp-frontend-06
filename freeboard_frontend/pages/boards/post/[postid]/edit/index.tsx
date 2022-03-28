// 글 수정페이지

import PostingContainer from '../../../../../src/components/units/posting/posting.container';
import { FETCH_POST } from '../../../../../src/components/units/post/post.queries';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

export default function EditPosting() {
  const router = useRouter();
  const originData = useQuery(FETCH_POST, {
    variables: { boardId: router.query.postid },
  });
  return <PostingContainer isEdit={true} originData={originData} />;
}
