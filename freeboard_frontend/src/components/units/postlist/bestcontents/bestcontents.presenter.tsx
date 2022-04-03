import * as P from './bestcontents.style';
import { BsFillPersonFill, BsFillHandThumbsUpFill } from 'react-icons/bs';

export default function BestContentsUI(props) {
  return (
    <>
      <P.WrapperBestContents>
        <P.BestContentsItem>
          <P.BestContentsImage></P.BestContentsImage>
          <P.WrapperBestContentsSummary>
            <P.BestContentsTitle id={props.el._id} onClick={props.onClickBest}>
              {props.el.title}
            </P.BestContentsTitle>
            <P.WrapperFlexRow>
              <P.WrapperFlexColumn70>
                <P.WrapperFlexRow>
                  <BsFillPersonFill size='20'></BsFillPersonFill>
                  <P.BestContentsName>{props.el.writer}</P.BestContentsName>
                </P.WrapperFlexRow>
                <P.BestContentsDate>{props.el.createdAt}</P.BestContentsDate>
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
