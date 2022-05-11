import styled from '@emotion/styled';

export const WrappDivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
  border-top: 1px solid gray;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ItemImage = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 40px;
`;

export const DivFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  height: auto;
`;

interface IKeywordProps {
  isMatched: boolean;
}
export const ItemSpan = styled.span`
  width: auto;
  height: 36px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 0px;
  color: ${(props: IKeywordProps) => (props.isMatched ? 'red' : 'black')};
`;

export const ItemH4 = styled.h3`
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
`;

export const ItemH4Gray = styled.h3`
  width: 100%;
  height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
  color: #bdbdbd;
`;

export const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const IconImage = styled.img`
  width: 20px;
  height: auto;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const ItemH3Strong = styled.h3`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #000000;
`;
