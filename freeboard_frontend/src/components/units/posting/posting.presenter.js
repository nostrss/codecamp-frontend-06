import {
  Wrapper,
  WrapperCanvas,
  Title,
  RowWrapper,
  ColumnWrapperItem,
  InputLable,
  IntputText,
  InputContents,
  RowAddressWrap,
  InputZipCode,
  ButtonZip,
  InputAddress,
  UploadImageWrapper,
  UploadButtonWrapper,
  UploadButton,
  RadioWrapper,
  RadioItem,
  SubmitButton,
  Warning,
} from './posting.style'

export default function PostingUI(props) {

  return (
    <Wrapper>
      <WrapperCanvas>
        <Title>게시물 등록</Title>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="name">작성자</InputLable>
            <IntputText
              name="name"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeName}
            ></IntputText>
            <Warning>{props.nameError}</Warning>
          </ColumnWrapperItem>
          <ColumnWrapperItem>
            <InputLable for="pw">비밀번호</InputLable>
            <IntputText
              name="pw"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePw}
            ></IntputText>
            <Warning>{props.passwordError}</Warning>
          </ColumnWrapperItem>
        </RowWrapper>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="title">제목</InputLable>
            <Warning>{props.titleError}</Warning>
            <IntputText
              name="title"
              placeholder="제목을 작성해주세요"
              onChange={props.onChangeTitle}
            ></IntputText>
          </ColumnWrapperItem>
        </RowWrapper>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="contents">내용</InputLable>
            <Warning>{props.contentsError}</Warning>
            <InputContents
              name="contents"
              placeholder="내용을 작성해주세요"
              onChange={props.onChangeContents}
            ></InputContents>
          </ColumnWrapperItem>
        </RowWrapper>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="address">주소</InputLable>
            <RowAddressWrap>
              <InputZipCode name="address" placeholder="07250"></InputZipCode>
              <ButtonZip>우편번호검색</ButtonZip>
            </RowAddressWrap>
            <InputAddress></InputAddress>
            <IntputText></IntputText>
          </ColumnWrapperItem>
        </RowWrapper>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="youtube">유튜브</InputLable>
            <IntputText
              name="youtube"
              placeholder="링크를 복사해주세요"
            ></IntputText>
          </ColumnWrapperItem>
        </RowWrapper>
        <UploadImageWrapper>
          <InputLable>사진 첨부</InputLable>
          <UploadButtonWrapper>
            <UploadButton></UploadButton>
            <UploadButton></UploadButton>
            <UploadButton></UploadButton>
          </UploadButtonWrapper>
        </UploadImageWrapper>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="mainset">메인 설정</InputLable>
            <RadioWrapper>
              <RadioItem>
                <input type="radio" name="mainset" />
                유튜브
              </RadioItem>
              <RadioItem type="radio" name="mainset">
                <input type="radio" name="mainset" />
                사진
              </RadioItem>
            </RadioWrapper>
          </ColumnWrapperItem>
        </RowWrapper>
        <SubmitButton onClick={props.submitContents}>등록하기</SubmitButton>
      </WrapperCanvas>
    </Wrapper>
  )
}
