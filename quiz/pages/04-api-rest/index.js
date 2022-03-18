import axios from 'axios'
import { useState } from 'react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
export const InputPage = styled.input`
  margin-bottom: 30px;
`

export default function RestGetPage() {
  const [data, setData] = useState('')
  const [page, setPage] = useState('')

  const onChangePage = (event) => {
    setPage(event.target.value)
  }

  const callRestApi = async () => {
    setData('')
    const result = await axios.get(`https://koreanjson.com/posts/${page}`)
    setData(result.data.title)
  }

  return (
    <Wrapper>
      <InputPage
        type="text"
        onChange={onChangePage}
        placeholder="페이지번호를 입력하세요"
      />
      <div>
        <button onClick={callRestApi}>페이지 불러오기</button>
      </div>
      <div>{data}</div>
    </Wrapper>
  )
}
