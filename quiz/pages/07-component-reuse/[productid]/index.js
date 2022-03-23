//상품상세페이지
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

export default function productDetail() {
  const router = useRouter()
  console.log(router.query)

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productid },
  })
  console.log(router.query)
  console.log(data)

  const onClickMove = () => {
    router.push(`/07-component-reuse/${router.query.productid}/edit`)
  }

  return (
    <div>
      <div> 상품명 : {data? data.fetchProduct.name : 'Loading' }</div>
      <div> 상품설명 : {data? data.fetchProduct.detail : 'Loading'}</div>
      <div> 상품가격: {data? data.fetchProduct.price : 'Loading'}</div>
      <div> 판매자 : {data? data.fetchProduct.seller : 'Loading'}</div>
      <div> 상품등록일 : {data ? data.fetchProduct.createdAt : 'Loading'}</div>
      <button onClick={onClickMove}>상품수정하러가기</button>
    </div>
  )
}
