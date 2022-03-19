import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { AiFillLike, AiTwotoneDislike } from "react-icons/ai";
import { FaCommentAlt, FaStar, FaPen, FaTimes } from "react-icons/fa";
import Tooltip from '@material-ui/core/Tooltip';  

import {
  Wrapper,
  WrapperCanvas,
  ColumnWrapper,
} from '../../../../styles/emotion'

import {
  PostHeader, PostBody, PostFooter, PostLikes, PostProfile, PostInfo, PostLikeItem, PostBtns,
  Profileimage, ProfileName, PostCreatedAt, InfoItem, RowPostInfo, PostBodyTitle, PostBodyImg,PostBodyText, PostBodySection,
  PostLikeCounts,PostBtnItem, WrapComment,CommentHeader, CommentInfo, CommentInfoInput, StarBox, CommentContents, CommentList, CommentItem, RowItems, CommentName, ColumnItems, UserComments, RowSpaceBetween, RowAlignCenter, UserCommentsDate, IconBox, TextareaWrap, CountTextLength,SubmitComment  }
  from '../../../../styles/post'

const FETCH_POST = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      createdAt
      title
      images
      contents
      youtubeUrl
      likeCount
      dislikeCount
    }
  }`


export default function renderPost() {
  const router = useRouter()
  console.log(router.query.number)

  const { data } = useQuery(FETCH_POST, {
      variables: { boardId: `${router.query.number}` },
  })
  
  console.log(data)
  

  return (
    <Wrapper>
      <WrapperCanvas>
        <PostHeader>
          <PostProfile>
            <Profileimage src="/image/user.png"></Profileimage>
            <ColumnItems>
              <ProfileName>{data?.fetchBoard.writer}</ProfileName>
              <PostCreatedAt> Date : {data?.fetchBoard.createdAt}</PostCreatedAt>
            </ColumnItems>
          </PostProfile>
          <PostInfo>
            <RowPostInfo>
              <InfoItem src="/image/link.png"></InfoItem>
              <Tooltip title="서울특별시 영등포구 양산로 200 
(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층" placement='top-start'> 
              <InfoItem className="tooltip" src="/image/location.png">
                </InfoItem>
                </Tooltip>
            </RowPostInfo>
          </PostInfo>
        </PostHeader>
        <PostBody>
          <PostBodyTitle>{data?.fetchBoard.title}</PostBodyTitle>
          <PostBodyImg src=""></PostBodyImg>
          <PostBodySection>
            <PostBodyText>
            {data?.fetchBoard.contents}
            </PostBodyText>
          </PostBodySection>
        </PostBody>
        <PostFooter>
          <PostLikes>
            <PostLikeItem>
              <AiFillLike size="20" color="#FFD600"></AiFillLike>
              <PostLikeCounts >{data?.fetchBoard.likeCount}</PostLikeCounts>
            </PostLikeItem>
            <PostLikeItem>
              <AiTwotoneDislike size="20" color="grey"></AiTwotoneDislike>
              <PostLikeCounts>{data?.fetchBoard.dislikeCount}</PostLikeCounts>
            </PostLikeItem>
          </PostLikes>
        </PostFooter>
      </WrapperCanvas>
      <PostBtns>
      <PostBtnItem>목록으로</PostBtnItem>
      <PostBtnItem>수정하기</PostBtnItem>
      <PostBtnItem>삭제하기</PostBtnItem>
      </PostBtns>
      <WrapComment>
        <CommentHeader>  
          <FaCommentAlt color="#FFD600">
          </FaCommentAlt> 댓글
        </CommentHeader>
        <ColumnWrapper>
          <CommentInfo>
            <CommentInfoInput type="text" placeholder='작성자'></CommentInfoInput>
            <CommentInfoInput type="password" placeholder='비밀번호'></CommentInfoInput>
            <StarBox>
              <FaStar color="grey" size="24"></FaStar>
            </StarBox>
            <StarBox>
              <FaStar color="grey" size="24"></FaStar>
            </StarBox>
            <StarBox>
              <FaStar color="grey" size="24"></FaStar>
            </StarBox>
            <StarBox>
              <FaStar color="grey" size="24"></FaStar>
            </StarBox>
            <StarBox>
              <FaStar color="grey" size="24"></FaStar>
            </StarBox>
          </CommentInfo>
          <TextareaWrap>
            <CommentContents  maxlength="100" placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'></CommentContents>
            <RowSpaceBetween>
            <CountTextLength>0/100</CountTextLength>
            <SubmitComment>등록하기</SubmitComment>
            </RowSpaceBetween>
          </TextareaWrap>
        </ColumnWrapper>
        <ColumnWrapper>
          <CommentList>
            <CommentItem>
              <RowItems>
                <Profileimage src="/image/user.png"></Profileimage>
                <RowSpaceBetween>
                <ColumnItems>
                  <RowAlignCenter>
                      <CommentName>우진택</CommentName>
                      <RowItems>  
                        <StarBox>
                          <FaStar color="grey" size="24"></FaStar>
                        </StarBox>
                        <StarBox>
                          <FaStar color="grey" size="24"></FaStar>
                        </StarBox>
                        <StarBox>
                          <FaStar color="grey" size="24"></FaStar>
                        </StarBox>
                        <StarBox>
                          <FaStar color="grey" size="24"></FaStar>
                        </StarBox>
                        <StarBox>
                          <FaStar color="grey" size="24"></FaStar>
                        </StarBox>  
                      </RowItems> 
                  </RowAlignCenter> 
                  <UserComments>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum placerat sapien quis iaculis. Donec luctus commodo rutrum. Pellentesque eget ipsum pulvinar, congue neque sed
                  </UserComments>
                      <UserCommentsDate>
                        2022.03.20
                      </UserCommentsDate>
                </ColumnItems>
                  <RowItems>
                    <IconBox>
                      <FaPen color="grey" size="24"></FaPen>
                    </IconBox>
                    <IconBox>
                      <FaTimes color="grey" size="24"></FaTimes>
                    </IconBox>
                </RowItems>
                </RowSpaceBetween>
              </RowItems>
            </CommentItem>
          </CommentList>
        </ColumnWrapper>
      </WrapComment>
    </Wrapper>
  )
}
