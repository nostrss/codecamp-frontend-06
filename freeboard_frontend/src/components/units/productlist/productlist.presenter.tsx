import * as P from './productlist.style';
import { BsSearch } from 'react-icons/bs';
import { IFetchProductListUI } from './productlist.type';
import { v4 as uuidv4 } from 'uuid';
import ProductListItemContainer from './productlistitem/productlistitem.container';
import InfiniteScroll from 'react-infinite-scroller';
import TodayContainer from '../today/today.container';

export default function ProductListUI(props: IFetchProductListUI) {
  return (
    <P.Wrapper>
      <P.WrapperCanvas>
        <P.WrapperFlexRow>
          <P.IsSellBtn isSoldout={props.isSoldout} onClick={props.onClickSell}>
            판매중상품
          </P.IsSellBtn>
          <P.IsSoldBtn isSoldout={props.isSoldout} onClick={props.onClickSold}>
            판매된상품
          </P.IsSoldBtn>
        </P.WrapperFlexRow>
        <P.WrapperSearch>
          <P.WrapperSearchBar>
            <BsSearch size='24'></BsSearch>
            <P.SearchBar
              onChange={props.onChangeSearch}
              defaultValue={'검색어를 입력하세요'}
            ></P.SearchBar>
          </P.WrapperSearchBar>
        </P.WrapperSearch>
        <InfiniteScroll
          style={{ width: '100%' }}
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el) => (
            <ProductListItemContainer
              key={String(uuidv4())}
              el={el}
              keyword={props.keyword}
            />
          )) || <div></div>}
        </InfiniteScroll>
        {/* <P.ButtonFix onClick={props.onClickMoveNew}>상품등록하기</P.ButtonFix> */}
        <TodayContainer />
      </P.WrapperCanvas>
    </P.Wrapper>
  );
}
