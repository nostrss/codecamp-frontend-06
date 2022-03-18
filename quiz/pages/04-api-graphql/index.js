import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationProduct() {
  const [seller, setSeller] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemDetail, setItemDetail] = useState('')
  const [price, setPrice] = useState('')
  const [warning, setWaring] = useState('')
  const [response, setResponse] = useState('')

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const onChangeItemName = (event) => {
    setItemName(event.target.value)
  }

  const onChangeItemDetail = (event) => {
    setItemDetail(event.target.value)
  }

  const onChangePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    const inputIsEmpty =
      seller.length * itemName.length * itemDetail.length * price.length

    if (inputIsEmpty === 0) {
      setWaring('필수값이 누락되었습니다')
    } else {
      const data = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: itemName,
            detail: itemDetail,
            price: price,
          },
        },
      })
      setWaring('')
      console.log(data)
      setResponse(data)
      console.log(response.data.createProduct._id)
    }
  }

  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeItemName} />
      <br />
      상품설명: <input type="text" onChange={onChangeItemDetail} />
      <br />
      상품가격: <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>상품 등록하기</button>
      <div>{warning}</div>
      <div>{response.data.createProduct.message}</div>
      <div> 상품 ID는 </div>
      <div>{response.data.createProduct._id} 입니다 </div>
    </div>
  )
}
