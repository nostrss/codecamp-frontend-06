import { AiFillLike, AiTwotoneDislike } from 'react-icons/ai';
import Tooltip from '@material-ui/core/Tooltip';

import { Wrapper, WrapperCanvas } from '../posting/posting.style';
import * as P from './post.style';
import { IFetchPost } from './post.type';

export default function PostUI(props: IFetchPost) {
  return (
    <Wrapper>
      <WrapperCanvas>
        <P.PostHeader>
          <P.PostProfile>
            <P.Profileimage src='/image/user.png'></P.Profileimage>
            <P.ColumnItems>
              <P.ProfileName>{props.data?.fetchBoard.writer}</P.ProfileName>
              <P.PostCreatedAt>
                {' '}
                Date : {props.data?.fetchBoard?.createdAt}
              </P.PostCreatedAt>
            </P.ColumnItems>
          </P.PostProfile>
          <P.PostInfo>
            <P.RowPostInfo>
              <P.InfoItem src='/image/link.png'></P.InfoItem>
              <Tooltip
                title='서울특별시 영등포구 양산로 200 
(영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층'
                placement='top-start'
              >
                <P.InfoItem
                  className='tooltip'
                  src='/image/location.png'
                ></P.InfoItem>
              </Tooltip>
            </P.RowPostInfo>
          </P.PostInfo>
        </P.PostHeader>
        <P.PostBody>
          <P.PostBodyTitle>{props.data?.fetchBoard.title}</P.PostBodyTitle>
          <P.PostBodyImg src=''></P.PostBodyImg>
          <P.PostBodySection>
            <P.PostBodyText>{props.data?.fetchBoard.contents}</P.PostBodyText>
          </P.PostBodySection>
        </P.PostBody>
        <P.PostFooter>
          <P.PostLikes>
            <P.PostLikeItem>
              <AiFillLike size='30' color='#FFD600'></AiFillLike>
              <P.PostLikeCounts>
                {props.data?.fetchBoard.likeCount}
              </P.PostLikeCounts>
            </P.PostLikeItem>
            <P.PostLikeItem>
              <AiTwotoneDislike size='30' color='grey'></AiTwotoneDislike>
              <P.PostLikeCounts>
                {props.data?.fetchBoard.dislikeCount}
              </P.PostLikeCounts>
            </P.PostLikeItem>
          </P.PostLikes>
        </P.PostFooter>
      </WrapperCanvas>
      <P.PostBtns>
        <P.PostBtnItem onClick={props.movetoBoards}>목록으로</P.PostBtnItem>
        <P.PostBtnItem onClick={props.moveUpdate}>수정하기</P.PostBtnItem>
        <P.PostBtnItem onClick={props.deleteButton}>삭제하기</P.PostBtnItem>
      </P.PostBtns>
    </Wrapper>
  );
}
