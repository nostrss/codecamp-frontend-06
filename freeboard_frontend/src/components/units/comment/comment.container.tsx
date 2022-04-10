import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, useState, MouseEvent } from 'react';
import {
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from '../../../commons/types/generated/types';
import PostCommentUI from './comment.presenter';
import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from './comment.queries';
import { IPostToCommnetData } from './comment.type';
import { Modal } from 'antd';

export default function PostComment(props: IPostToCommnetData) {
  // 댓글 작성 글자수 제한 변수
  const textLimit: number = 100;
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [sendComment] = useMutation(CREATE_COMMENT);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [submitEdit] = useMutation(UPDATE_COMMENT);

  // 댓글의 수정 모드 스테이트
  const [isEdit, setIsEdit] = useState(false);

  // 수정 클릭한 댓글의 id정보 담는 스테이트
  const [commentId, setCommentId] = useState(String(''));

  // 댓글 정보 불러오기
  const fetchCommentData = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: props?.data?.fetchBoard?._id,
    },
  });

  const onLoadMore = () => {
    if (!fetchCommentData.data) return;

    fetchCommentData.fetchMore({
      variables: {
        page:
          Math.ceil(fetchCommentData.data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        } else {
          return {
            fetchBoardComments: [
              ...prev.fetchBoardComments,
              ...fetchMoreResult.fetchBoardComments,
            ],
          };
        }
      },
    });
  };

  // 댓글 작성 정보 담기
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeRating = (event: number) => {
    setRating(event);
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  // 댓글 작성버튼 클릭

  const onClickSubmitComment = async () => {
    if (writer && password && rating && comment) {
      const commentData: IMutationCreateBoardCommentArgs = {
        boardId: String(props?.data?.fetchBoard._id),
        createBoardCommentInput: {
          contents: String(comment),
          password: String(password),
          rating: Number(rating),
          writer: String(writer),
        },
      };

      try {
        await sendComment({
          variables: commentData,
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: {
                boardId: props?.data?.fetchBoard?._id,
              },
            },
          ],
        });
        setWriter('');
        setPassword('');
        setRating(0);
        setComment('');
      } catch (error) {
        alert(error instanceof Error);
      }
    } else {
      Modal.warning({ content: '미입력 항목이 있습니다.' });
    }
  };

  // 댓글 삭제 버튼 클릭

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) {
      const confirmPw = prompt('비밀번호를 입력하세요');
      alert(confirmPw);

      try {
        await deleteComment({
          variables: {
            password: String(confirmPw),
            boardCommentId: event.target.className,
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: {
                boardId: props?.data?.fetchBoard?._id,
              },
            },
          ],
        });
      } catch (error) {
        alert(error instanceof Error);
      }
    }
  };

  // 댓글 수정icon 클릭
  const onClickEditComment = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) {
      setCommentId(event.target.className);
      setIsEdit(true);
    }
  };

  // 수정 완료 버튼 클릭

  const onClickSubmitEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) {
      const updateData: IMutationUpdateBoardCommentArgs = {
        updateBoardCommentInput: {
          contents: String(comment),
          rating: Number(rating),
        },
        password: String(password),
        boardCommentId: String(event.target.id),
      };
      if (comment) {
        updateData.updateBoardCommentInput.contents = comment;
      } else {
        updateData.updateBoardCommentInput.contents =
          fetchCommentData.data.fetchBoardComments.contents;
      }
      if (rating) {
        updateData.updateBoardCommentInput.rating = rating;
      } else {
        updateData.updateBoardCommentInput.rating =
          fetchCommentData.data.fetchBoardComments.rating;
      }

      try {
        await submitEdit({
          variables: updateData,
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: {
                boardId: props?.data?.fetchBoard?._id,
              },
            },
          ],
        });
        setIsEdit(false);
        setWriter('');
        setPassword('');
        setRating(0);
        setComment('');
        setCommentId('');
        Modal.success({ content: '댓글이 수정되었습니다.' });
      } catch (error) {
        Modal.error({ content: `${error.message}` });
      }
    }
  };

  return (
    <PostCommentUI
      fetchCommentData={fetchCommentData}
      textLimit={textLimit}
      onChangeWriter={onChangeWriter}
      onChangePw={onChangePw}
      onChangeRating={onChangeRating}
      onChangeComment={onChangeComment}
      onClickSubmitComment={onClickSubmitComment}
      onClickDeleteComment={onClickDeleteComment}
      writer={writer}
      password={password}
      rating={rating}
      comment={comment}
      isEdit={isEdit}
      onClickEditComment={onClickEditComment}
      commentId={commentId}
      onClickSubmitEdit={onClickSubmitEdit}
      onLoadMore={onLoadMore}
    />
  );
}
