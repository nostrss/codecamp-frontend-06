import { useQuery } from '@apollo/client';
import ProductListUI from './productlist.presenter';
import { FETCH_PRODUCTS } from './productlist.queries';

export default function ProductListContainer() {
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductListUI data={data} onLoadMore={onLoadMore} />
    </>
  );
}
