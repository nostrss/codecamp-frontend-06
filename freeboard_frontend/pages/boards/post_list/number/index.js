import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { AiFillLike,AiTwotoneDislike } from "react-icons/ai";

import {
  Wrapper,
  WrapperCanvas,
  ColumnWrapper,
  RowWrapper
} from '../../../../styles/emotion'

import {
  PostHeader, PostBody, PostFooter, PostLikes, PostComment, PostProfile, PostInfo, PostLikeItem, PostBtns,
  Profileimage, ProfileName, PostCreatedAt, InfoItem, RowPostInfo, PostBodyTitle,PostBodyImg,PostBodyText, PostBodySection,
  PostLikeCounts,PostBtnItem }
  from '../../../../styles/post'

const FETCH_POST = gql`
query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      createdAt
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
    }
  }`


export default function renderPost() {
  const router = useRouter()
  console.log(router)

  const { getData } = useQuery(FETCH_POST, {
      variables: { boardId: "62359e82a8255b00298838ce" },
  })
  
  console.log(getData?.data)    
  

  return (
    <Wrapper>
      <WrapperCanvas>
        <PostHeader>
          <PostProfile>
            <Profileimage src="/image/user.png">
            </Profileimage>
            <ColumnWrapper>
              <ProfileName>우진택</ProfileName>
              <PostCreatedAt>2022.03.18</PostCreatedAt>
            </ColumnWrapper>
          </PostProfile>
          <PostInfo>
            <RowPostInfo>
              <InfoItem src="/image/link.png"></InfoItem>
              <InfoItem src="/image/location.png"></InfoItem>
            </RowPostInfo>
          </PostInfo>
        </PostHeader>
        <PostBody>
          <PostBodyTitle>게시글 제목입니다 </PostBodyTitle>
          <PostBodyImg></PostBodyImg>이미지
          <PostBodySection>
            <PostBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nunc vel nisl euismod, sit amet ultrices leo scelerisque. Morbi condimentum orci lobortis varius cursus. Vestibulum a neque eu sem convallis efficitur quis at nulla. Suspendisse quam turpis, eleifend nec iaculis a, dictum id eros. Pellentesque vel tempor lacus. Mauris maximus, nibh sit amet maximus scelerisque, erat purus egestas nibh, nec vehicula metus mi eget mauris. Integer malesuada bibendum enim, et egestas sem fermentum et.
            </PostBodyText>
          </PostBodySection>
        </PostBody>
        <PostFooter>
          <PostLikes>
            <PostLikeItem>
              <AiFillLike size="20" color="#FFD600"></AiFillLike>
              <PostLikeCounts >1234</PostLikeCounts>
            </PostLikeItem>
            <PostLikeItem>
              <AiTwotoneDislike size="20" color="grey"></AiTwotoneDislike>
              <PostLikeCounts>1234</PostLikeCounts>
            </PostLikeItem>
          </PostLikes>
        </PostFooter>
      </WrapperCanvas>
      <PostBtns>
      <PostBtnItem>목록으로</PostBtnItem>
      <PostBtnItem>수정하기</PostBtnItem>
      <PostBtnItem>삭제하기</PostBtnItem>
      </PostBtns>
      <PostComment>댓글들</PostComment>
    </Wrapper>
  )
}
