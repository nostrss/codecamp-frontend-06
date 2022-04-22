import { useRouter } from 'next/router';
import Link from 'next/link';
export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push('/29-03-kakaomap-routed');
  };
  return (
    <div>
      <button onClick={onClickMoveToMap}> 맵으로 이동하기</button>
      <div></div>
      <a href='/29-03-kakaomap-routed'>a 태그 맵으로 이동하기</a>
      <div></div>
      <Link href='/29-03-kakaomap-routed'>
        {/* 권장사항 : a태그로 감싸줘라 */}
        <a>Link 태그 이동하기</a>
      </Link>
    </div>
  );
}
