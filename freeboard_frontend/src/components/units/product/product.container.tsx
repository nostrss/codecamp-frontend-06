import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PRODUCT } from './product.queries';
import ProductUI from './product.presenter';
import { isConstValueNode } from 'graphql';
// import {
//   IMutation,
//   IMutationDeleteBoardArgs,
//   IMutationDislikeBoardArgs,
//   IMutationLikeBoardArgs,
// } from '../../../commons/types/generated/types';
// import PostComment from '../comment/comment.container';

export default function ProductContainer() {
  const router = useRouter();

  // 작성된 컨텐츠 정보 불러오기
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { useditemId: router?.query.id },
  });
  console.log(data);
  // const [isBoardLike] = useMutation<
  //   Pick<IMutation, 'likeBoard'>,
  //   IMutationLikeBoardArgs
  // >(BOARD_LIKE);

  // const [isBoardDislike] = useMutation<
  //   Pick<IMutation, 'dislikeBoard'>,
  //   IMutationDislikeBoardArgs
  // >(BOARD_DISLIKE);

  // // 보드리스트로 이동하기 버튼
  // const movetoBoards = () => {
  //   router.push('/boards');
  // };

  // // 수정하기(edit)페이지로 이동하기 버튼
  // const moveUpdate = () => {
  //   router.push(`/boards/post/${router.query.postid}/edit`);
  // };

  // // 삭제 쿼리 실행 함수 생성

  // const [deleteContents] = useMutation<
  //   Pick<IMutation, 'deleteBoard'>,
  //   IMutationDeleteBoardArgs
  // >(DELETE_CONTENS);

  // // 삭제 버튼 클릭
  // const deleteButton = async () => {
  //   alert('삭제를 진행합니다');

  //   try {
  //     await deleteContents({
  //       variables: {
  //         boardId: String(router.query.postid),
  //       },
  //     });

  //     router.push(`/boards`);
  //   } catch (error) {
  //     alert(error instanceof Error);
  //   }
  // };

  // const onClickLike = () => {
  //   isBoardLike({
  //     variables: {
  //       boardId: String(router.query.postid),
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_POST,
  //         variables: { boardId: String(router.query.postid) },
  //       },
  //     ],
  //   });
  // };

  // const onClickDislike = () => {
  //   isBoardDislike({
  //     variables: {
  //       boardId: String(router.query.postid),
  //     },
  //     refetchQueries: [
  //       {
  //         query: FETCH_POST,
  //         variables: { boardId: String(router.query.postid) },
  //       },
  //     ],
  //   });
  // };

  return (
    <>
      <ProductUI
        data={data}
        // moveUpdate={moveUpdate}
        // movetoBoards={movetoBoards}
        // deleteButton={deleteButton}
        // onClickLike={onClickLike}
        // onClickDislike={onClickDislike}
      />
      {/* <PostComment data={data} /> */}
    </>
  );
}
