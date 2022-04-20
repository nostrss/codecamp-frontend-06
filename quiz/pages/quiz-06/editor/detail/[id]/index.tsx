// 4. 이동된 페이지에서는 router의 id를 이용하여 게시물 데이터를 불러와서 화면에 출력해 주세요.
// 5. 출력된 데이터 중, contents 부분은 태그를 포함하고 있으므로, dangerousIySetInnerHTML 속성을 사용하여 나타내 주세요.

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
      <div> 작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {typeof window !== 'undefined' ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        // hydration이슈 때문에
        <div></div>
      )}
      <div></div>
    </div>
  );
}
