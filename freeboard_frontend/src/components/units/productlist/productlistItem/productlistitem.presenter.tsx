import * as U from './productlistitem.style';
import { v4 as uuidv4 } from 'uuid';
export default function ProductListItemUI(props: any) {
  return (
    <U.WrappDivFlexRow onClick={() => props.onClickProductList(props.el._id)}>
      <U.ItemImage
        src={
          props.el.images[0] === '' || props.el?.images.length === 0
            ? '/image/magic-box.png/'
            : props.el.images[0]?.startsWith('https', 0)
            ? `${props.el.images[0]}`
            : `https://storage.googleapis.com/${props.el.images[0]}`
        }
      />
      <U.DivFlexCol>
        <U.DivFlexRow>
          {props.el.name
            .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
            .split('#$%')
            .map((el: any) => (
              <U.ItemSpan
                key={String(uuidv4())}
                isMatched={props.keyword === el}
              >
                {el}
              </U.ItemSpan>
            ))}
        </U.DivFlexRow>

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
          {/* <U.IconImage src='/image/ic_favorite-24px.png' /> */}
          <U.ItemH3Strong>
            {props.el?.price.toLocaleString('ko-KR')}원
          </U.ItemH3Strong>
        </U.DivFlexRow>
      </U.DivFlexCol>
    </U.WrappDivFlexRow>
  );
}
