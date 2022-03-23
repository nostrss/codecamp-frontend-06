//상품 등록, 수정 컴포넌트
export default function ApplyProductUI(props) {
  
  return (
    
    <div>
      <h1>상품{props.isEdit ? '수정' : '등록'}하기</h1>
      판매자: <input type="text" onChange={props.onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={props.onChangeItemName} />
      <br />
      상품설명: <input type="text" onChange={props.onChangeItemDetail} />
      <br />
      상품가격: <input type="text" onChange={props.onChangePrice} />
      <br />
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickMake}> 상품
        {props.isEdit ? '수정' : '등록'}하기</button>
      <div>{props.warning}</div>
    </div>
  )
}