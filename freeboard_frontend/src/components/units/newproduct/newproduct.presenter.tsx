import ImageUpload from '../../commons/uploadimg/uploadimg.conatiner';
import * as p from './newproduct.style';
// import { IPostingUIProps } from './newproduct.type';
// import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import KakaoMapPage from '../../commons/map';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function NewProductUI(props) {
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
          <ReactQuill
            style={{ height: '200px' }}
            // id='contents'
            onChange={props.onChangeContents}
            placeholder='상품을 설명해주세요'
            defaultValue={props.data?.fetchUseditem.contents.replace(
              /(<([^>]+)>)/gi,
              ''
            )}
          />
          {/* <p.InputContents
            id='contents'
            onChange={props.onChangeInputs}
            placeholder='상품을 설명해주세요'
          ></p.InputContents> */}

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
              <KakaoMapPage
                mapfixed={false}
                setIsAddress={props.setIsAddress}
              ></KakaoMapPage>
            </p.Map>
          </p.ColumnWrapper>
          <p.ColumnWrapper>
            <p.InputLable>GPS</p.InputLable>
            <p.RowWrapper>
              <p.IntputText
                id='lng'
                onChange={props.onChangeAddress}
                readOnly
                value={props.isAddress?.lng}
              />
              <p.LocationIcon src='/image/location.png' alt='' />
              <p.IntputText
                id='lat'
                onChange={props.onChangeAddress}
                readOnly
                value={props.isAddress?.lat}
              />
            </p.RowWrapper>
            <p.InputLable>주소</p.InputLable>
            <p.InputAddress
              id='address'
              onChange={props.onChangeAddress}
              readOnly
              value={props.isAddress?.address}
            />
            <p.IntputText
              id='addressDetail'
              onChange={props.onChangeAddress}
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
          {props.fileUrls.map((el, index) => (
            <p.ImageThumbnail
              key={uuidv4()}
              src={
                el[index].startsWith('https', 0)
                  ? el
                  : `https://storage.googleapis.com/${el}`
              }
            />
          ))}
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
