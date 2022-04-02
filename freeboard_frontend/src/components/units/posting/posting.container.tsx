import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { SEND_CONTENTS, UPDATE_CONTENS } from './posting.queries';
import PostingUI from './posting.presenter';
import { IPostingPathProps, ICreateBoardApi } from './posting.type';
import { IUpdateBoardInput } from '../../../../src/commons/types/generated/types';
import { Modal } from 'antd';

export default function PostingContainer(props: IPostingPathProps) {
  // 입력 값 스테이트
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contents, setContents] = useState('');
  const [contentsError, setContentsError] = useState('');
  const [youtube, setYoutube] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [isAddress, setIsAddress] = useState('');
  const [address2, setAddress2] = useState('');

  // state 모음
  const [warning, setWarning] = useState(false);
  const [isError, setIsError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // mutation
  const [sendContents] = useMutation(SEND_CONTENTS);
  const [updateContents] = useMutation(UPDATE_CONTENS);

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

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
  };

  const onChangeZipcode = (event: ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };

  const onChangeAddress2 = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress2(event.target.value);
  };

  // 버튼 영역
  // 새글 작성 완료 버튼
  const submitContents = async () => {
    const sendPosting: ICreateBoardApi = {
      writer: String(name),
      password: String(password),
      title: String(title),
      contents: String(contents),
      youtubeUrl: String(youtube),
      boardAddress: {
        zipcode: String(zipcode),
        address: String(isAddress),
        addressDetail: String(address2),
      },
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

    if (name !== '' && password !== '' && title !== '' && contents !== '') {
      try {
        const response = await sendContents({
          variables: {
            createBoardInput: sendPosting,
          },
        });
        Modal.success({ content: '게시물 등록에 성공하였습니다!' });
        router.push(`../boards/post/${response.data.createBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
        setIsError(error.message);
        setWarning(true);
      }
    }
  };

  // 수정하기로 들어왔을때  수정버튼 영역
  const updateButton = async () => {
    const updatePostingData: IUpdateBoardInput = {};

    if (title) updatePostingData.title = title;
    if (contents) updatePostingData.contents = contents;
    if (youtube) updatePostingData.youtubeUrl = youtube;

    // 주소
    if (zipcode || isAddress || address2) {
      updatePostingData.boardAddress = {};
      if (zipcode) updatePostingData.boardAddress.zipcode = zipcode;
      if (isAddress) updatePostingData.boardAddress.address = isAddress;
      if (address2) updatePostingData.boardAddress.addressDetail = address2;

      try {
        await updateContents({
          variables: {
            boardId: router.query.postid,
            password: password,
            updateBoardInput: updatePostingData,
          },
        });

        Modal.success({ content: '게시물 수정에 성공하였습니다!' });
        router.push(`/boards/post/${router.query.postid}`);
      } catch (error) {
        setIsError(error.message);
        setWarning(true);
      }
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
    setIsAddress(data.address);
    setZipcode(data.zonecode);
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
      onChangeYoutube={onChangeYoutube}
      onChangeZipcode={onChangeZipcode}
      onChangeAddress2={onChangeAddress2}
      zipcode={zipcode}
      address2={address2}
    />
  );
}
