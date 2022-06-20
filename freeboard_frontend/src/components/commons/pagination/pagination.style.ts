import styled from '@emotion/styled';
import { IPresenterToStyle } from './pagination.type';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const ActivePage = styled.span`
  font-size: ${(props: IPresenterToStyle) =>
    props.current === true ? '30px;' : '20px'};
  width: 40px;
  height: 40px;
  text-align: center;
`;
