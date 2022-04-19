// 1. /pages/quiz06/boards/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요.
// 2. 각 행의 오른쪽 마지막 부분에 [ 게시물담기 ] 버튼을 만들어 주세요.
// 3. [ 게시물담기 ] 버튼이 눌린 데이터를 로컬스토리지에 객체 형태로 저장해 보세요.
// ⇒ 또한, [ 게시물담기 ] 버튼을 [ 담기취소 ] 버튼으로 변경해 주세요.
// 4. [ 담기취소 ] 버튼이 눌린 데이터를 로컬스토리지에서 제외해 보세요.
import styled from '@emotion/styled';
import { gql, useQuery } from '@apollo/client';
import { IBoard } from '../../../src/commons/types/generated/types';
import { useEffect, useState } from 'react';

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

const WrapperCol = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const WrapperRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

const BodyDiv = styled.div`
  width: 20%;
  height: auto;
  border: 1px solid gray;
  font-size: 16px;
`;

export default function Boards() {
  const { data } = useQuery(FETCH_BOARDS);
  const [isCart, setIsCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('basket') || '[]');
    setIsCart(cart);
  }, []);

  const onClickCart = (el: IBoard) => () => {
    // 1. 기존 장바구니 가져오기
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');

    // 2. 담겨있는 상품이면 삭제, 아니면 추가
    // 삭제
    if (isCart.some((cart) => cart._id === el._id)) {
      const tmp = basket.filter((item: IBoard) => item._id !== el._id);
      setIsCart(tmp);
      localStorage.setItem('basket', JSON.stringify(tmp));
    }
    // 추가
    else {
      setIsCart(basket);
      const { __typename, ...rest } = el;
      basket.push(rest);
      localStorage.setItem('basket', JSON.stringify(basket));
    }
  };

  return (
    <WrapperCol>
      {data?.fetchBoards.map((el: IBoard) => (
        <WrapperRow key={el._id}>
          <BodyDiv>{el.writer}</BodyDiv>
          <BodyDiv>{el.title}</BodyDiv>
          <BodyDiv>{el.contents}</BodyDiv>
          <button onClick={onClickCart(el)}>
            {isCart.some((cart) => cart._id === el._id)
              ? '담기취소'
              : '게시물담기'}
          </button>
        </WrapperRow>
      ))}
    </WrapperCol>
  );
}
