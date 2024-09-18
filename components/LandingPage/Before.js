import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const options = {
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 1500,
  loop: true,
  autoHeight: true,
  pagination: {
    type: 'progressbar',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Before = ({data}) => {
  return (
    <>
    <section className='ptb-80' id="before">
    <div className='section-title text-center style1 mb-40'>
        <h2>{data.title}</h2>
        <span>{data.sub_title}</span>
      </div>
      <div className="container mb-40">
      <div className='tour-slider-v1 pb-50'>
        <Swiper {...options}>
        {data.before_after.map((item, i) => (
          <SwiperSlide key={i}>
            <div >
            <img src={item.image} alt={item.title}/>
            </div>
          </SwiperSlide>

))}
</Swiper>    
      </div></div>
      <div className="tour-progress-v2"></div>
      </section>
    </>
  );
};

export default Before;