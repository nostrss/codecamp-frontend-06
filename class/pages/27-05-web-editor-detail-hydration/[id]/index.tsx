import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <div>
      <div style={{ color: 'red' }}> 작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: 'green' }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {typeof window !== 'undefined' ? (
        <div
          style={{ color: 'blue' }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        // hydration이슈 때문에
        <div style={{ color: 'blue' }}></div>
      )}
      <div style={{ color: 'brown' }}>상품가격:</div>
    </div>
  );
}
