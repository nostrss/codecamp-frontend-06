import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import ProductListUI from './productlist.presenter';
import { FETCH_PRODUCTS } from './productlist.queries';
import _ from 'lodash';

export default function ProductListContainer() {
  const [keyword, setKeyword] = useState('');
  // const [startDate, setStartDate] = useState(0);
  // const [endDate, setEndDate] = useState(0);
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

  // 검색어 감지 함수
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // 검색어 디바운스, 리패치 함수
  const getDebounce = _.debounce((searchKeyword) => {
    refetch({
      search: searchKeyword,
      page: 1,
    });
    setKeyword(searchKeyword);
  }, 200);

  // const onChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
  //   const date = new Date(event.target.value);
  //   const startUtc = Date.UTC(
  //     date.getUTCFullYear(),
  //     date.getUTCMonth(),
  //     date.getUTCDate()
  //   );
  //   setStartDate(startUtc);
  //   console.log(event.target.value);
  // };

  // const onChangeEnd = (event: ChangeEvent<HTMLInputElement>) => {
  //   const date = new Date(event.target.value);
  //   const endUtc = Date.UTC(
  //     date.getUTCFullYear(),
  //     date.getUTCMonth(),
  //     date.getUTCDate()
  //   );
  //   setEndDate(endUtc);
  //   console.log(event.target.value);
  // };

  // const onClickSearch = (event: MouseEvent<HTMLButtonElement>) => {
  //   if (event.target instanceof Element) {
  //     refetch({
  //       search: keyword,
  //       // page: 1,
  //       // startDate: startDate,
  //       // endDate: endDate,
  //     });
  //     // BoardsCount({
  //     //   search: keyword,
  //     //   startDate: startDate,
  //     //   endDate: endDate,
  //     // });
  //   }
  // };

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
        // onClickSearch={onClickSearch}
        // onChangeStart={onChangeStart}
        // onChangeEnd={onChangeEnd}
      />
    </>
  );
}
