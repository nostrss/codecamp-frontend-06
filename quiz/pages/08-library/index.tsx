import { Rate, Calendar, Alert } from 'antd'
import { useState } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import ReactPlayer from 'react-player'

const MyCal = styled(Calendar)`
  width: 600px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function LibraryQuiz() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(moment('2022-03-28'))
  const [selectedValue, setselectedValue] = useState(moment('2022-03-28'))

  const handleChange = (value: number) => {
    setValue(value)
    alert(value + '점')
  }

  // value 값을 정확히 어떤값으로 지정해야하는지 찾지를 못했습니다. 답변주실수 있을까요?
  const onSelect = (value: any) => {
    setValue2(value)
    setselectedValue(value)
    console.log(value2)
    console.log(selectedValue)
  }

  return (
    <Wrapper>
      <h2>1-1</h2>
      <Rate onChange={handleChange} value={value} />
      <div>{value}점</div>
      <h2>1-2</h2>
      <MyCal value={value2} onSelect={onSelect} />
      <Alert
        message={`선택하신 날짜는 ${
          selectedValue && selectedValue.format('YYYY-MM-DD')
        }`}
      />
      <Alert
        message={`선택한 날짜의 월은 ${
          selectedValue && selectedValue.format('MM')
        }월 입니다`}
      />
      <h2>1-3</h2>
      <ReactPlayer
        width={800}
        height={600}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing={true}
        muted={true}
      />
    </Wrapper>
  )
}
