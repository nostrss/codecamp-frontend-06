import InputUI from './Input.presenter';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CREAT_BOARD } from './Input.queries';

export default function InputContainer() {
  const router = useRouter();
  const [data, setData] = useState('');
  const [myWriter, setMyWriter] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myContents, setMyContents] = useState('');
  const [isActive, setIsActive] = useState(false);

  const [callApi] = useMutation(CREAT_BOARD);

  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      });
      console.log(result);
      alert(' 게시글 등록 성공, 상세페이지로 이동합니다');
      router.push(
        `/05-08-dynamic-routed-input/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value !== '' && myTitle !== '' && myContents !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
    if (myWriter !== '' && event.target.value !== '' && myContents !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
    if (myWriter !== '' && myTitle !== '' && event.target.value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <InputUI
      callGraphqlApi={callGraphqlApi}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  );
}
