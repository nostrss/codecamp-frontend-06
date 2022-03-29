// 컨테이너 컴포넌트
import BoardWriteUI from './BoardWrite.presenter';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREAT_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';

export default function BoardWrite(props) {
  const [data, setData] = useState('');
  const [myWriter, setMyWriter] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myContents, setMyContents] = useState('');
  const [isActive, setIsActive] = useState('');
  const [callApi] = useMutation(CREAT_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.mynumber),
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    console.log(result);

    alert('게시글 수정에 성공하였습니다');
    router.push(`/08-05-boards/${router.query.mynumber}`);
  };

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    setData(result.data.createBoard.message);
    console.log(data);

    alert('게시글 등록이 성공하였습니다');
    router.push(`/08-05-boards/${result.data.createBoard.number}`);
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
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={this.props.isEdit}
    />
  );
}
