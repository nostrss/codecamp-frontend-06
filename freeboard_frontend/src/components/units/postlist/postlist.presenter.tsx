import { Fragment } from 'react'
import * as P from './postlist.style'
import { BsSearch,BsFillPersonFill,BsFillHandThumbsUpFill } from "react-icons/bs";
import { getDate } from '../../../commons/libraries/utils';
import { IFetchPostList } from './postlist.type';

export default function PostListUI(props : IFetchPostList) {
  
  return (
    <P.Wrapper>
      <P.WrapperCanvas>
        <P.PageTitle>베스트 게시글</P.PageTitle>

        <P.WrapperBestContents>
          
        <P.BestContentsItem> 
          <P.BestContentsImage>
            </P.BestContentsImage> 
            <P.WrapperBestContentsSummary>
              <P.BestContentsTitle>게시물 제목입니다</P.BestContentsTitle>
              <P.WrapperFlexRow>
                <P.WrapperFlexColumn70>
                  <P.WrapperFlexRow>
                    <BsFillPersonFill size="20"></BsFillPersonFill>
                    <P.BestContentsName>우진택</P.BestContentsName>
                  </P.WrapperFlexRow>
                  <P.BestContentsDate>2022.03.22</P.BestContentsDate>
                </P.WrapperFlexColumn70>
                <P.WrapperFlexColumn30>
                  <BsFillHandThumbsUpFill size="20" color="#FFD600" ></BsFillHandThumbsUpFill>
                  <P.BestContentsLike>356</P.BestContentsLike>
                </P.WrapperFlexColumn30>
              </P.WrapperFlexRow>
            </P.WrapperBestContentsSummary>
          </P.BestContentsItem>

          <P.BestContentsItem> 
          <P.BestContentsImage>
            </P.BestContentsImage> 
            <P.WrapperBestContentsSummary>
              <P.BestContentsTitle>게시물 제목입니다</P.BestContentsTitle>
              <P.WrapperFlexRow>
                <P.WrapperFlexColumn70>
                  <P.WrapperFlexRow>
                    <BsFillPersonFill size="20"></BsFillPersonFill>
                    <P.BestContentsName>우진택</P.BestContentsName>
                  </P.WrapperFlexRow>
                  <P.BestContentsDate>2022.03.22</P.BestContentsDate>
                </P.WrapperFlexColumn70>
                <P.WrapperFlexColumn30>
                  <BsFillHandThumbsUpFill size="20" color="#FFD600" ></BsFillHandThumbsUpFill>
                  <P.BestContentsLike>356</P.BestContentsLike>
                </P.WrapperFlexColumn30>
              </P.WrapperFlexRow>
            </P.WrapperBestContentsSummary>
          </P.BestContentsItem>

          <P.BestContentsItem> 
          <P.BestContentsImage>
            </P.BestContentsImage> 
            <P.WrapperBestContentsSummary>
              <P.BestContentsTitle>게시물 제목입니다</P.BestContentsTitle>
              <P.WrapperFlexRow>
                <P.WrapperFlexColumn70>
                  <P.WrapperFlexRow>
                    <BsFillPersonFill size="20"></BsFillPersonFill>
                    <P.BestContentsName>우진택</P.BestContentsName>
                  </P.WrapperFlexRow>
                  <P.BestContentsDate>2022.03.22</P.BestContentsDate>
                </P.WrapperFlexColumn70>
                <P.WrapperFlexColumn30>
                  <BsFillHandThumbsUpFill size="20" color="#FFD600" ></BsFillHandThumbsUpFill>
                  <P.BestContentsLike>356</P.BestContentsLike>
                </P.WrapperFlexColumn30>
              </P.WrapperFlexRow>
            </P.WrapperBestContentsSummary>
          </P.BestContentsItem>

          <P.BestContentsItem> 
          <P.BestContentsImage>
            </P.BestContentsImage> 
            <P.WrapperBestContentsSummary>
              <P.BestContentsTitle>게시물 제목입니다</P.BestContentsTitle>
              <P.WrapperFlexRow>
                <P.WrapperFlexColumn70>
                  <P.WrapperFlexRow>
                    <BsFillPersonFill size="20"></BsFillPersonFill>
                    <P.BestContentsName>우진택</P.BestContentsName>
                  </P.WrapperFlexRow>
                  <P.BestContentsDate>2022.03.22</P.BestContentsDate>
                </P.WrapperFlexColumn70>
                <P.WrapperFlexColumn30>
                  <BsFillHandThumbsUpFill size="20" color="#FFD600" ></BsFillHandThumbsUpFill>
                  <P.BestContentsLike>356</P.BestContentsLike>
                </P.WrapperFlexColumn30>
              </P.WrapperFlexRow>
            </P.WrapperBestContentsSummary>
          </P.BestContentsItem>
        
        </P.WrapperBestContents>
        <P.WrapperSearch>
          <P.WrapperSearchBar>
            <BsSearch size='24'></BsSearch>
            <P.SearchBar></P.SearchBar>
          </P.WrapperSearchBar>
            <P.DatePeeker type="date"></P.DatePeeker>
          <P.DatePeeker type="date"></P.DatePeeker>
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
                <P.BodyBox>{el.writer}</P.BodyBox>
                <P.BodyBox>{el.title}</P.BodyBox>
              <P.BodyBox>{ el.createdAt }</P.BodyBox>
              </Fragment>
            )
          )}
            </P.WrapperTableBody>
      </P.WrapperCanvas>
    </P.Wrapper>
  )
}
