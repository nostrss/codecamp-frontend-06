// 상품 수정 페이지 시작

import { FETCH_PRODUCT } from '../../../../../src/components/units/product/product.queries';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import NewProductContainer from '../../../../../src/components/units/newproduct/newproduct.container';

export default function EditProduct() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { useditemId: router.query.id },
  });
  return <NewProductContainer isEdit={true} data={data} />;
}
