import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import ProductListUI from './productlist.presenter';
import { FETCH_PRODUCTS } from './productlist.queries';
import _ from 'lodash';

export default function ProductListContainer() {
  const [keyword, setKeyword] = useState('');
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, fetchMore, refetch } = useQuery(FETCH_PRODUCTS, {
    variables: {
      isSoldout,
    },
  });
  const router = useRouter();

  // 상품 등록하기 버튼
  const onClickMoveNew = () => {
    router.push('/usedmarket/new');
  };

  // 판매중 상품 탭 클릭

  const onClickSold = () => {
    setIsSoldout(true);
  };

  // 판매된 상품 탭 클릭
  const onClickSell = () => {
    setIsSoldout(false);
  };

  // infinite scroll onLoadMore 함수
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // @ts-ignore
        if (!fetchMoreResult?.fetchUseditems)
          // @ts-ignore
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            // @ts-ignore
            ...prev.fetchUseditems,
            // @ts-ignore
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  // 검색어 감지 함수
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // 검색어 디바운스, 리패치 함수

  const getDebounce = _.debounce((searchKeyword) => {
    refetch({
      // @ts-ignore
      search: searchKeyword,
      page: 1,
    });
    setKeyword(searchKeyword);
  }, 200);

  return (
    <>
      <ProductListUI
        data={data}
        keyword={keyword}
        onChangeSearch={onChangeSearch}
        onLoadMore={onLoadMore}
        onClickMoveNew={onClickMoveNew}
        onClickSold={onClickSold}
        isSoldout={isSoldout}
        onClickSell={onClickSell}
      />
    </>
  );
}
