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
  width: 100px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const UploadButton = styled.button`
  color: white;
  width: 100px;
  height: 100px;
  background: #bdbdbd;
`;

export default function ImageUpload(props: {
  setInputs: (arg0: any) => void;
  inputs: any;
  onChangeFileUrls: (fileUrl: string) => void;
  fileUrls: Array<string>;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [, setImageUrl] = useState<string | undefined>('');
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
      props.onChangeFileUrls(String(result.data?.uploadFile.url));
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
    </UploadImageWrapper>
  );
}
