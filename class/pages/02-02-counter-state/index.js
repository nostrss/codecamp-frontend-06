import { useState } from 'react';

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
  }
  return (
    // react에서 내보낼때 꼭 태그를 묶어주고 내보내야한다.
    <div>
      <div>{count}</div>
      <button onClick={counter}> 카운트 올리기!!</button>
    </div>
  );
}


