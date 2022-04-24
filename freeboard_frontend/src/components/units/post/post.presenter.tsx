import Tooltip from '@material-ui/core/Tooltip';
import ReactPlayer from 'react-player';
import { Wrapper, WrapperCanvas } from '../posting/posting.style';
import * as P from './post.style';
import { IFetchPost } from './post.type';
import { getDate } from '../../../commons/libraries/utils';
import { v4 as uuidv4 } from 'uuid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BoardCommentWrite from '../comment2/write/BoardCommentWrite.container';
import BoardCommentList from '../comment2/list/BoardCommentList.container';

export default function PostUI(props: IFetchPost) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <WrapperCanvas>
        <P.PostHeader>
          <P.PostProfile>
            <P.Profileimage src='/image/user.png'></P.Profileimage>
            <P.ColumnItems>
              <P.ProfileName>{props.data?.fetchBoard.writer}</P.ProfileName>
              <P.PostCreatedAt>
                Date : {getDate(String(props.data?.fetchBoard?.createdAt))}
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
          {props.data?.fetchBoard.images[0] ? (
            <P.SliderWrapper>
              <Slider {...settings}>
                {props.data?.fetchBoard.images.map((el, index) => (
                  <P.SliderItem key={uuidv4()}>
                    <P.SliderImg
                      hidden={!props.data?.fetchBoard.images[index]}
                      src={
                        el?.startsWith('https', 0)
                          ? el
                          : `https://storage.googleapis.com/${el}`
                      }
                    />
                  </P.SliderItem>
                ))}
              </Slider>
            </P.SliderWrapper>
          ) : (
            ''
          )}
          <P.PostBodySection>
            <P.PostBodyText>{props.data?.fetchBoard.contents}</P.PostBodyText>
            <ReactPlayer url={props.data?.fetchBoard.youtubeUrl} />
          </P.PostBodySection>
        </P.PostBody>
        <P.PostFooter>
          <P.PostLikes>
            <P.PostLikeItem>
              <P.PostLikeBtn
                onClick={props.onClickLike}
                src='/image/like.png'
              ></P.PostLikeBtn>
              <P.PostLikeCounts>
                {props.data?.fetchBoard.likeCount}
              </P.PostLikeCounts>
            </P.PostLikeItem>
            <P.PostLikeItem>
              <P.PostDislikeBtn
                onClick={props.onClickDislike}
                src='/image/dislike.png'
              ></P.PostDislikeBtn>
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
      <BoardCommentWrite isEdit={false} />
      <BoardCommentList />
    </Wrapper>
  );
}
