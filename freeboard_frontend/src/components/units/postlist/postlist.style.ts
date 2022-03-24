import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperCanvas = styled.div`
  width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;
  margin: 100px 0px;
  background: #ffffff;
`;

export const PageTitle = styled.h2`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  height: 42px;
`;

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

export const WrapperFlexRowBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const WrapperFlexColumn70= styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;
export const WrapperFlexColumn30= styled.div`
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

export const WrapperLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 30px;
  height: 100%;
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const WrapperSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 776px;
  height: 50px;
  padding: 0px 10px;
  background-color: #F2F2F2;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border : none;
  background-color: transparent;
`;

export const DatePeeker = styled.input`
  width: 120px;
  height: 100%;
  border : #BDBDBD;
  background-color: transparent;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: Black;
  border-radius: 10px;
  color: white;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 48px;
  text-align: center;
  color: #FFFFFF;

`;







export const WrapperTable = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 10% 50% 20% 20%;
  grid-template-rows: repeat(10, 50px);
  border : 1px solid black;
`;

export const WrapperTableHeader = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 10% 50% 20% 20%;
  grid-template-rows: repeat(1, 50px);
  border-top : 1px solid black;
  border-bottom: 1px solid #BDBDBD;
`;

export const WrapperTableBody = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 10% 50% 20% 20%;
  grid-template-rows: repeat(10, 50px);
  border-bottom : 1px solid black;
`;

export const HearderBox = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 48px;
text-align: center;
color: #000000;
`;


export const BodyBox = styled.div`
  border-bottom : 1px solid gray;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #4F4F4F;
`;

