import * as P from './bestcontents.style';
import { BsFillPersonFill, BsFillHandThumbsUpFill } from 'react-icons/bs';
import { getDate } from '../../../../commons/libraries/utils';
import { IBestcontents } from './bestcontents.type';

export default function BestContentsUI(props: IBestcontents) {
  return (
    <>
      <P.WrapperBestContents onClick={() => props.onClickBest(props.el._id)}>
        <P.BestContentsItem>
          <P.BestContentsImage
            src={
              props.el?.images[0] === '' || props.el?.images.length === 0
                ? '/image/undraw_profile_pic_ic-5-t.svg/'
                : props.el.images[0]?.startsWith('https', 0)
                ? `${props.el.images[0]}`
                : `https://storage.googleapis.com/${props.el.images[0]}`
            }
          />
          <P.WrapperBestContentsSummary>
            <P.BestContentsTitle>{props.el.title}</P.BestContentsTitle>
            <P.WrapperFlexRow>
              <P.WrapperFlexColumn70>
                <P.WrapperFlexRow>
                  <BsFillPersonFill size='20'></BsFillPersonFill>
                  <P.BestContentsName>{props.el.writer}</P.BestContentsName>
                </P.WrapperFlexRow>
                <P.BestContentsDate>
                  {getDate(props.el.createdAt)}
                </P.BestContentsDate>
              </P.WrapperFlexColumn70>
              <P.WrapperFlexColumn30>
                <BsFillHandThumbsUpFill
                  size='20'
                  color='#FFD600'
                ></BsFillHandThumbsUpFill>
                <P.BestContentsLike>{props.el.likeCount}</P.BestContentsLike>
              </P.WrapperFlexColumn30>
            </P.WrapperFlexRow>
          </P.WrapperBestContentsSummary>
        </P.BestContentsItem>
      </P.WrapperBestContents>
    </>
  );
}
