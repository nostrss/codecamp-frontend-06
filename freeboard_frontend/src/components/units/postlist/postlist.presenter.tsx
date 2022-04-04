import { Fragment } from 'react';
import * as P from './postlist.style';
import { BsSearch } from 'react-icons/bs';
import { IFetchPostList } from './postlist.type';
import BestContents from './bestcontents/bestcontents.container';
import { getDate } from '../../../commons/libraries/utils';

export default function PostListUI(props: IFetchPostList) {
  return (
    <P.Wrapper>
      <P.WrapperCanvas>
        <P.PageTitle>베스트 게시글</P.PageTitle>
        <P.WrapperFlexRow>
          <BestContents></BestContents>
        </P.WrapperFlexRow>
        <P.WrapperSearch>
          <P.WrapperSearchBar>
            <BsSearch size='24'></BsSearch>
            <P.SearchBar></P.SearchBar>
          </P.WrapperSearchBar>
          <P.DatePeeker type='date'></P.DatePeeker>
          <P.DatePeeker type='date'></P.DatePeeker>
          <P.SearchButton>검색하기</P.SearchButton>
        </P.WrapperSearch>
        <P.WrapperTableHeader>
          <P.HearderBox>번호</P.HearderBox>
          <P.HearderBox>제목</P.HearderBox>
          <P.HearderBox>작성자</P.HearderBox>
          <P.HearderBox>날짜</P.HearderBox>
        </P.WrapperTableHeader>
        <P.WrapperTableBody>
          {props.data?.fetchBoards.map((el, index) => (
            <Fragment key={el.createdAt}>
              <P.BodyBox>{index + 1}</P.BodyBox>
              <P.BodyBox onClick={props.onClickTitle} id={el._id}>
                {el.title}
              </P.BodyBox>
              <P.BodyBox>{el.writer}</P.BodyBox>
              <P.BodyBox>{getDate(el.createdAt)}</P.BodyBox>
            </Fragment>
          ))}
        </P.WrapperTableBody>
        <P.WrapperButton>
          <button onClick={props.onClickMoveWrite}>글쓰기</button>
        </P.WrapperButton>
      </P.WrapperCanvas>
    </P.Wrapper>
  );
}
