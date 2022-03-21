import * as S from './Input.styles'

export default function InputUI(props) {
  return (
    <S.Wrapper>
      작성자 : <S.WriterInput type="text" onChange={props.onChangeWriter} /> <br />
      제목 : <S.WriterInput type="text" onChange={props.onChangeTitle} /> <br />
      내용 : <S.WriterInput type="text" onChange={props.onChangeContents} /> <br />
      <S.SubmitButton onClick={props.callGraphqlApi}isActive={props.isActive} >GRAPHQL-API 요청하기!!</S.SubmitButton>
    </S.Wrapper>
  )
}
