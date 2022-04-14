import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

const TextArea = styled.textarea`
  width: 600px;
  height: auto;
  font-size: 20px;
`;

interface IPropsTextArea {
  placeholder: string;
  register: UseFormRegisterReturn;
}

export default function Textarea01(props: IPropsTextArea) {
  return <TextArea placeholder={props.placeholder} {...props.register} />;
}
