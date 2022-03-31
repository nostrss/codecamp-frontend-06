export default function Child2(props) {
  return (
    <div>
      <div>자식2의 카운트 : {props.count}</div>
      <button onClick={props.onClickCounteUp}>카운트 올리기!!!</button>
    </div>
  );
}
