import * as p from './posting.style';
import { IPostingUIProps } from './posting.type';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import ImageUpload from '../../commons/uploadimg/uploadimg.conatiner';
import { v4 as uuidv4 } from 'uuid';

export default function PostingUI(props: IPostingUIProps) {
  return (
    <p.Wrapper>
      <p.WrapperCanvas>
        <p.Title>게시물 {props.isEdit ? '수정' : '등록'} </p.Title>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>작성자</p.InputLable>
            <p.IntputText
              id='name'
              placeholder='이름을 적어주세요'
              onChange={props.onChangeInputs}
              defaultValue={props.originData?.data?.fetchBoard.writer}
              readOnly={!!props.originData?.data?.fetchBoard.writer}
            ></p.IntputText>
            <p.Warning hidden={props.isWarning.nameError}>
              이름은 필수항목입니다.
            </p.Warning>
          </p.ColumnWrapperItem>
          <p.ColumnWrapperItem>
            <p.InputLable>비밀번호</p.InputLable>
            <p.IntputText
              id='password'
              type='password'
              placeholder='비밀번호를 입력해주세요'
              onChange={props.onChangeInputs}
            ></p.IntputText>
            <p.Warning hidden={props.isWarning.passwordError}>
              비밀번호는 필수항목입니다.
            </p.Warning>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>제목</p.InputLable>
            <p.Warning hidden={props.isWarning.titleError}>
              제목을 입력해주세요.
            </p.Warning>
            <p.IntputText
              id='title'
              name='title'
              placeholder='제목을 작성해주세요'
              onChange={props.onChangeInputs}
              defaultValue={props.originData?.data?.fetchBoard.title}
            ></p.IntputText>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>내용</p.InputLable>
            <p.Warning hidden={props.isWarning.contentsError}>
              컨텐츠를 입력해주세요
            </p.Warning>
            <p.InputContents
              id='contents'
              placeholder='내용을 작성해주세요'
              onChange={props.onChangeInputs}
              defaultValue={props.originData?.data?.fetchBoard.contents}
            />
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>주소</p.InputLable>
            <p.RowAddressWrap>
              <p.InputZipCode
                id='zipcode'
                name='address'
                placeholder='07250'
                readOnly
                value={
                  props.inputs.zipcode ||
                  props.originData?.data?.fetchBoard.boardAddress?.zipcode ||
                  ''
                }
                onChange={props.onChangeInputs}
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
              id='isAddress'
              readOnly
              value={
                props.inputs.isAddress ||
                props.originData?.data?.fetchBoard.boardAddress?.address ||
                ''
              }
            ></p.InputAddress>
            <p.IntputText
              id='address2'
              onChange={props.onChangeInputs}
              defaultValue={
                props.originData?.data?.fetchBoard.boardAddress?.addressDetail
              }
            ></p.IntputText>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.RowWrapper>
          <p.ColumnWrapperItem>
            <p.InputLable>유튜브</p.InputLable>
            <p.IntputText
              id='youtube'
              name='youtube'
              placeholder='링크를 복사해주세요'
              onChange={props.onChangeInputs}
              defaultValue={props.originData?.data?.fetchBoard.youtubeUrl}
            ></p.IntputText>
          </p.ColumnWrapperItem>
        </p.RowWrapper>
        <p.UploadImageWrapper>
          <ImageUpload
            setInputs={props.setInputs}
            inputs={props.inputs}
            onChangeFileUrls={props.onChangeFileUrls}
            fileUrls={props.fileUrls}
          />
          {props.fileUrls?.map((el, index) => (
            <p.ImageThumbnail
              key={uuidv4()}
              src={
                el[index]?.startsWith('https', 0)
                  ? el
                  : `https://storage.googleapis.com/${el}`
              }
            />
          ))}
        </p.UploadImageWrapper>

        <p.UploadImageWrapper>
          <ImageUpload
            setInputs={props.setInputs}
            inputs={props.inputs}
            onChangeFileUrls={props.onChangeFileUrls}
            fileUrls={props.fileUrls}
          />
          {props.fileUrls?.map((el, index) => (
            <video
              style={{ width: '200', height: '200' }}
              key={uuidv4()}
              controls
              src={
                el[index]?.startsWith('https', 0)
                  ? el
                  : `https://storage.googleapis.com/${el}`
              }
            ></video>
          ))}
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
      </p.WrapperCanvas>
    </p.Wrapper>
  );
}
