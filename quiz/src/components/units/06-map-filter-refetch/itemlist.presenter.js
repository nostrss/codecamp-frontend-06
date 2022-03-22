import * as M from './itemlist.style'

export default function ItemListUI(props) {
  return (
    <div>
    {props.data?.fetchProducts.map((el) => (
      <M.Row key={el._id}>
        <M.Column><input type="checkbox" /></M.Column>
            <M.Column> {el._id}</M.Column>
            <M.Column> {el.seller}</M.Column>
        <M.Column> {el.name} </M.Column>
        <M.Column> {el.detail} </M.Column>
        <M.Column> {el.price} </M.Column>
        <M.Column> {el.name} </M.Column>
        <M.Column> {el.createdAt} </M.Column>
        <button id={el._id} onClick={props.onClickDelete}>삭제</button>
        </M.Row>
      ))}
      </div>
  )
}
