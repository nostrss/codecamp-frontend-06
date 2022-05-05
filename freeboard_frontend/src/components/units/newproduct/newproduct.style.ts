import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperCanvas = styled.div`
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

export const Title = styled.h2`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  color: #000000;
`;

export const RowWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
`;

export const ColumnWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const ColumnWrapperItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;
export const InputLable = styled.label`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin: 8px 0px;
`;
export const IntputText = styled.input`
  width: 100%;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px;
`;

export const InputContents = styled.textarea`
  width: 100%;
  height: 320px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px;
`;

export const RowAddressWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
`;

export const InputAddress = styled.input`
  width: 100%;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px;
  margin-bottom: 30px;
`;

export const UploadImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ImageThumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.button`
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

export const Warning = styled.div`
  padding: 5px;
  color: red;
  font-size: 13px;
`;

export const Map = styled.div`
  width: 380px;
  height: 250px;
  background-color: gray;
`;

export const LocationIcon = styled.img`
  width: 20px;
  height: auto;
`;

export const QuillWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  margin-bottom: 20px;
`;

export const ButtonZip = styled.button`
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

export const InputZipCode = styled.input`
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

export const ImageItempWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: auto;
  margin-right: 20px;
  margin-bottom: 20px;
`;
