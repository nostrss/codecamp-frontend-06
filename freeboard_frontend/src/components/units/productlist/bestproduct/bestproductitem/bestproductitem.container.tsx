import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BestProductItemUI from './bestproductitem.presenter';

export default function BestProductItemContainer(props) {
  const router = useRouter();

  // 오늘 본 상품, 로컬 스토리지에 있는 이미 오늘 본 상품 불러오기,
  const [isToday, setIsToday] = useState([]);
  const DATE = new Date().toISOString().slice(0, 10);
  useEffect(() => {
    const already = JSON.parse(sessionStorage.getItem(DATE) || '[]');
    setIsToday(already);
  }, []);

  const onClickBestProduct = (productid) => {
    router.push(`/usedmarket/product/${productid}`);
    // 클릭한 상품을 위에서 불러온 이미 오늘 본 상품에 더하기
    // 중복 상품은 제거
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
      <BestProductItemUI
        el={props.el}
        onClickBestProduct={onClickBestProduct}
      />
    </>
  );
}
