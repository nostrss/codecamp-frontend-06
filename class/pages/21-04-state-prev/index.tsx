import { useState } from 'react';

export default function StatePrevPage() {
  const [isCount, setIsCount] = useState(0);

  const onClickCounter = () => {
    // 1. 화살표 함수
    setIsCount((prev) => prev + 1);

    // 2. 함수선언식
    setIsCount(function (prev) {
      // 로직 추가 가능
      return prev + 1;
    });
    // 3. 매개변수 바꿔보기
    setIsCount((sdfasdfasfd) => sdfasdfasfd + 1);
  };

  return (
    <div>
      <div>현재카운트:{isCount}</div>
      <button onClick={onClickCounter}>카운트증가</button>
    </div>
  );
}
