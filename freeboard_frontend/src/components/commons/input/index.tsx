import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IPropsInput {
  type: 'text' | 'password';
  register: UseFormRegisterReturn;
  placeholder: string;
  id: string;
  required: boolean;
}

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 1px solid black;
  border-radius: 16px;
  font-size: 16px;
  padding: 20px 16px;
`;

export default function Input01(props: IPropsInput) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      id={props.id}
      required={props.required}
    />
  );
}
