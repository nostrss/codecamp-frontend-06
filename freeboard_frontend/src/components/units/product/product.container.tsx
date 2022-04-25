import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_PRODUCT } from './product.queries';
import ProductUI from './product.presenter';

export default function ProductContainer() {
  const router = useRouter();

  // 작성된 컨텐츠 정보 불러오기
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { useditemId: router?.query.id },
  });
  console.log(data);

  return (
    <>
      <ProductUI data={data} />
    </>
  );
}
