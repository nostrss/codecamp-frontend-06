import styled from '@emotion/styled';
import { RowWrapper } from '../posting/posting.style';

export const Profileimage = styled.img`
  width: 50px;
  height: 50px;
`;

export const WrapComment = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  display: flex;
  border-top: 1px solid #bdbdbd;
`;

export const CommentInfo = styled(RowWrapper)`
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-bottom: 20px;
`;

export const CommentInfoInput = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding: 14px 20px;
  font-size: 16px;
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding-right: 10px;
`;
export const TextareaWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  border: 1px solid gray;
  padding: 20px 20px;
`;
export const CommentContents = styled.textarea`
  width: 100%;
  height: 160px;
  border: none;
  resize: none;
`;

export const CountTextLength = styled.p`
  width: 43px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;
export const SubmitComment = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 91px;
  height: 52px;
  background-color: #000000;
  color: white;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-bottom: 1px gray solid;
  padding: 20px 0px;
`;
export const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const RowSpaceBetween = styled(RowItems)`
  justify-content: space-between;
`;
export const RowFlexStart = styled(RowItems)`
  justify-content: flex-start;
`;
export const RowAlignCenter = styled(RowItems)`
  align-items: center;
`;

export const CommentName = styled.span`
  display: inline-block;
  width: auto;
  height: 24px;
  vertical-align: bottom;
  font-size: 16px;
  line-height: 24px;
  padding-right: 20px;
`;

export const ColumnItems = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
`;
export const UserComments = styled.p`
  width: 100%;
  height: auto;
  color: #4f4f4f;
`;
export const UserCommentsDate = styled.p`
  width: 100%;
  height: auto;
  font-size: 12px;
  color: #bdbdbd;
`;
export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding-right: 10px;
`;
