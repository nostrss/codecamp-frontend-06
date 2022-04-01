import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;
export const WriterInput = styled.input`
  border: 2px solid gray;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => (props.isActive ? 'white' : 'gray')};
`;
