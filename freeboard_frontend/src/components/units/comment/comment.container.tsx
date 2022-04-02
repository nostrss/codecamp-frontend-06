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
      Modal.warning({ content: '필수 입력사항이 미입력 되었습니다' });
    }
  };

  // 댓글 삭제 버튼 클릭

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    const confirmPw = prompt('비밀번호를 입력하세요');
    alert(confirmPw);

    try {
      await deleteComment({
        variables: {
          password: String(confirmPw),
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              page: 1,
              boardId: props?.data?.fetchBoard?._id,
            },
          },
        ],
      });
    } catch (error) {
      console.log('catch');
      alert(error instanceof Error);
    }
  };

  // 댓글 수정icon 클릭
  const onClickEditComment = (event: MouseEvent<HTMLButtonElement>) => {
    setCommentId(event.target.id);
    setIsEdit(true);
  };

  // 수정 완료 버튼 클릭

  const onClickSubmitEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    const updateData: IMutationUpdateBoardCommentArgs = {
      updateBoardCommentInput: {
        contents: String(comment),
        rating: Number(rating),
      },
      password: String(password),
      boardCommentId: String(event.target.id),
    };

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
      console.log(isEdit);
      setWriter('');
      setPassword('');
      setRating(0);
      setComment('');
      setCommentId('');
      Modal.success({ content: '댓글이 수정되었습니다.' });
      console.log(isEdit);
    } catch (error) {
      console.log('catch');
      alert(error instanceof Error);
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
    />
  );
}
