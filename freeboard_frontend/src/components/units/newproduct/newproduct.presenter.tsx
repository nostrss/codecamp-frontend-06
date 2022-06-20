import ImageUpload from '../../commons/uploadimg/uploadimg.conatiner';
import * as p from './newproduct.style';
import { v4 as uuidv4 } from 'uuid';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import SearchMap from '../../commons/map/searchmap';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function NewProductUI(props: any) {
  return (
    <p.Wrapper>
      <p.WrapperCanvas>
        <p.Title>{props.isEdit ? '상품 수정 하기' : '상품 등록 하기'}</p.Title>

        <p.ColumnWrapper>
          <p.InputLable>상품명</p.InputLable>
          {/* <p.Warning hidden={props.isWarning.titleError}>
              제목을 입력해주세요.
            </p.Warning> */}
          <p.IntputText
            id='name'
            onChange={props.onChangeInputs}
            placeholder='상품명을 입력해주세요'
            defaultValue={props.data?.fetchUseditem.name}
          ></p.IntputText>
          <p.InputLable id='remarks' onChange={props.onChangeInputs}>
            한줄요약
          </p.InputLable>
          <p.IntputText
            id='remarks'
            onChange={props.onChangeInputs}
            placeholder='한줄 설명을 입력해주세요'
            defaultValue={props.data?.fetchUseditem.remarks}
          ></p.IntputText>

          <p.InputLable>상품설명</p.InputLable>
          <p.QuillWrapper>
            {props.isEdit && props.data?.fetchUseditem?.contents && (
              <ReactQuill
                style={{ width: '100%', height: 'auto' }}
                onChange={props.onChangeContents}
                placeholder='상품을 설명해주세요'
                defaultValue={props.data?.fetchUseditem.contents}
              />
            )}

            {!props.isEdit && (
              <ReactQuill
                style={{ width: '100%', height: 'auto' }}
                onChange={props.onChangeContents}
                placeholder='상품을 설명해주세요'
              />
            )}
          </p.QuillWrapper>

          <p.InputLable>판매가격</p.InputLable>
          <p.IntputText
            id='price'
            onChange={props.onChangeInputs}
            placeholder='판매가격을 입력해주세요'
            defaultValue={props.data?.fetchUseditem.price}
          ></p.IntputText>
          <p.InputLable>태그입력</p.InputLable>
          <p.IntputText
            id='tags'
            onChange={props.onChangeTags}
            placeholder='#태그 #태그 #태그'
            defaultValue={props.data?.fetchUseditem.tags.join(' ')}
          />
        </p.ColumnWrapper>
        <p.RowWrapper>
          <p.ColumnWrapper>
            <p.InputLable>거래위치</p.InputLable>
            <p.Map>
              {typeof window !== 'undefined' ? (
                <SearchMap
                  id='map'
                  isAddress={
                    props.isAddress?.address ||
                    props.data?.fetchUseditem.useditemAddress.address ||
                    ''
                  }
                  setIsGps={props.setIsGps}
                />
              ) : (
                ''
              )}
            </p.Map>
          </p.ColumnWrapper>

          <p.ColumnWrapper>
            <p.InputLable>GPS</p.InputLable>
            <p.RowWrapper>
              <p.IntputText
                id='lng'
                readOnly
                value={
                  props.isGps?.lng ||
                  props.data?.fetchUseditem?.useditemAddress.lng ||
                  ''
                }
              />
              <p.IntputText
                id='lat'
                readOnly
                value={
                  props.isGps?.lat ||
                  props.data?.fetchUseditem?.useditemAddress.lat ||
                  ''
                }
              />
            </p.RowWrapper>

            <p.RowWrapper>
              <p.InputZipCode
                id='zipcode'
                name='address'
                placeholder='07250'
                readOnly
                value={
                  props.isAddress?.zipcode ||
                  props.data?.fetchUseditem?.useditemAddress.zipcode ||
                  ''
                }
                onChange={props.onChangeAddress}
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
            </p.RowWrapper>
            <p.InputAddress
              id='address'
              onChange={props.onChangeAddress}
              readOnly
              value={
                props.isAddress?.address ||
                props.data?.fetchUseditem?.useditemAddress.address ||
                ''
              }
            />
            <p.IntputText
              id='addressDetail'
              onChange={props.onChangeAddress}
              defaultValue={
                props.data?.fetchUseditem?.useditemAddress.addressDetail
              }
            ></p.IntputText>
          </p.ColumnWrapper>
        </p.RowWrapper>

        <p.UploadImageWrapper>
          <ImageUpload
            setInputs={props.setInputs}
            inputs={props.inputs}
            onChangeFileUrls={props.onChangeFileUrls}
            fileUrls={props.fileUrls}
          />
          {props.fileUrls?.map((el: any, index: any) => (
            <>
              <p.ImageItempWrap>
                <p.ImageThumbnail
                  key={uuidv4()}
                  src={
                    el.startsWith('https', 0)
                      ? el
                      : `https://storage.googleapis.com/${el}`
                  }
                />
                <button onClick={props.onClickImageDelete(index)}>삭제</button>
              </p.ImageItempWrap>
            </>
          ))}
        </p.UploadImageWrapper>

        <p.SubmitButton
          onClick={
            props.isEdit ? props.onClickUpdateComplete : props.onClickCreateItem
          }
        >
          {props.isEdit ? '수정하기' : '등록하기'}
        </p.SubmitButton>
      </p.WrapperCanvas>
    </p.Wrapper>
  );
}
