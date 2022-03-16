import { useState } from 'react';
import { Wrapper, WrapperCanvas, Title, RowWrapper, ColumnWrapper, ColumnWrapperItem, InputLable, IntputText, InputContents,RowAddressWrap, InputZipCode, ButtonZip, InputAddress,UploadImageWrapper, UploadButtonWrapper, UploadButton, RadioWrapper,RadioItem, SubmitButton, Warning } from '../../../styles/emotion';



export default function Home() {

  const [name, setName]= useState('')
  const [nameError, setNameError] = useState('')
  const [password, setPassword]= useState('')
  const [passwordError, setPasswordError] = useState('')
  const [title, setTitle]= useState('')
  const [titleError, setTitleError] = useState('')
  const [contents, setContents]= useState('')
  const [contentsError, setContentsError] = useState('')





  const onChangeName = (event) => {
    setName(event.target.value)
    if(name !== ''){
      setNameError('')
    }
  }

  const onChangePw = (event) => {
    setPassword(event.target.value)
    if(password !== ''){
      setPasswordError('')
    }
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if(title !== ''){
      setTitleError('')
    }
  }


  const onChangeContents = (event) => {
    setContents(event.target.value)
    if(contents !== ''){
      setContentsError('')
    }
  }






  const submitContents = () => {
    if( name === '' ){
      setNameError('name is empty')
    }

    if( password === '' ){
      setPasswordError('password is empty')
    }

    if( title === '' ){
      setTitleError('Title is empty')
    }

    if( contents === '' ){
      setContentsError('contents is empty')
    }



  }

  return (
    <Wrapper>
      <WrapperCanvas>
        <Title>게시물 등록</Title>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="name">작성자</InputLable>
            <IntputText
              name="name"   
              placeholder="이름을 적어주세요" onChange={onChangeName}
            ></IntputText>
            <Warning>{nameError}</Warning>
          </ColumnWrapperItem>
          <ColumnWrapperItem>
            <InputLable for="pw">비밀번호</InputLable>
            <IntputText
              name="pw"
              placeholder="비밀번호를 입력해주세요" onChange={onChangePw}
            ></IntputText>
             <Warning>{passwordError}</Warning>
          </ColumnWrapperItem>
        </RowWrapper>
        <ColumnWrapper>
          <ColumnWrapperItem>
            <InputLable for="title">제목</InputLable>
            <Warning>{titleError}</Warning>
            <IntputText
              name="title"
              placeholder="제목을 작성해주세요"
              onChange={onChangeTitle}
            ></IntputText>
          </ColumnWrapperItem>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnWrapperItem>
            <InputLable for="contents">내용</InputLable>
            <Warning>{contentsError}</Warning>
            <InputContents
              name="contents"
              placeholder="내용을 작성해주세요"
              onChange={onChangeContents}
            ></InputContents>
          </ColumnWrapperItem>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnWrapperItem>
            <InputLable for="address">주소</InputLable>
            <RowAddressWrap>
              <InputZipCode name="address" placeholder="07250"></InputZipCode>
              <ButtonZip>우편번호검색</ButtonZip>
            </RowAddressWrap>
            <InputAddress></InputAddress>
            <IntputText></IntputText>
          </ColumnWrapperItem>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnWrapperItem>
            <InputLable for="youtube">유튜브</InputLable>
            <IntputText
              name="youtube"
              placeholder="링크를 복사해주세요"
            ></IntputText>
          </ColumnWrapperItem>
        </ColumnWrapper>
        <UploadImageWrapper>
          <InputLable>사진 첨부</InputLable>
          <UploadButtonWrapper>
            <UploadButton></UploadButton>
            <UploadButton></UploadButton>
            <UploadButton></UploadButton>
          </UploadButtonWrapper>
        </UploadImageWrapper>
        <ColumnWrapper>
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
        </ColumnWrapper>
        <SubmitButton onClick={submitContents}>등록하기</SubmitButton>
      </WrapperCanvas>
    </Wrapper>
  );
}
