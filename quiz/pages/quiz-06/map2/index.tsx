// /pages/quiz06/map2/index.tsx 페이지를 만들고, [이동하기] 버튼을 하나 만들어 주세요.
// ⇒ [ 이동하기 ] 버튼을 클릭하면 /pages/quiz06/map1/index.tsx로 router.push 하여 이동해 주세요.
// ⇒ 이 때, 에러가 발생한다면, 발생하지 않도록 수정해 주세요.

import { useRouter } from 'next/router';
export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push('/quiz-06/map1');
  };
  return (
    <div>
      <button onClick={onClickMoveToMap}> 이동하기</button>
    </div>
  );
}
