import { useQuery } from '@apollo/client';
import BestProductUI from './bestproduct.presenter';
import { FETCH_BEST_PRODUCT } from './bestproduct.queries';

export default function BestProductContainer() {
  const { data } = useQuery(FETCH_BEST_PRODUCT);

  return (
    <>
      <BestProductUI data={data} />
    </>
  );
}
