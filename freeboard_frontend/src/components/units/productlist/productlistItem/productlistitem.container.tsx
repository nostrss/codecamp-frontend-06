import { useRouter } from 'next/router';
import ProductListItemUI from './productlistitem.presenter';

export default function ProductListItemContainer(props) {
  const router = useRouter();
  const onClickProductList = (data) => {
    router.push(`/usedmarket/product/${data}`);
  };

  return (
    <>
      <ProductListItemUI
        el={props.el}
        onClickProductList={onClickProductList}
      />
    </>
  );
}
