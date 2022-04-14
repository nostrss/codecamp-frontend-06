import styled from '@emotion/styled';

interface IPropsButton {
  isActive?: boolean;
  title?: string;
}

const Button = styled.button`
  background-color: ${(props: IPropsButton) => (props.isActive ? 'blue' : '')};
`;

export default function Button01(props: IPropsButton) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
