import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutedPage() {
  const router = useRouter()
  console.log(router)


  Number(router.query.aaa) //83013
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.aaa) },
  })

  console.log(data)

  return (
    <div>
      <div> {data?.fetchBoard.number}번 게시글에 오신것을 환영합니다 </div>
      <div>
        작성자 {data?.fetchBoard.writer}번 게시글에 오신것을 환영합니다
      </div>
      <div>
        제목{data?.fetchBoard.title}번 게시글에 오신것을 환영합니다 </div>
      <div>
        게시글{data?.fetchBoard.contents}번 게시글에 오신것을 환영합니다 </div>
    </div>
  )
}
