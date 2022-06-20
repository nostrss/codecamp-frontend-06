import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IBoard } from '../../../../commons/types/generated/types';
import ProductListItemUI from './productlistitem.presenter';

export default function ProductListItemContainer(props: any) {
  const router = useRouter();

  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);

  // 오늘 본 상품, 로컬 스토리지에 있는 이미 오늘 본 상품 불러오기,

  useEffect(() => {
    const already = JSON.parse(sessionStorage.getItem(DATE) || '[]');
    setIsToday(already);
  }, []);

  const onClickProductList = (productid: string) => {
    router.push(`/usedmarket/product/${productid}`);

    const today = JSON.parse(sessionStorage.getItem(DATE) || '[]');
    const tmp = isToday.filter((item: IBoard) => item._id === props.el._id);
    if (tmp.length === 1) {
      return;
    }
    const { __typename, ...rest } = props.el;
    today.push(rest);
    sessionStorage.setItem(DATE, JSON.stringify(today));
    setIsToday(today);
  };

  return (
    <>
      <ProductListItemUI
        keyword={props.keyword}
        el={props.el}
        onClickProductList={onClickProductList}
      />
    </>
  );
}
