import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  width: 1200px;
  height: auto;

  /* margin: 0px 100px; */
  padding-top: 20px;
  /* border-bottom: 1px solid lightgray; */
`;

export const FlexWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const FlexColWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 20px;
`;

export const ReplyImg = styled.img`
  width: 15px;
  height: 17px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
