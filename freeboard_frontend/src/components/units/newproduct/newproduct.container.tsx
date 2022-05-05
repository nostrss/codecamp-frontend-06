import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREAT_ITEM, UPDATE_ITEM } from './newproduct.queries';
import NewProductUI from './newproduct.presenter';
import { productDataState } from '../../../commons/store';
import { useRecoilState } from 'recoil';

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

  // 주소 관련 state 모읍
  const [isAddress, setIsAddress] = useState({
    zipcode: '',
    address: '',
    addressDetail: '',
    // lat: 0,
    // lng: 0,
  });

  const [isGps, setIsGps] = useState({
    La: 0,
    Ma: 0,
  });

  // const [isGpsLa, setIsGpsLa] = useState();
  // const [isGpsMa, setIsGpsMa] = useState();

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
    setHashArr(tagArr.filter((el) => el !== ''));
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
            useditemAddress: {
              zipcode: isAddress.zipcode,
              address: isAddress.address,
              addressDetail: isAddress.addressDetail,
              lat: isGps.Ma,
              lng: isGps.La,
            },
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
    if (!inputs.name) inputs.name = props.data.fetchUseditem.name;
    if (!inputs.remarks) inputs.remarks = props.data.fetchUseditem.remarks;
    if (!inputs.price) inputs.price = props.data.fetchUseditem.price;
    if (!isAddress.zipcode)
      isAddress.zipcode = props.data.fetchUseditem.useditemAddress.zipcode;
    if (!isAddress.address)
      isAddress.address = props.data.fetchUseditem.useditemAddress.address;
    if (!isAddress.addressDetail)
      isAddress.addressDetail =
        props.data.fetchUseditem.useditemAddress.addressDetail;
    if (!isGps.Ma) isGps.Ma = props.data.fetchUseditem.useditemAddress.lat;
    if (!isGps.La) isGps.La = props.data.fetchUseditem.useditemAddress.lng;
    try {
      const result = await updateItem({
        variables: {
          updateUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: isContents,
            price: Number(inputs.price),
            images: fileUrls,
            useditemAddress: {
              zipcode: isAddress.zipcode,
              address: isAddress.address,
              addressDetail: isAddress.addressDetail,
              lat: isGps.Ma,
              lng: isGps.La,
            },
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

  const [isOpen, setIsOpen] = useState(false);

  // antd 모달 띄우기
  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setIsAddress({
      ...isAddress,
      address: data.address,
      zipcode: data.zonecode,
    });
  };

  const onClickCancle = () => {
    router.push(`/product/${router.query.id}`);
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
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      onClickCancle={onClickCancle}
      setIsGps={setIsGps}
      isGps={isGps}
    />
  );
}
