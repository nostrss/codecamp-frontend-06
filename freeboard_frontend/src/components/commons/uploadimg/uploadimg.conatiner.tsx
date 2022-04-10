import { useMutation, gql } from '@apollo/client';
import { ChangeEvent, useRef, useState } from 'react';
import { checkFileValidation } from '../../../commons/libraries/validation';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../commons/types/generated/types';
import styled from '@emotion/styled';
import { Modal } from 'antd';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const UploadImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UploadButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadButton = styled.button`
  color: white;
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  margin-right: 24px;
`;

export const ImageThumbnail = styled.img`
  width: 100px;
  height: auto;
`;

export default function ImageUpload(props: {
  setInputs: (arg0: any) => void;
  inputs: any;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url);
      props.setInputs({
        ...props.inputs,
        images: `https://storage.googleapis.com/${result.data?.uploadFile.url}`,
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <UploadImageWrapper>
      <UploadButton onClick={onClickImage}>+</UploadButton>
      <input
        id='images'
        style={{ display: 'none' }}
        type='file'
        onChange={onChangeFile}
        ref={fileRef}
      />

      <ImageThumbnail
        src={imageUrl ? `https://storage.googleapis.com/${imageUrl}` : ''}
      />
    </UploadImageWrapper>
  );
}
