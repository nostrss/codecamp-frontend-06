import styled from '@emotion/styled';

interface IProps {
  isActive: boolean;
}

interface IPropsButton {
  isActive: boolean;
  title: string;
}
const Button = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? 'yellow' : '')};
`;

export default function Button01(props: IPropsButton) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
