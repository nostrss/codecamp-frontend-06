import { useAuth } from '../../src/components/commons/hooks/useAuth';
import BestProductContainer from '../../src/components/units/productlist/bestproduct/bestproduct.container';
import ProductListContainer from '../../src/components/units/productlist/productlist.container';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PageTitle = styled.h2`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  height: 42px;
`;

export default function UsedMarket() {
  useAuth();
  return (
    <>
      <Wrapper>
        <PageTitle>베스트 상품</PageTitle>
      </Wrapper>
      <BestProductContainer />
      <ProductListContainer />
    </>
  );
}
