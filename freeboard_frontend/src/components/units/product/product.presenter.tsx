import Tooltip from '@material-ui/core/Tooltip';
import { Wrapper, WrapperCanvas } from '../posting/posting.style';
import * as P from './product.style';
import { getDate } from '../../../commons/libraries/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuestionWrite from '../question/write/QuestionWrite.container';
import QuestionListContainer from '../question/list/Question.List.container';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
import MapDetail from '../../commons/map/detailmap';

export default function ProductUI(props: any) {
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
        {/* 헤더시작 */}
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
        {/* 헤더종료 */}

        <P.ProductBody>
          <P.FlexRowDiv>
            <P.FlexColDiv>
              <P.H3>{props.data?.fetchUseditem.remarks}</P.H3>
              <P.PostBodyTitle>
                {props.data?.fetchUseditem.name}
              </P.PostBodyTitle>
              <P.PostBodyTitle>
                {props.data?.fetchUseditem.price.toLocaleString('ko-KR')}원
              </P.PostBodyTitle>
            </P.FlexColDiv>
            <P.FlexColDiv>
              <P.PostLikeItem>
                <P.PostLikeBtn
                  onClick={props.onClickPickTogle}
                  src='/image/pick.png'
                ></P.PostLikeBtn>
                <P.PostLikeCounts>
                  {props.data?.fetchUseditem.pickedCount}
                </P.PostLikeCounts>
              </P.PostLikeItem>
            </P.FlexColDiv>
          </P.FlexRowDiv>

          {/* 이미지 시작 */}

          {props.data?.fetchUseditem?.images[0] ? (
            <P.SliderWrapper>
              <Slider {...settings}>
                {/* @ts-ignore */}
                {props.data?.fetchUseditem.images.map((el, index) => (
                  <P.SliderItem key={uuidv4()}>
                    <P.SliderImg
                      hidden={!props.data?.fetchUseditem.images[index]}
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
          {/* 이미지 종료 */}
          <P.FlexColDiv>
            {typeof window !== 'undefined' ? (
              <P.PostBodyText
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></P.PostBodyText>
            ) : (
              ''
            )}
            <P.FlexRowTag>
              {props.data?.fetchUseditem.tags
                ? props.data?.fetchUseditem.tags.map((el: any) => (
                    <P.H3 key={uuidv4()}>{el}</P.H3>
                  ))
                : ''}
            </P.FlexRowTag>
          </P.FlexColDiv>
          {props.data?.fetchUseditem?.useditemAddress ? (
            <MapDetail address={props.data?.fetchUseditem.useditemAddress} />
          ) : (
            ''
          )}
        </P.ProductBody>
      </WrapperCanvas>
      <P.PostBtns>
        <P.PostBtnItem onClick={props.onClickMoveToList}>
          목록으로
        </P.PostBtnItem>
        <P.PostBtnItem onClick={props.onClickMoveUpdate}>
          수정하기
        </P.PostBtnItem>
        <P.PostBtnItem onClick={props.onClickByeProduct}>
          구매하기
        </P.PostBtnItem>
        <P.PostBtnItem onClick={props.onClickDelete}>삭제하기</P.PostBtnItem>
      </P.PostBtns>
      <QuestionWrite></QuestionWrite>
      <QuestionListContainer></QuestionListContainer>
    </Wrapper>
  );
}
