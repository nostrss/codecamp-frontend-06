import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { SEND_CONTENTS, UPDATE_CONTENS } from './posting.queries';
import PostingUI from './posting.presenter';
import { IPostingPathProps } from './posting.type';
import {
  IMutation,
  IMutationCreateBoardArgs,
  IUpdateBoardInput,
} from '../../../../src/commons/types/generated/types';
import { Modal } from 'antd';

export default function PostingContainer(props: IPostingPathProps) {
  const router = useRouter();

  // input state 모음
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    title: '',
    contents: '',
    youtube: '',
    zipcode: '',
    isAddress: '',
    address2: '',
  });

  // input값 미입력 상태 state
  const [isWarning, setIsWarning] = useState({
    nameError: true,
    passwordError: true,
    titleError: true,
    contentsError: true,
  });

  // input값 변화 감지 함수
  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  // 새글 작성 시작
  const [sendContents] = useMutation<
    Pick<IMutation, 'createBoard'>,
    IMutationCreateBoardArgs
  >(SEND_CONTENTS);

  // 새글 작성 완료 버튼
  const submitContents = async () => {
    setIsWarning({
      ...isWarning,
      nameError: !!inputs.name,
      passwordError: !!inputs.password,
      titleError: !!inputs.title,
      contentsError: !!inputs.contents,
    });

    if (
      inputs.name !== '' &&
      inputs.password !== '' &&
      inputs.title !== '' &&
      inputs.contents !== ''
    ) {
      try {
        const response = await sendContents({
          variables: {
            createBoardInput: {
              writer: String(inputs.name),
              title: String(inputs.title),
              contents: String(inputs.contents),
              password: String(inputs.password),
              youtubeUrl: String(inputs.youtube),
              boardAddress: {
                zipcode: String(inputs.zipcode),
                address: String(inputs.isAddress),
                addressDetail: String(inputs.address2),
              },
            },
          },
        });
        Modal.success({ content: '게시물 등록에 성공하였습니다!' });
        router.push(`../boards/post/${response.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
        setWarning(true);
      }
    }
  };

  // 수정하기 영역
  const [updateContents] = useMutation(UPDATE_CONTENS);

  // 수정하기로 진입했을때 수정버튼 영역
  const updateButton = async () => {
    const updatePostingData: IUpdateBoardInput = {};

    if (inputs.title) updatePostingData.title = inputs.title;
    if (inputs.contents) updatePostingData.contents = inputs.contents;
    if (inputs.youtube) updatePostingData.youtubeUrl = inputs.youtube;

    // 주소
    if (inputs.zipcode || inputs.isAddress || inputs.address2) {
      updatePostingData.boardAddress = {};
      if (inputs.zipcode)
        updatePostingData.boardAddress.zipcode = inputs.zipcode;
      if (inputs.isAddress)
        updatePostingData.boardAddress.address = inputs.isAddress;
      if (inputs.address2)
        updatePostingData.boardAddress.addressDetail = inputs.address2;
    }

    try {
      await updateContents({
        variables: {
          boardId: router.query.postid,
          password: inputs.password,
          updateBoardInput: updatePostingData,
        },
      });

      Modal.success({ content: '게시물 수정에 성공하였습니다!' });
      router.push(`/boards/post/${router.query.postid}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      setWarning(true);
    }
  };

  // 모달에 필요한 state
  const [warning, setWarning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setInputs({
      ...inputs,
      isAddress: data.address,
      zipcode: data.zonecode,
    });

    setIsOpen(false);
  };

  return (
    <PostingUI
      isEdit={props.isEdit}
      submitContents={submitContents}
      updateButton={updateButton}
      originData={props.originData}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isOpen={isOpen}
      warning={warning}
      onChangeInputs={onChangeInputs}
      inputs={inputs}
      isWarning={isWarning}
    />
  );
}
