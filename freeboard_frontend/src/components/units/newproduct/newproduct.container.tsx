import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREAT_ITEM, UPDATE_ITEM } from './newproduct.queries';
import NewProductUI from './newproduct.presenter';
// import { IPostingPathProps } from './newproduct.type';
// import {
//   IMutation,
//   IMutationCreateBoardArgs,
//   IUpdateBoardInput,
// } from '../../../commons/types/generated/types';
import { Modal } from 'antd';

export default function NewProductContainer(props) {
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
  const [hashArr, setHashArr] = useState([]);
  const [isContents, setIsContents] = useState('');

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

  const onChangeContents = (value: string) => {
    console.log(value);
    setIsContents(value);

    // 리액트 훅 폼 : register에 등록하지 않고 강제로 값을 넣어주는 기능
    // 전부 지웠을 때 <p><br></p> 태그가 남아있어서 삭제를 해야함
    // setValue('contents', value === '<p><br></p>' ? '' : value);
  };

  const onChangeTags = (event) => {
    const tagArr = event.target.value.split(' ');
    setHashArr(tagArr);
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
            contents: isContents,
            price: Number(inputs.price),
            images: fileUrls,
            useditemAddress: isAddress,
            tags: hashArr,
          },
        },
      });
      console.log(result);
      router.push(`/usedmarket/product/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const [updateItem] = useMutation(UPDATE_ITEM);

  const onClickUpdateComplete = async () => {
    try {
      const result = await updateItem({
        variables: {
          updateUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: isContents,
            price: Number(inputs.price),
            images: fileUrls,
            useditemAddress: isAddress,
            tags: hashArr,
          },
          useditemId: router.query.id,
        },
      });
      Modal.success({ content: '게시물 수정에 성공하였습니다!' });
      console.log(result);
      router.push(`/usedmarket/product/${result.data?.updateUseditem._id}`);
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

  return (
    <NewProductUI
      onClickCreateItem={onClickCreateItem}
      onChangeInputs={onChangeInputs}
      onChangeAddress={onChangeAddress}
      onChangeContents={onChangeContents}
      onChangeTags={onChangeTags}
      hashArr={hashArr}
      isAddress={isAddress}
      setIsAddress={setIsAddress}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      isEdit={props.isEdit}
      onClickUpdateComplete={onClickUpdateComplete}
      data={props.data}
    />
  );
}
