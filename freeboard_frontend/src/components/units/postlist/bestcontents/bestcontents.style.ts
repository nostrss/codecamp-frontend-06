import styled from '@emotion/styled';

export const WrapperBestContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 260px;
`;

export const BestContentsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const BestContentsImage = styled.img`
  width: 100%;
  height: 120px;
  background-color: gray;
  border-radius: 20px 20px 0px 0px;
`;

export const WrapperBestContentsSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 137px;
  padding: 0px 20px;
  border-radius: 0px 0px 20px 20px;
`;

export const BestContentsTitle = styled.p`
  width: 100%;
  height: 27px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 20px;
`;

export const WrapperFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const WrapperFlexColumn70 = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;
export const WrapperFlexColumn30 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const BestContentsName = styled.p`
  width: 100%;
  height: 24px;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin: 0px 0px 0px 5px;
`;

export const BestContentsDate = styled.p`
  width: 100%;
  height: auto;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`;

export const BestContentsLike = styled.p`
  width: 100%;
  height: auto;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;
