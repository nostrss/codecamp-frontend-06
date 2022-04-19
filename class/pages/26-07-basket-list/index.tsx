import { useEffect, useState } from 'react';
import { IBoard } from '../../src/commons/types/generated/types';

export default function BasketListPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');
    setBasketItems(basket);
  }, []);

  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
