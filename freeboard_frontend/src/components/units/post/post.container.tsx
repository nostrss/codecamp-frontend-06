import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_POST, DELETE_CONTENS } from './post.queries';
import PostUI from './post.presenter';
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from '../../../commons/types/generated/types';
// import { ITextarea } from './post.type';

export default function PostContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_POST, {
    variables: { boardId: router.query.postid },
  });

  const [deleteContents] = useMutation<
    Pick<IMutation, 'deleteBoard'>,
    IMutationDeleteBoardArgs
  >(DELETE_CONTENS);

  const movetoBoards = async () => {
    router.push('/boards');
  };

  const moveUpdate = async () => {
    router.push(`/boards/post/${router.query.postid}/edit`);
  };

  // 삭제 버튼 클릭
  const deleteButton = async () => {
    alert('삭제를 진행합니다');
    await deleteContents({
      variables: {
        boardId: String(router.query.postid),
      },
    });

    router.push(`/boards`);
  };

  return (
    <PostUI
      data={data}
      moveUpdate={moveUpdate}
      movetoBoards={movetoBoards}
      deleteButton={deleteButton}
    />
  );
}
