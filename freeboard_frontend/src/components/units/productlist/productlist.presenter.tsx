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
          <button onClick={props.onClickSell}>판매중상품</button>
          <button onClick={props.onClickSold}>판매된상품</button>
        </P.WrapperFlexRow>
        <P.WrapperSearch>
          <P.WrapperSearchBar>
            <BsSearch size='24'></BsSearch>
            <P.SearchBar onChange={props.onChangeSearch}></P.SearchBar>
          </P.WrapperSearchBar>
          {/* <P.DatePeeker id='start' type='date'></P.DatePeeker>
          <P.DatePeeker id='end' type='date'></P.DatePeeker> */}
          {/* <P.SearchButton onClick={props.onClickSearch}>
            검색하기
          </P.SearchButton> */}
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
