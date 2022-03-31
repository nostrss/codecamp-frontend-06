import { useState } from 'react';
import Child1 from '../../src/components/units/board/14-lifting-state-up/child1';
import Child2 from '../../src/components/units/board/14-lifting-state-up/child2';

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  // 방법1
  const onClickCounteUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div>=============================</div>
      <Child2 count={count} onClickCounteUp={onClickCounteUp} />
    </div>
  );
}
