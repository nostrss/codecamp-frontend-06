import * as U from './bestproductitem.style';

export default function BestProductItemUI(props) {
  return (
    <>
      <U.WrappDivFlexCol onClick={() => props.onClickBestProduct(props.el._id)}>
        <U.ItemImage
          src={
            props.el.images[0] === '' || props.el?.images.length === 0
              ? '/image/magic-box.png/'
              : props.el.images[0]?.startsWith('https', 0)
              ? `${props.el.images[0]}`
              : `https://storage.googleapis.com/${props.el.images[0]}`
          }
        />
        <U.ItemH3>{props.el?.name}</U.ItemH3>
        <U.DivFlexRow>
          <U.DivFlexCol80>
            <U.ItemH4>{props.el?.remarks}</U.ItemH4>
            <U.ItemH3Strong>
              {props.el?.price.toLocaleString('ko-KR')}원
            </U.ItemH3Strong>
          </U.DivFlexCol80>
          <U.DivFlexCol20>
            <U.IconImage src='/image/ic_favorite-24px.png' />
            <span>{props.el?.pickedCount}</span>
          </U.DivFlexCol20>
        </U.DivFlexRow>
      </U.WrappDivFlexCol>
    </>
  );
}
