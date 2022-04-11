import { useState } from 'react';

export default function Map() {
  const [state, setState] = useState(0);

  const onClickCounter = () => {
    setState((qwer) => qwer + 1);
  };
  return (
    <div>
      <div>현재카운트:{state}</div>
      <button onClick={onClickCounter}>카운트증가</button>
    </div>
  );
}
