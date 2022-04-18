import { useMoveToPage } from '../../src/components/commons/hooks/useMoveToPage';

export default function CustomHookuseMoveToPage() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <div>
      <button onClick={onClickMoveToPage('/board')}>게시판으로이동</button>
      <button onClick={onClickMoveToPage('/market')}>마켓으로이동</button>
      <button onClick={onClickMoveToPage('/mypage')}>마이페이지로이동</button>
    </div>
  );
}
