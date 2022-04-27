import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PRODUCT, BUY_PRODUCT } from './product.queries';
import ProductUI from './product.presenter';
import { Modal } from 'antd';

export default function ProductContainer() {
  const router = useRouter();

  // 작성된 컨텐츠 정보 불러오기
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { useditemId: router?.query.id },
  });

  const [buyProduct] = useMutation(BUY_PRODUCT);

  const onClickMoveToList = () => {
    router.push(`/usedmarket`);
  };

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
        onClickMoveToList={onClickMoveToList}
        onClickByeProduct={onClickByeProduct}
      />
    </>
  );
}
