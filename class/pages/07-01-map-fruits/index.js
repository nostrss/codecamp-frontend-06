// 밖에 전역변수로 빼놓는 이유. state가 바뀔때 마다 새롭게 랜더링이이 되는데 함수 안에 있으면 계속 다시 생성하게 되어 메모리 등의 낭비가 발생
// 리랜더링돼도 새로 안만들어짐
// 단 use**** 인부분은 새로 안만들어진다.
const FRUITS = [
  { number: 1, title: '레드향' },
  { number: 2, title: '샤인머스켓' },
  { number: 3, title: '산청딸기' },
  { number: 4, title: '한라봉' },
  { number: 5, title: '사과' },
  { number: 6, title: '애플망고' },
  { number: 7, title: '딸기' },
  { number: 8, title: '천혜향' },
  { number: 9, title: '과일선물세트' },
  { number: 10, title: '귤' },
];

export default function MapFruitsPage() {
  // const aaa = [<div>1 레드향</div>, <div>2 샤인머스캣</div>, <div>3 산청딸기</div>]
  // const bbb = ['나의 레드향', '나의 샤인머스캣', '나의 산청딸기'].map((el) => (<div>{el}</div>))

  // const ccc = FRUITS.map((el) => (<div>{el.number} {el.title}</div>))
  // 실무에서는 아래와 같이 사용한다. 파일이 나누어져 있거나, container와 presenter가 나누어져 있을때 불편하기 떄문
  return (
    <div>
      {FRUITS.map((el) => (
        <div>
          {el.number} {el.title}
        </div>
      ))}
    </div>
  );
}
