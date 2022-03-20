import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

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
  const router = useRouter() 

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
      try {
        const { data } = await createProduct({
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
        setResponse(data)
        router.push(`/05-create-product/${response.createProduct._id}`)
        alert(" 상품등록 성공, 상세페이지로 이동합니다")
      } catch (error) {
        alert(`상품등록에 실패하였습니다. 다시 시도하여주세요
        에러메시지 : ${error.message}`)
      }
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
    </div>
  )
}
