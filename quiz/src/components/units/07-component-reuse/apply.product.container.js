//상품 등록, 수정 컴포넌트
import ApplyProductUI from './apply.product.presenter'
import { useState } from 'react'
import { useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './apply.product.query'

export default function ApplyProduct(props) {
  const [seller, setSeller] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemDetail, setItemDetail] = useState('')
  const [price, setPrice] = useState('')
  const [warning, setWaring] = useState('')
  const [response, setResponse] = useState('')
  const router = useRouter() 
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

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


  const onClickMake = async () => {
      const result  = await createProduct({
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
    setResponse(result)
  
        router.push(`/07-component-reuse/${result.data.createProduct._id}/`)
    alert(" 상품등록 성공, 상세페이지로 이동합니다")
    console.log(router.query)
    console.log(result.data)
      }

  

  const onClickUpdate = async () => {
    
    console.log('click update')
    console.log(router.query.productid)

        const { data } = await updateProduct({
          variables: {
            productId: String(router.query.productid),
            updateProductInput: {
              name: itemName,
              detail: itemDetail,
              price: Number(price)
            },
          },
        })
        setWaring('')
        setResponse(data)
        router.push(`/07-component-reuse/${router.query.productid}/`)
        alert(" 상품 수정 성공, 상세페이지로 이동합니다")
    }





  return (
  <ApplyProductUI
      onChangeSeller={onChangeSeller}
      onChangeItemName={onChangeItemName}
      onChangeItemDetail={onChangeItemDetail}
      onChangePrice={onChangePrice}
      onClickMake={onClickMake}
      onClickUpdate={onClickUpdate}
      warning={warning}
      isEdit={props.isEdit}
    />
  )
}
