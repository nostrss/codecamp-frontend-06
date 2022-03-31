import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const MyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 20px;
`;

export const MyColumn = styled.div`
  width: 100px;
  font-size: 16px;
`;
export const MyTitle = styled.div`
  width: 100%;
  font-size: 16px;
`;

export const ActivePage = styled.span`
  font-size: ${(props) => (props.current === true ? '30px;' : '20px')};
`;
