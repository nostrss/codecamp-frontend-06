// 1. count 변수를 let과 state로 각각 선언하고, 각각의 카운트를 증가시키는 버튼과 함수를 만들어 주세요.
// 2. 각각의 버튼을 클릭하고, 어떤 변수를 증가시켰을 때 다시 랜더링 되는지 console.log를 작성하여 확인해 주세요.
// 3. 자식 컴포넌트를 하나 만들고 자식 컴포넌트가 랜더링 될 때마다 console.log를 활용하여 표시해 주세요.
// 4. 부모 컴포넌트가 변경되더라도 자식 컴포넌트가 변경되지 않도록 자식 컴포넌트에 memo를 적용시켜 주세요.
// 5. 위에서 적용한 내용들이 정말로 잘 반영되는지 Profiler를 활용해 보세요.
// 6. 부모 컴포넌트에 선언되어 있는 let count가 다시 생성되지 않도록 useMemo를 적용해 주세요.
// 7. 부모 컴포넌트에 선언되어 있는 함수들이 모두 다시 생성되지 않도록 useCallback을 적용해 주세요.
// 8. useCallback이 적용된 함수는 state까지 기억을 해버립니다. state를 기억하지 못하도록 prev를 사용하여 기억시켜 주세요.
// 9. useMemo를 활용하여 함수를 기억하도록 만들 수도 있습니다. 위 8번에서 만든 함수를 useMemo를 사용해서 변경해 보세요.
// 10. 위에서 만든 state 변경 함수를 JSX 에서 직접 작성하도록 변경해 보세요.

import { useCallback, useMemo, useState } from 'react';
import MemoizationPresenter from './presenter';

export default function MemoizationContainer() {
  console.log('부모 컴퍼넌트가 렌더링 됩니다!!');

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickCountLet = useCallback(() => {
    console.log('LET버튼클릭');
    console.log(countLet);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log('STATE버튼클릭');
    console.log(countState);
    setCountState((prev) => prev + 1);
  }, []);

  // 9. useMemo로 useCallBack 만들어보기
  const onClickCountUseMemo = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>=============================</div>
      <h1>부모 컨테이너입니다</h1>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
      <div>카운트(useCallback):{countState}</div>
      <button onClick={onClickCountState}>카운트(state) + 1 올리기</button>
      <div>카운트(useMemo):{countState}</div>
      <button onClick={onClickCountUseMemo}>카운트(state) + 1 올리기</button>
      <div>카운트(useMemo):{countState}</div>
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(useMemoJSX) + 1 올리기
      </button>

      <div>=============================</div>
      <MemoizationPresenter />
    </div>
  );
}
