import * as p from './posting.style';

import { IPostingUIProps } from './posting.type';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function PostingUI(props: IPostingUIProps) {
  return (
    <p.Wrapper>
      <p.WrapperCanvas>
        <p.Title>게시물 {props.isEdit ? '수정' : '등록'} </p.Title>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>작성자</p.InputLable>
            <p.IntputText
              name='name'
              placeholder='이름을 적어주세요'
              onChange={props.onChangeName}
              defaultValue={props.originData?.data?.fetchBoard.writer}
              readOnly={!!props.originData?.data?.fetchBoard.writer}
            ></p.IntputText>
            <p.Warning>{props.nameError}</p.Warning>
          </p.ColumnWrapperItem>
          <p.ColumnWrapperItem>
            <p.InputLable>비밀번호</p.InputLable>
            <p.IntputText
              type='password'
              placeholder='비밀번호를 입력해주세요'
              onChange={props.onChangePw}
            ></p.IntputText>
            <p.Warning>{props.passwordError}</p.Warning>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>제목</p.InputLable>
            <p.Warning>{props.titleError}</p.Warning>
            <p.IntputText
              name='title'
              placeholder='제목을 작성해주세요'
              onChange={props.onChangeTitle}
              defaultValue={props.originData?.data?.fetchBoard.title}
            ></p.IntputText>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>내용</p.InputLable>
            <p.Warning>{props.contentsError}</p.Warning>
            <p.InputContents
              name='contents'
              placeholder='내용을 작성해주세요'
              onChange={props.onChangeContents}
              defaultValue={props.originData?.data?.fetchBoard.contents}
            ></p.InputContents>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>주소</p.InputLable>
            <p.RowAddressWrap>
              <p.InputZipCode
                name='address'
                placeholder='07250'
                defaultValue={props?.isAddress.zonecode}
              ></p.InputZipCode>
              <p.ButtonZip onClick={props.showModal}>우편번호검색</p.ButtonZip>
              {props.isOpen && (
                <Modal
                  title='주소검색'
                  visible={props.isOpen}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </p.RowAddressWrap>
            <p.InputAddress
              defaultValue={props?.isAddress.address}
            ></p.InputAddress>
            <p.IntputText></p.IntputText>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>유튜브</p.InputLable>
            <p.IntputText
              name='youtube'
              placeholder='링크를 복사해주세요'
              onChange={props.onChangeYoutube}
            ></p.IntputText>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.UploadImageWrapper>
          <p.InputLable>사진 첨부</p.InputLable>
          <p.UploadButtonWrapper>
            <p.UploadButton></p.UploadButton>
            <p.UploadButton></p.UploadButton>
            <p.UploadButton></p.UploadButton>
          </p.UploadButtonWrapper>
        </p.UploadImageWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>메인 설정</p.InputLable>
            <p.RadioWrapper>
              <p.RadioItem>
                <input type='radio' name='mainset' />
                유튜브
              </p.RadioItem>
              <p.RadioItem>
                <input type='radio' name='mainset' />
                사진
              </p.RadioItem>
            </p.RadioWrapper>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.SubmitButton
          onClick={props.isEdit ? props.updateButton : props.submitContents}
        >
          {props.isEdit ? '수정' : '등록'}하기
        </p.SubmitButton>
        <Modal
          title='에러'
          visible={props.warning}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          {props.isError}
        </Modal>
      </p.WrapperCanvas>
    </p.Wrapper>
  );
}
