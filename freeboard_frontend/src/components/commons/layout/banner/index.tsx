import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 40px 600px;
  /* margin-top: 80px; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const SliderItem = styled.div`
  display: flex;
  width: 1200px;
  height: 400px;
  background-color: #fff;
`;

const SliderTitle = styled.h3`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 200px;
  line-height: 400px;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <SliderItem>
            <SliderTitle>1</SliderTitle>
          </SliderItem>
          <SliderItem>
            <SliderTitle>2</SliderTitle>
          </SliderItem>
          <SliderItem>
            <SliderTitle>3</SliderTitle>
          </SliderItem>
          <SliderItem>
            <SliderTitle>4</SliderTitle>
          </SliderItem>
          <SliderItem>
            <SliderTitle>5</SliderTitle>
          </SliderItem>
          <SliderItem>
            <SliderTitle>6</SliderTitle>
          </SliderItem>
        </Slider>
      </Wrapper>
    </>
  );
}
