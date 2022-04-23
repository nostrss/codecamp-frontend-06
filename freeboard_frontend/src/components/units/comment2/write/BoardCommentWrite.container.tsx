import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from '../../../../commons/types/generated/types';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries';
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from './BoardCommentWrite.queries';
import { IBoardCommentWriteProps } from './BoardCommentWrite.types';

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [contents, setContents] = useState('');
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, 'createBoardComment'>,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, 'updateBoardComment'>,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeStar = (value: number) => {
    setStar(value);
  };

  const onClickWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: String(router.query.postid),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.postid },
          },
        ],
      });
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  const onClickUpdate = async () => {
    if (!contents) {
      alert('내용이 수정되지 않았습니다.');
      return;
    }
    if (!password) {
      alert('비밀번호가 입력되지 않았습니다.');
      return;
    }

    try {
      if (!props.el?._id) return;

      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (star) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.postid },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error instanceof Error);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
