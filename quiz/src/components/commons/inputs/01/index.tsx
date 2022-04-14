import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IPropsInput {
  type: 'text' | 'password';
  placeholder: string;
  register: UseFormRegisterReturn;
}

const InputBar = styled.input`
  width: 400px;
  font-size: 20px;
`;

export default function Input01(props: IPropsInput) {
  return (
    <InputBar
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
