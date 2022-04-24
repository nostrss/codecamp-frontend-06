import { useAuth } from '../../src/components/commons/hooks/useAuth';
import BestProductContainer from '../../src/components/units/productlist/bestproduct/bestproduct.container';
import ProductListContainer from '../../src/components/units/productlist/productlist.container';

export default function UsedMarket() {
  useAuth();
  return (
    <>
      <BestProductContainer />
      <ProductListContainer />
    </>
  );
}
