import { useMutation, gql } from '@apollo/client';
import { Modal } from 'antd';
import { ChangeEvent, useRef, useState } from 'react';
import { checkFileValidation } from '../../../commons/libraries/validation';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../commons/types/generated/types';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function RestGetPage() {
  const fileRef = useRef<HTMLInputElement>(null);

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

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div
        style={{ width: '150px', height: '150px', backgroundColor: 'gray' }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: 'none' }}
        type='file'
        onChange={onChangeFile}
        ref={fileRef}
      />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!</button>
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
