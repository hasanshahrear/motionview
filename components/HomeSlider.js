import Image from 'next/image';
import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSlider = () => {
  return (
    <div className="container mx-auto mt-10">
      <Swiper
        modules={[Pagination,  Autoplay ]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        autoplay
      >
        <SwiperSlide className="text-center">
          <Image src="/a.webp" height="376" width="1080" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <Image src="/b.webp" height="376" width="1080" />
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <Image src="/c.webp" height="376" width="1080" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider