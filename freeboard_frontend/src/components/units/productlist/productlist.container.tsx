import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProductListUI from './productlist.presenter';
import { FETCH_PRODUCTS } from './productlist.queries';

export default function ProductListContainer() {
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS);
  const [isSold, setIsSold] = useState(false);
  const router = useRouter();
  const onClickMoveNew = () => {
    router.push('/usedmarket/new');
  };

  const onClickSold = () => {
    setIsSold(true);
  };

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

  console.log(isSold);

  return (
    <>
      <ProductListUI
        data={data}
        onLoadMore={onLoadMore}
        onClickMoveNew={onClickMoveNew}
        onClickSold={onClickSold}
        isSold={isSold}
      />
    </>
  );
}
