import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREAT_ITEM } from './newproduct.queries';
import NewProductUI from './newproduct.presenter';
// import { IPostingPathProps } from './newproduct.type';
// import {
//   IMutation,
//   IMutationCreateBoardArgs,
//   IUpdateBoardInput,
// } from '../../../commons/types/generated/types';
import { Modal } from 'antd';

export default function NewProductContainer() {
  const router = useRouter();

  // input state 모음
  const [inputs, setInputs] = useState({
    name: '',
    remarks: '',
    contents: '',
    price: 0,
    images: [],
  });

  const [isAddress, setIsAddress] = useState({
    zipcode: '',
    address: '',
    addressDetail: '',
    lat: 0,
    lng: 0,
  });

  const [fileUrls, setFileUrls] = useState([]);
  const [hashtag, setHashtag] = useState('');
  const [hashArr, setHashArr] = useState([]);

  // // input값 미입력 상태 state
  // const [isWarning, setIsWarning] = useState({
  //   nameError: true,
  //   passwordError: true,
  //   titleError: true,
  //   contentsError: true,
  // });

  // // input값 변화 감지 함수
  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeAddress = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIsAddress({
      ...isAddress,
      [event.target.id]: event.target.value,
    });
  };

  // // input중 이미지는 배열이라 따로 함수 생성

  const onChangeFileUrls = (fileUrl: string) => {
    const newFileUrls = [...fileUrls];
    newFileUrls.push(fileUrl);
    setFileUrls(newFileUrls);
  };

  const onHashtag = (event) => {
    if (event.keyCode === 32 && event.target.value !== '') {
      setHashArr([...hashArr, '#' + event.target.value]);
      event.target.value = '';
    }
  };

  // 상품등록
  const [createItem] = useMutation(CREAT_ITEM);

  const onClickCreateItem = async () => {
    try {
      const result = await createItem({
        variables: {
          createUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: inputs.contents,
            price: Number(inputs.price),
            images: fileUrls,
            useditemAddress: isAddress,
          },
        },
      });
      console.log(result);
      router.push(`../usedmarket/product/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // // 수정하기 영역
  // const [updateContents] = useMutation(UPDATE_CONTENS);

  // // 수정하기로 진입했을때 수정버튼 영역
  // const updateButton = async () => {
  //   const updatePostingData: IUpdateBoardInput = {};

  //   if (inputs.title) updatePostingData.title = inputs.title;
  //   if (inputs.contents) updatePostingData.contents = inputs.contents;
  //   if (inputs.youtube) updatePostingData.youtubeUrl = inputs.youtube;
  //   if (inputs.images) updatePostingData.images = fileUrls;

  //   // 주소
  //   if (inputs.zipcode || inputs.isAddress || inputs.address2) {
  //     updatePostingData.boardAddress = {};
  //     if (inputs.zipcode)
  //       updatePostingData.boardAddress.zipcode = inputs.zipcode;
  //     if (inputs.isAddress)
  //       updatePostingData.boardAddress.address = inputs.isAddress;
  //     if (inputs.address2)
  //       updatePostingData.boardAddress.addressDetail = inputs.address2;
  //   }

  //   try {
  //     await updateContents({
  //       variables: {
  //         boardId: router.query.postid,
  //         password: inputs.password,
  //         updateBoardInput: updatePostingData,
  //       },
  //     });

  //     Modal.success({ content: '게시물 수정에 성공하였습니다!' });
  //     router.push(`/boards/post/${router.query.postid}`);
  //   } catch (error) {
  //     if (error instanceof Error) Modal.error({ content: error.message });
  //     setWarning(true);
  //   }
  // };

  // // 모달에 필요한 state
  // const [warning, setWarning] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // // antd 모달 띄우기
  // const showModal = () => {
  //   setIsOpen(true);
  // };

  // const handleOk = () => {
  //   setIsOpen(false);
  //   setWarning(false);
  // };

  // const handleCancel = () => {
  //   setIsOpen(false);
  //   setWarning(false);
  // };

  // const handleComplete = (data: any) => {
  //   setInputs({
  //     ...inputs,
  //     isAddress: data.address,
  //     zipcode: data.zonecode,
  //   });

  //   setIsOpen(false);
  // };

  console.log(isAddress.lat);

  return (
    <NewProductUI
      onClickCreateItem={onClickCreateItem}
      onChangeInputs={onChangeInputs}
      onChangeAddress={onChangeAddress}
      // isEdit={props.isEdit}
      // submitContents={submitContents}
      // updateButton={updateButton}
      // originData={props.originData}
      // showModal={showModal}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
      // handleComplete={handleComplete}
      // isOpen={isOpen}
      // warning={warning}
      // onChangeInputs={onChangeInputs}
      // inputs={inputs}
      // setInputs={setInputs}
      // isWarning={isWarning}
      hashArr={hashArr}
      onHashtag={onHashtag}
      isAddress={isAddress}
      setIsAddress={setIsAddress}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
