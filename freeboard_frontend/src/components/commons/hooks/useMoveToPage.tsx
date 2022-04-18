import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { visitedPageState } from '../../../commons/store';

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  // 로그인 화면으로 이동했다가, 로그인 성공 후 이전 페이지로 돌려주기 위해 글로벌 스테이트에 생성

  const onClickMoveToPage = (path) => () => {
    // 페이지 이동 전에 글로벌에 저장
    setVisitedPage(path);
    router.push(path);
  };

  return { visitedPage, onClickMoveToPage };
}
