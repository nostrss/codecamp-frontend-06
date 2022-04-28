import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PRODUCT, BUY_PRODUCT, PICK_TOGLE } from './product.queries';
import ProductUI from './product.presenter';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { productDataState } from '../../../commons/store';

export default function ProductContainer() {
  const router = useRouter();
  const [productData, setProductData] = useRecoilState(productDataState);

  // 작성된 컨텐츠 정보 불러오기
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { useditemId: router?.query.id },
  });
  console.log(data);

  const [buyProduct] = useMutation(BUY_PRODUCT);
  const [pickTogle] = useMutation(PICK_TOGLE);

  // 찜하기 버튼
  const onClickPickTogle = async () => {
    try {
      const result = await pickTogle({
        variables: {
          useditemId: router?.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCT,
            variables: { useditemId: router?.query.id },
          },
        ],
      });
      console.log(result);
      console.log('togle');
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 목록으로 이동하기 버튼
  const onClickMoveToList = () => {
    router.push(`/usedmarket`);
  };

  // 상품 수정하기 이동 버튼
  const onClickMoveUpdate = () => {
    setProductData(data);
    router.push(`/usedmarket/product/${router.query.id}/edit`);
  };

  // 구매하기 버튼
  const onClickByeProduct = async () => {
    try {
      const result = await buyProduct({
        variables: {
          useritemId: router?.query.id,
        },
      });
      console.log(result);
      Modal.success({
        content: '구매가 정상적으로 이루어졌습니다.',
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductUI
        data={data}
        onClickMoveUpdate={onClickMoveUpdate}
        onClickMoveToList={onClickMoveToList}
        onClickByeProduct={onClickByeProduct}
        onClickPickTogle={onClickPickTogle}
      />
    </>
  );
}
