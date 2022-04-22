import { useAuth } from '../../src/components/commons/hooks/useAuth';
import ProductListContainer from '../../src/components/units/productlist/productlist.container';

export default function UsedMarket() {
  useAuth();
  return <ProductListContainer />;
}
