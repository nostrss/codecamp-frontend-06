import { useQuery } from '@apollo/client';
import ProductListUI from './productlist.presenter';
import { FETCH_PRODUCTS } from './productlist.queries';

export default function ProductListContainer() {
  const { data } = useQuery(FETCH_PRODUCTS);
  console.log(data?.fetchUseditems);
  return (
    <>
      <ProductListUI data={data} />
    </>
  );
}
