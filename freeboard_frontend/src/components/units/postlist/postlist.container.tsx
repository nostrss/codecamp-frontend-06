import PostListUI from './postlist.presenter'
import { useQuery } from '@apollo/client'
import {FETCH_BOARDS} from './postlist.queries'

export default function PostListContainer() {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 }
  })
  return (
    <PostListUI
    data={data}
    />  
  )
}
