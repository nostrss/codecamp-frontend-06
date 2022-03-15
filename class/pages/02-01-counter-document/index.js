export default function CounterDocumentPage() {
  function counter() {
    const result = Number(document.getElementById('count').innerText) + 1;
    document.getElementById('count').innerText = result;
  }
  return (
    // react에서 내보낼때 꼭 태그를 묶어주고 내보내야한다.
    <div>
      <div id="count">0</div>
      <button onClick={counter}> 카운트 올리기!!</button>
    </div>
  );
}
