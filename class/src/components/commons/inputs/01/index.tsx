import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IPropsInput {
  type: 'text' | 'password';
  register: UseFormRegisterReturn;
}

const Input = styled.input``;

export default function Input01(props: IPropsInput) {
  return <Input type={props.type} {...props.register} />;
}
