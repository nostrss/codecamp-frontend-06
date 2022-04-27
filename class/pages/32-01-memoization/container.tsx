import { useCallback, useMemo, useState } from 'react';
import MemoizationPresenter from './presenter';

export default function MemoizationContainer() {
  console.log('컨테이너가 렌더링 됩니다!!');

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // const aaa = useMemo(() => {
  //   Math.random();
  // }, []);
  // 중괄호 제거시 아래처럼

  const aaa = useMemo(() => Math.random(), []);

  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // useCallback 안에서 state를 바로 가져와 사용하는 것은 X
  // 필요할땐 dependency array 사용
  // 하지만 dependency array가 너무 많아지면 다시 만드는게...

  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    // setCountState(countState + 1); 잘못쓴 예시
    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 useCallBack 만들어보기
  const bbb = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <div>
      <div>=============================</div>
      <h1>컨테이너입니다</h1>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state) + 1 올리기</button>
      <div>=============================</div>
      <MemoizationPresenter countState={countState} />
    </div>
  );
}
