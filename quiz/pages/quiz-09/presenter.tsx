import { memo } from 'react';

function MemoizationPresenter() {
  console.log('자식컴퍼넌트가 렌더링 됩니다');
  return (
    <div>
      <div>=============================</div>
      <h1>이것은 자식 컴퍼넌트 입니다</h1>
      <div>=============================</div>
    </div>
  );
}

export default memo(MemoizationPresenter);
