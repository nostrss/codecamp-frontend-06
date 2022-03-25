import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_POST } from './post.queries';
import PostUI from './post.presenter';
// import { ITextarea } from './post.type';

export default function PostContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_POST, {
    variables: { boardId: router.query.postid },
  });

  console.log(data);
  console.log(router.query);

  const movetoBoards = async () => {
    router.push('/boards');
  };

  const moveUpdate = async () => {
    router.push(`/boards/post/${router.query.postid}/edit`);
  };

  return (
    <PostUI data={data} moveUpdate={moveUpdate} movetoBoards={movetoBoards} />
  );
}
