import BoardWriteUI from './BoardWrite.presenter'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import {CREAT_BOARD} from './BoardWrite.queries'

export default function BoardWrite() {
  const [data, setData] = useState('')
  const [myWriter, setMyWriter] = useState('')
  const [myTitle, setMyTitle] = useState('')
  const [myContents, setMyContents] = useState('')
  const [isActive, setIsActive] = useState('')
  const [callApi] = useMutation(CREAT_BOARD)

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    })
    console.log(result)
    setData(result.data.createBoard.message)
  }

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
    if (event.target.value !== "" && myTitle !== "" && myContents !== "")
    {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
    if (myWriter !== "" && event.target.value !== "" && myContents !== "")
    {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeContents = (event) => {
    setMyContents(event.target.value)
    if (myWriter !== "" && myTitle !== "" && event.target.value!== "")
    {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }


  return (
    <BoardWriteUI
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      isActive={isActive}
    />
    
  )
}