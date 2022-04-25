import * as U from './productlistitem.style';
export default function ProductListItemUI(props) {
  return (
    <U.WrappDivFlexRow onClick={() => props.onClickProductList(props.el._id)}>
      <U.ItemImage
        src={
          props.el.images === '' || !props.el.images
            ? '/image/undraw_profile_pic_ic-5-t.svg/'
            : props.el.images?.startsWith('https', 0)
            ? `${props.el.images}`
            : `https://storage.googleapis.com/${props.el.images}`
        }
      />
      <U.DivFlexCol>
        <U.ItemH3>{props.el?.name}</U.ItemH3>
        <U.ItemH4>{props.el?.remarks}</U.ItemH4>
        <U.ItemH4Gray>{props.el.tags[0]}</U.ItemH4Gray>
        <U.DivFlexRow>
          <U.IconImage src='/image/user.png' />
          <U.Span>{props.el?.seller.name}</U.Span>
          <U.IconImage src='/image/ic_favorite-24px.png' />
          <U.Span>{props.el?.pickedCount}</U.Span>
        </U.DivFlexRow>
      </U.DivFlexCol>
      <U.DivFlexCol>
        <U.DivFlexRow>
          <U.IconImage src='/image/ic_favorite-24px.png' />
          <U.ItemH3Strong>{props.el?.price}</U.ItemH3Strong>
        </U.DivFlexRow>
      </U.DivFlexCol>
    </U.WrappDivFlexRow>
  );
}
