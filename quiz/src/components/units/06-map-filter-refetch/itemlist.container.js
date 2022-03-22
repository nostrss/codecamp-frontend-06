import ItemListUI from './itemlist.presenter'
import { useQuery, useMutation } from '@apollo/client'
import { FETCH_PRODUCTS, DELETE_PRODUCT} from './itemlist.query'

export default function ItemListContainer() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const { data } = useQuery(FETCH_PRODUCTS)

  const onClickDelete = (event) => {
    deleteProduct({
            variables: { productId: String(event.target.id) },
            refetchQueries: [{ query: FETCH_PRODUCTS }]
        })
    }
  return (
    <ItemListUI
    data={data}
    onClickDelete={onClickDelete}
    />

  )
}

