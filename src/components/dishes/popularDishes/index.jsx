import { React } from 'react';
import {
  DishesWrapper,
  HeaderDishes,
  TitleDishes,
  SpanSLideTitle,
  UnderLine,
  MainColor,
} from './styles/index';
import '../../../images/menubg.jpg';
import './styles/style.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Autoplay, Pagination } from 'swiper';
import { useMediaQuery } from '@mui/material';

const PopularDishes = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1500px)');

  return (
    <DishesWrapper className="menuBg">
      <HeaderDishes>
        <TitleDishes>
          Popular in<MainColor> menu</MainColor>
        </TitleDishes>
        <UnderLine></UnderLine>
      </HeaderDishes>
      <div className="swiperWrapper">
        <Swiper
          spaceBetween={10}
          slidesPerView={isSmallScreen ? 1 : 3}
          className="swiperBox"
          initialSlide={3}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="SlideWrapper">
            <div className="firstSlide slides">
              <SpanSLideTitle>Botanical infusion Tea</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="SecoundSlide slides">
              <SpanSLideTitle>Sultan's Dream Tea</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="thirdSlide slides">
              <SpanSLideTitle>Japanese Sakura Tea</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="fourthSlide slides">
              <SpanSLideTitle>Fig and Strawberry Tea</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="fifthSlide slides">
              <SpanSLideTitle>Lemon Ninja Tea</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="sixthSlide slides">
              <SpanSLideTitle>Sweet Dreams Tea"</SpanSLideTitle>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </DishesWrapper>
  );
};

export default PopularDishes;
