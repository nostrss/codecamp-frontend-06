import * as P from './productlist.style';
import { BsSearch } from 'react-icons/bs';
import { IFetchProductListUI } from './productlist.type';
import { v4 as uuidv4 } from 'uuid';
import ProductListItemContainer from './productlistitem/productlistitem.container';
import InfiniteScroll from 'react-infinite-scroller';

export default function ProductListUI(props: IFetchProductListUI) {
  return (
    <P.Wrapper>
      <P.WrapperCanvas>
        <P.WrapperFlexRow></P.WrapperFlexRow>
        <P.WrapperSearch>
          <P.WrapperSearchBar>
            <BsSearch size='24'></BsSearch>
            <P.SearchBar></P.SearchBar>
          </P.WrapperSearchBar>
          <P.DatePeeker id='start' type='date'></P.DatePeeker>
          <P.DatePeeker id='end' type='date'></P.DatePeeker>
          <P.SearchButton>검색하기</P.SearchButton>
        </P.WrapperSearch>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el) => (
            <ProductListItemContainer key={String(uuidv4())} el={el} />
          )) || <div></div>}
        </InfiniteScroll>
      </P.WrapperCanvas>
    </P.Wrapper>
  );
}
