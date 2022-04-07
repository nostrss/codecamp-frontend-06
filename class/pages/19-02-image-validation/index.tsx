import { ChangeEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../src/commons/types/generated/types';
import { Modal } from 'antd';
import { checkFileValidation } from '../../src/commons/libraries/validation';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <input type='file' onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
