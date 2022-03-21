import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_POST } from './post.queries'
import PostUI from './post.presenter'


export default function PostContainer() {
  const router = useRouter()
  console.log(router.query.number)

  const { data } = useQuery(FETCH_POST, {
      variables: { boardId: `${router.query.number}` },
  })
  
  console.log(data)
  

  return (
    <PostUI
      data = {data}
    />
  )
}
