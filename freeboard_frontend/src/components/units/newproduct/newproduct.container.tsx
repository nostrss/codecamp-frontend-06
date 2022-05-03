import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREAT_ITEM, UPDATE_ITEM } from './newproduct.queries';
import NewProductUI from './newproduct.presenter';
import { productDataState } from '../../../commons/store';
import { useRecoilState } from 'recoil';
import ReactQuill from 'react-quill';

export default function NewProductContainer(props) {
  const router = useRouter();
  const [productData, setProductData] = useRecoilState(productDataState);

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

  const onClickImageDelete = (index) => () => {
    const newFileUrls = [...fileUrls];
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    console.log('useEffect 실행');

    if (props.isEdit === true) {
      setFileUrls(productData.fetchUseditem.images);
      setIsContents(productData.fetchUseditem.contents);
    }
  }, []);

  const onChangeContents = (value: string) => {
    console.log(value);
    // 리액트 훅 폼 : register에 등록하지 않고 강제로 값을 넣어주는 기능
    // 전부 지웠을 때 <p><br></p> 태그가 남아있어서 삭제를 해야함
    // if (value === '<p><br></p>') setIsContents('');
    setIsContents(value);
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
      alert('상품등록에 성공했습니다.');
      router.push(`/usedmarket/product/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      alert('상품 수정에 성공했습니다');
      router.push(`/usedmarket/product/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

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
      isContents={isContents}
      onClickImageDelete={onClickImageDelete}
      // QuillRef={QuillRef}
    />
  );
}
