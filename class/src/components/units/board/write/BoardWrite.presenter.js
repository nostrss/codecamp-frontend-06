// import { SubmitButton, WriterInput } from './BoardWrite.style'
 import * as S from './BoardWrite.style'
export default function BoardWriteUI(props) {
  return (
    <div>
    작성자 : <S.WriterInput type="text" onChange={props.onChangeWriter} /> <br />
    제목 : <input type="text" onChange={props.onChangeTitle} /> <br />
    내용 : <input type="text" onChange={props.onChangeContents} /> <br />
    <S.SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기!!</S.SubmitButton>
  </div>    
  )
}



