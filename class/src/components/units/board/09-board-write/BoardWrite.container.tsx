// 컨테이너 컴포넌트
import { useMutation } from '@apollo/client';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.presenter';
import { CREAT_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { IBoardWriteProps, IMyVariables } from './BoardWrite.types';

export default function BoardWrite(props: IBoardWriteProps) {
  const [data, setData] = useState('');
  const [myWriter, setMyWriter] = useState('');
  const [myTitle, setMyTitle] = useState('');
  const [myContents, setMyContents] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [callApi] = useMutation(CREAT_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.mynumber) }; // ts 객체 선언부분
    if (myWriter !== '') myVariables.writer = myWriter;

    if (myTitle !== '') myVariables.title = myTitle;

    if (myContents !== '') {
      myVariables.contents = myContents;
    }

    const result = await updateBoard({
      variables: myVariables,
    });

    alert('게시글 수정에 성공하였습니다');
    router.push(`/09-03-boards/${router.query.mynumber}`);
    console.log('setData');
    setData(result.data.updateBoard.message);
  };

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    setData(result.data.createBoard.message);

    alert('게시글 등록이 성공하였습니다');
    router.push(`/09-03-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
    if (event.target.value !== '' && myTitle !== '' && myContents !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
    if (myWriter !== '' && event.target.value !== '' && myContents !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
