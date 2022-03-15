import styled from '@emotion/styled';

export default function Home() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const WrapperCanvas = styled.div`
    width: 1200px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 100px;
    margin: 100px 0px;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  `;

  const Title = styled.h2`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    color: #000000;
  `;

  const RowWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
  `;

  const ColumnWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
  `;

  const ColumnWrapperItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 24px;
  `;
  const InputLable = styled.label`
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 8px 0px;
  `;
  const IntputText = styled.input`
    width: 100%;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    padding: 14px;
  `;

  const InputContents = styled.input`
    width: 100%;
    height: 480px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    padding: 14px;
  `;

  const RowAddressWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 0px;
  `;
  const InputZipCode = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #bdbdbd;
    text-align: center;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
    margin-right: 20px;
  `;

  const ButtonZip = styled.button`
    width: 124px;
    height: 52px;
    background-color: black;
    color: white;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  `;

  const InputAddress = styled.input`
    width: 100%;
    height: 52px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
    padding: 14px;
    margin-bottom: 30px;
  `;

  const UploadImageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;
  const UploadButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const UploadButton = styled.button`
    color: white;
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    margin-right: 24px;
  `;

  const RadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const RadioItem = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const SubmitButton = styled.button`
    width: 179px;
    height: 52px;
    background-color: #ffd600;
    border: none;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    text-align: center;

    color: #000000;
  `;
  // 변수 첫글자는 대문자(파스칼표기법?)

  return (
    // html 쓰는곳
    <Wrapper>
      <WrapperCanvas>
        <Title>게시물 등록</Title>
        <RowWrapper>
          <ColumnWrapperItem>
            <InputLable for="name">작성자</InputLable>
            <IntputText
              name="name"
              placeholder="이름을 적어주세요"
            ></IntputText>
          </ColumnWrapperItem>
          <ColumnWrapperItem>
            <InputLable for="pw">비밀번호</InputLable>
            <IntputText
              name="pw"
              placeholder="비밀번호를 입력해주세요"
            ></IntputText>
          </ColumnWrapperItem>
        </RowWrapper>
        <ColumnWrapper>
          <ColumnWrapperItem>
            <InputLable for="title">제목</InputLable>
            <IntputText
              name="title"
              placeholder="제목을 작성해주세요"
            ></IntputText>
          </ColumnWrapperItem>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnWrapperItem>
            <InputLable for="contents">내용</InputLable>
            <InputContents
              name="contents"
              placeholder="내용을 작성해주세요"
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
        <SubmitButton>등록하기</SubmitButton>
      </WrapperCanvas>
    </Wrapper>
  );
}
