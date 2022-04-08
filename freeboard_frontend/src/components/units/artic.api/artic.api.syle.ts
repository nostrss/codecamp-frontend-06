import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 7000px;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;

export const ArticItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: auto;
  border-radius: 15px;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const ArticImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0px 0px;
`;

export const ArticTitle = styled.div`
  width: 100%;
  font-size: 14px;
  padding: 5px;
`;

export const ArticText = styled.div`
  width: 100%;
  font-size: 11px;
  padding: 3px 5px;
`;
