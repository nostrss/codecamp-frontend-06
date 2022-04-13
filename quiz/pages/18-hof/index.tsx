export default function ChangeHOF() {
  const onClickButton = (num) => (event) => {
    console.log(num);
    // console.log(event.target.id)
  };

  return (
    <button onClick={onClickButton(123)}>클릭 : console을 확인하시오</button>
  );
}
