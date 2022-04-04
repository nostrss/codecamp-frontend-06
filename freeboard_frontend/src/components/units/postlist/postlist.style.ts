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
  padding: 50px 0px 20px 0px;
  margin: 0px 0px;
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

export const WrapperFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
  background-color: #f2f2f2;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
`;

export const DatePeeker = styled.input`
  width: 120px;
  height: 100%;
  border: #bdbdbd;
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
  color: #ffffff;
`;

export const WrapperTable = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 10% 50% 20% 20%;
  grid-template-rows: repeat(10, 50px);
  border: 1px solid black;
`;

export const WrapperTableHeader = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 10% 50% 20% 20%;
  grid-template-rows: repeat(1, 50px);
  border-top: 1px solid black;
  border-bottom: 1px solid #bdbdbd;
`;

export const WrapperTableBody = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 10% 50% 20% 20%;
  grid-template-rows: repeat(10, 50px);
  border-bottom: 1px solid black;
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
  border-bottom: 1px solid gray;
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  color: #4f4f4f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WrapperButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 20px 0px;
`;
