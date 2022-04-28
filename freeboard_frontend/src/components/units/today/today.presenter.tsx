import * as U from './today.style';
import TodayItemUI from './todayitem.presenter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';

const StyledSlider = styled(Slider)`
  /* .slick-prev {
    left: 30px;
    z-index: 10;
  }
  .slick-next {
    right: 15px;
    z-index: 10;
  } */
  .slick-next:before {
    color: black;
    font-size: 40px;
  }

  .slick-prev:before {
    color: black;
    font-size: 40px;
  }
`;

export default function TodayUI(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };
  return (
    <U.WrappFIXDivFlexCol>
      오늘 본 상품
      <StyledSlider {...settings}>
        {props.isToday.map((el, index) => (
          <TodayItemUI key={uuidv4()} el={el} />
        ))}
      </StyledSlider>
    </U.WrappFIXDivFlexCol>
  );
}
