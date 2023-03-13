import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img/image11.jpg";
import img2 from "../../assets/img/image22.jpg";
import img3 from "../../assets/img/image33.jpg";
import img4 from "../../assets/img/image44.jpg";
import Image from "next/image"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
;

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className=" flex justify-center my-auto bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200"
    >
      <SwiperSlide>        <Image src={img1} alt="image 1" priority={true} className="w-full h-screen bg-center object-cover" />      </SwiperSlide>
      <SwiperSlide>        <Image src={img2} alt="image 2" priority={true} className="w-full h-screen bg-center object-cover"/>      </SwiperSlide>
      <SwiperSlide>        <Image src={img3} alt="image 3" priority={true} className="w-full h-screen bg-center object-cover"/>      </SwiperSlide>
      <SwiperSlide>        <Image src={img4} alt="image 4" priority={true} className="w-full h-screen bg-center object-cover"/>      </SwiperSlide>

    </Swiper>
    
  );
};

export default Slider;
