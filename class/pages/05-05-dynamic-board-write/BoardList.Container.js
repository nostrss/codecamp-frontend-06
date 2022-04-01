import { useRouter } from 'next/router';
import BoardListUI from './BoardList.Presenter';

export default function BoardList() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push('/05-06-dynamic-board-read/83011');
  };

  const onClickMove2 = () => {
    router.push('/05-06-dynamic-board-read/83012');
  };

  const onClickMove3 = () => {
    router.push('/05-06-dynamic-board-read/83013');
  };
  return (
    <BoardListUI
      onClickMove1={onClickMove1}
      onClickMove2={onClickMove2}
      onClickMove3={onClickMove3}
    />
  );
}
