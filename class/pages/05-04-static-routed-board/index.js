import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($number: INT) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 83011 },
  })

  console.log(data)

  return (
    <div>
      <div> {data?.data.fetchBoard.number}번 게시글에 오신것을 환영합니다 </div>
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
