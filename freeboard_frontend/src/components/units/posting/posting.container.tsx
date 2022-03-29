import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { SEND_CONTENTS, UPDATE_CONTENS } from './posting.queries';
import PostingUI from './posting.presenter';
import { IPostingPathProps, ICreateBoardApi } from './posting.type';
import { IUpdateBoardInput } from '../../../../src/commons/types/generated/types';

export default function PostingContainer(props: IPostingPathProps) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contents, setContents] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [sendContents] = useMutation(SEND_CONTENTS);
  const [updateContents] = useMutation(UPDATE_CONTENS);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddress, setIsAddress] = useState('');
  const [warning, setWarning] = useState(false);
  const [isError, setIsError] = useState('');

  const router = useRouter(); // router세팅

  // 입력값 감지 영역
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (name !== '') {
      setNameError('');
    }
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (password !== '') {
      setPasswordError('');
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (title !== '') {
      setTitleError('');
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (contents !== '') {
      setContentsError('');
    }
  };

  // 버튼 영역
  // 새글 작성 완료 버튼
  const submitContents = async () => {
    const sendPosting: ICreateBoardApi = {
      writer: String(name),
      password: String(password),
      title: String(title),
      contents: String(contents),
    };

    if (name === '') {
      setNameError('name is empty');
    }

    if (password === '') {
      setPasswordError('password is empty');
    }

    if (title === '') {
      setTitleError('Title is empty');
    }

    if (contents === '') {
      setContentsError('contents is empty');
    }

    try {
      const response = await sendContents({
        variables: {
          createBoardInput: sendPosting,
        },
      });
      router.push(`../boards/post/${response.data.createBoard._id}`);
    } catch (error) {
      setIsError(error.message);
      setWarning(true);
    }
  };

  // 수정하기로 들어왔을때  수정버튼 영역
  const updateButton = async () => {
    const updatePostingData: IUpdateBoardInput = {};

    if (title) updatePostingData.title = title;
    if (contents) updatePostingData.contents = contents;

    try {
      await updateContents({
        variables: {
          boardId: router.query.postid,
          password: password,
          updateBoardInput: updatePostingData,
        },
      });

      router.push(`/boards/post/${router.query.postid}`);
    } catch (error) {
      setIsError(error.message);
      setWarning(true);
    }
  };

  // antd 모달 띄우기
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
    setWarning(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setWarning(false);
  };

  const handleComplete = (data: any) => {
    setIsAddress(data);
    setIsOpen(false);
  };

  return (
    <PostingUI
      isEdit={props.isEdit}
      onChangeName={onChangeName}
      nameError={nameError}
      onChangePw={onChangePw}
      passwordError={passwordError}
      onChangeTitle={onChangeTitle}
      titleError={titleError}
      onChangeContents={onChangeContents}
      contentsError={contentsError}
      submitContents={submitContents}
      updateButton={updateButton}
      originData={props.originData}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isOpen={isOpen}
      isAddress={isAddress}
      warning={warning}
      isError={isError}
    />
  );
}
