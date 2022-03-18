// axios 임포트 하기
// axios는 node_modules에 설치되어 있다

//import axios from 'axios';
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CREAT_BOARD = gql`
  mutation myMutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`

export default function RestGetPage() {
  const router = useRouter()
  const [data, setData] = useState('')
  const [myWriter, setMyWriter] = useState('')
  const [myTitle, setMyTitle] = useState('')
  const [myContents, setMyContents] = useState('')

  const [callApi] = useMutation(CREAT_BOARD)

  const callGraphqlApi = async () => {

    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents },
      })
      console.log(result)
      alert(" 게시글 등록 성공, 상세페이지로 이동합니다")
      router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)

    } catch (error) {
      alert(error.message)
    } 
  }

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setMyContents(event.target.value)
  }

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} /> <br />
      제목 : <input type="text" onChange={onChangeTitle} /> <br />
      내용 : <input type="text" onChange={onChangeContents} /> <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!</button>
      <div></div>
    </div>
  )
}
