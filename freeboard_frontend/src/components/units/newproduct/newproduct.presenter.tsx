import * as p from './newproduct.style';
// import { IPostingUIProps } from './newproduct.type';
// import { Modal } from 'antd';
// import DaumPostcode from 'react-daum-postcode';
// import ImageUpload from '../../commons/uploadimg/uploadimg.conatiner';
// import { v4 as uuidv4 } from 'uuid';

export default function NewProductUI(props) {
  return (
    <p.Wrapper>
      <p.WrapperCanvas>
        <p.Title>
          상품 등록하기
          {/* {props.isEdit ? '수정' : '등록'} */}
        </p.Title>

        <p.ColumnWrapper>
          <p.InputLable>제목</p.InputLable>
          {/* <p.Warning hidden={props.isWarning.titleError}>
              제목을 입력해주세요.
            </p.Warning> */}
          <p.IntputText
          // id='title'
          // name='title'
          // placeholder='제목을 작성해주세요'
          // onChange={props.onChangeInputs}
          // defaultValue={props.originData?.data?.fetchBoard.title}
          ></p.IntputText>
          <p.InputLable>한줄요약</p.InputLable>
          <p.IntputText></p.IntputText>
          <p.InputLable>상품설명</p.InputLable>
          <p.InputContents></p.InputContents>
          <p.InputLable>판매가격</p.InputLable>
          <p.IntputText></p.IntputText>
          <p.InputLable>태그입력</p.InputLable>
          <p.IntputText></p.IntputText>
        </p.ColumnWrapper>

        <p.RowWrapper>
          <p.ColumnWrapper>
            <p.InputLable>거래위치</p.InputLable>
            <p.Map></p.Map>
          </p.ColumnWrapper>
          <p.ColumnWrapper>
            <p.InputLable>GPS</p.InputLable>
            <p.RowWrapper>
              <p.IntputText></p.IntputText>
              <p.LocationIcon src='/image/location.png' alt='' />

              <p.IntputText></p.IntputText>
            </p.RowWrapper>

            <p.InputLable>주소</p.InputLable>
            <p.InputAddress
            // id='isAddress'
            // readOnly
            // value={
            //   props.inputs.isAddress ||
            //   props.originData?.data?.fetchBoard.boardAddress?.address ||
            //   ''
            // }
            ></p.InputAddress>
            <p.IntputText
            // id='address2'
            // onChange={props.onChangeInputs}
            // defaultValue={
            //   props.originData?.data?.fetchBoard.boardAddress?.addressDetail
            // }
            ></p.IntputText>
          </p.ColumnWrapper>
        </p.RowWrapper>
        <p.UploadImageWrapper>
          {/* <ImageUpload
            setInputs={props.setInputs}
            inputs={props.inputs}
            onChangeFileUrls={props.onChangeFileUrls}
            fileUrls={props.fileUrls}
          />
          {props.fileUrls.map((el, index) => (
            <p.ImageThumbnail
              key={uuidv4()}
              src={
                el[index].startsWith('https', 0)
                  ? el
                  : `https://storage.googleapis.com/${el}`
              }
            />
          ))} */}
        </p.UploadImageWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>메인 사진 설정</p.InputLable>
            <p.RadioWrapper>
              <p.RadioItem>
                <input type='radio' name='mainset' />
                사진1
              </p.RadioItem>
              <p.RadioItem>
                <input type='radio' name='mainset' />
                사진2
              </p.RadioItem>
            </p.RadioWrapper>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.SubmitButton
        // onClick={props.isEdit ? props.updateButton : props.submitContents}
        >
          {/* {props.isEdit ? '수정' : '등록'}하기 */} 등록
        </p.SubmitButton>
      </p.WrapperCanvas>
    </p.Wrapper>
  );
}
