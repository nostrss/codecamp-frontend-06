import { Fragment } from 'react';
import * as P from './postlist.style';
import { BsSearch } from 'react-icons/bs';
import { IFetchPostList } from './postlist.type';
import BestContents from './bestcontents/bestcontents.container';
import { getDate } from '../../../commons/libraries/utils';
import { v4 as uuidv4 } from 'uuid';

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
            <P.SearchBar onChange={props.onChangeSearch}></P.SearchBar>
          </P.WrapperSearchBar>
          <P.DatePeeker
            id='start'
            onChange={props.onChangeStart}
            type='date'
          ></P.DatePeeker>
          <P.DatePeeker
            id='end'
            onChange={props.onChangeEnd}
            type='date'
          ></P.DatePeeker>
          <P.SearchButton onClick={props.onClickSearchDate}>
            검색하기
          </P.SearchButton>
        </P.WrapperSearch>
        <P.WrapperTableHeader>
          <P.HearderBox>번호</P.HearderBox>
          <P.HearderBox>제목</P.HearderBox>
          <P.HearderBox>작성자</P.HearderBox>
          <P.HearderBox>날짜</P.HearderBox>
        </P.WrapperTableHeader>
        <P.WrapperTableBody>
          {props.data?.fetchBoards.map((el, index) => (
            <Fragment key={el._id}>
              <P.BodyBox>{index + 1}</P.BodyBox>
              <P.BodyBox onClick={props.onClickTitle} id={el._id}>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split('#$%')
                  .map((el) => (
                    <P.Word key={uuidv4()} isMatched={props.keyword === el}>
                      {el}
                    </P.Word>
                  ))}
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
