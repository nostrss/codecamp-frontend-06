import * as P from './productlist.style';
import { BsSearch } from 'react-icons/bs';
import { IFetchProductListUI } from './productlist.type';
import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductListItemContainer from './productlistitem/productlistitem.container';

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
        {props.data?.fetchUseditems.map((el) => (
          <Fragment key={String(uuidv4())}>
            <ProductListItemContainer el={el} />
          </Fragment>
        ))}
      </P.WrapperCanvas>
    </P.Wrapper>
  );
}
