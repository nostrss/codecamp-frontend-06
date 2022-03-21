import { useQuery, } from '@apollo/client'
import { useRouter } from 'next/router'
import DetailUI from './Detail.Presenter'
import { FETCH_BOARD } from './Detail.queries'

export default function DetailContainer() {
  const router = useRouter()
  console.log(router)


  Number(router.query.aaa) //83013
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.aaa) },
  })

  console.log(data)

  return (
    <DetailUI
    data={data}
    />
      

  )
}
