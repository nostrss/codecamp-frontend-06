import * as U from './bestproductitem.style';

export default function BestProductItemUI(props) {
  return (
    <>
      <U.WrappDivFlexCol onClick={() => props.onClickBestProduct(props.el._id)}>
        <U.ItemImage
          src={
            props.el.images[0] === '' || props.el?.images.length === 0
              ? '/image/undraw_profile_pic_ic-5-t.svg/'
              : props.el.images[0]?.startsWith('https', 0)
              ? `${props.el.images[0]}`
              : `https://storage.googleapis.com/${props.el.images[0]}`
          }
        />
        <U.ItemH3>{props.el?.name}</U.ItemH3>
        <U.DivFlexRow>
          <U.DivFlexCol>
            <U.ItemH4>{props.el?.remarks}</U.ItemH4>
            <U.ItemH3Strong>
              {props.el?.price.toLocaleString('ko-KR')}
            </U.ItemH3Strong>
          </U.DivFlexCol>
          <U.DivFlexCol>
            <U.IconImage src='/image/ic_favorite-24px.png' />
            <span>{props.el?.pickedCount}</span>
          </U.DivFlexCol>
        </U.DivFlexRow>
      </U.WrappDivFlexCol>
    </>
  );
}
