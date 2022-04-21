import Tooltip from '@material-ui/core/Tooltip';
import { Wrapper, WrapperCanvas } from '../posting/posting.style';
import * as P from './product.style';
import { IFetchPost } from './product.type';
import { getDate } from '../../../commons/libraries/utils';
// import { v4 as uuidv4 } from 'uuid';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductUI(props) {
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
              <P.ProfileName>
                {props.data?.fetchUseditem.seller.name}
              </P.ProfileName>
              <P.PostCreatedAt>
                {getDate(String(props.data?.fetchUseditem.createdAt))}
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
        <P.ProductBody>
          <P.FlexRowDiv>
            <P.FlexColDiv>
              <P.H3>{props.data?.fetchUseditem.remarks}</P.H3>
              <P.PostBodyTitle>
                {props.data?.fetchUseditem.name}
              </P.PostBodyTitle>
              {/* {props.data?.fetchBoard.images[0] ? (
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
          )} */}
            </P.FlexColDiv>
            <P.FlexColDiv>
              <P.PostLikeItem>
                <P.PostLikeBtn
                  // onClick={props.onClickLike}
                  src='/image/like.png'
                ></P.PostLikeBtn>
                <P.PostLikeCounts>
                  {/* {props.data?.fetchBoard.likeCount} */}000
                </P.PostLikeCounts>
              </P.PostLikeItem>
            </P.FlexColDiv>
          </P.FlexRowDiv>

          {/* {props.data?.fetchBoard.images[0] ? (
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
          )} */}
          <P.FlexColDiv>
            <P.PostBodyText>
              {props.data?.fetchUseditem.contents}
            </P.PostBodyText>
            <P.H3>#fjdsakl</P.H3>
          </P.FlexColDiv>
        </P.ProductBody>
        <P.PostFooter></P.PostFooter>
      </WrapperCanvas>
      <P.PostBtns>
        <P.PostBtnItem
        // onClick={props.movetoBoards}
        >
          목록으로
        </P.PostBtnItem>
        <P.PostBtnItem
        // onClick={props.moveUpdate}
        >
          수정하기
        </P.PostBtnItem>
      </P.PostBtns>
    </Wrapper>
  );
}
