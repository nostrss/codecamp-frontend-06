import { gql, useQuery } from '@apollo/client';
import { IBoard } from '../../src/commons/types/generated/types';

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickCart = (el: IBoard) => () => {
    // 1. 기존 장바구니 가져오기
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');

    // 2. 이미 담겼는지 확인하기
    const tmp = basket.filter((item: IBoard) => item._id === el._id);
    if (tmp.length === 1) {
      alert('이미 담으신 물품입니다');

      return;
    }

    // 삭제시?
    // const tmp = basket.filter((item: IBoard) => item._id !== el._id);

    // 3.장바구니에 담기
    const { __typename, ...rest } = el;
    basket.push(rest);
    localStorage.setItem('basket', JSON.stringify(basket));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickCart(el)}>카트</button>
        </div>
      ))}
    </div>
  );
}
