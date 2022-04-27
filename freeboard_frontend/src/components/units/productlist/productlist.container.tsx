import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProductListUI from './productlist.presenter';
import { FETCH_PRODUCTS } from './productlist.queries';

export default function ProductListContainer() {
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS, {
    variables: {
      isSoldout,
    },
  });
  const router = useRouter();
  const onClickMoveNew = () => {
    router.push('/usedmarket/new');
  };

  const onClickSold = () => {
    setIsSoldout(true);
  };

  const onClickSell = () => {
    setIsSoldout(false);
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

  console.log(isSoldout);
  console.log(data);

  return (
    <>
      <ProductListUI
        data={data}
        onLoadMore={onLoadMore}
        onClickMoveNew={onClickMoveNew}
        onClickSold={onClickSold}
        isSoldout={isSoldout}
        onClickSell={onClickSell}
      />
    </>
  );
}
