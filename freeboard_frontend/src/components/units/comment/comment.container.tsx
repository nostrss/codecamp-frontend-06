import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, useState, MouseEvent } from 'react';
import { IMutationCreateBoardCommentArgs } from '../../../commons/types/generated/types';
import PostCommentUI from './comment.presenter';
import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from './comment.queries';
import { IPostToCommnetData } from './comment.type';

export default function PostComment(props: IPostToCommnetData) {
  // 댓글 작성 글자수 제한 변수
  const textLimit: number = 100;
  const [writer, setWriter] = useState('');
  const [writerError, setWriterError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rating, setRating] = useState('');
  const [ratingError, setratingError] = useState('');
  const [comment, setComment] = useState('');
  const [commentError, setcommentError] = useState('');
  const [sendComment] = useMutation(CREATE_COMMENT);
  const [deleteComment] = useMutation(DELETE_COMMENT);

  // 댓글 정보 불러오기

  const fetchCommentData = useQuery(FETCH_COMMENTS, {
    variables: {
      page: 1,
      boardId: props?.data?.fetchBoard?._id,
    },
  });

  // 댓글 작성 정보 담기
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (writer !== '') {
      setWriterError('');
    }
    console.log(writer);
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (password !== '') {
      setPasswordError('');
    }
    console.log(password);
  };

  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
    if (rating !== '') {
      setratingError('');
    }
    console.log(rating);
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
    if (comment !== '') {
      setcommentError('');
    }
    console.log(comment);
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
                page: 1,
                boardId: props?.data?.fetchBoard?._id,
              },
            },
          ],
        });
      } catch (error) {
        alert(error instanceof Error);
      }
    } else {
      alert('필수정보가 누락되었습니다');
    }
  };

  // 댓글 삭제 버튼 클릭

  const onClickDeleteComment = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log('삭제클릭');
    console.log(event.target.id);
    const confirmPw = prompt('비밀번호를 입력하세요');
    alert(confirmPw);
    console.log(confirmPw);

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
    />
  );
}
