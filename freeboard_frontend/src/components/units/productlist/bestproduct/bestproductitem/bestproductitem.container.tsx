import { useRouter } from 'next/router';
import BestProductItemUI from './bestproductitem.presenter';

export default function BestProductItemContainer(props) {
  const router = useRouter();

  const onClickBestProduct = (data) => {
    router.push(`/usedmarket/product/${data}`);
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
