import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img/image1.jpg";
import img2 from "../../assets/img/image2.jpg";
import img3 from "../../assets/img/image3.jpg";
import img4 from "../../assets/img/image4.jpg";
import img5 from "../../assets/img/image5.jpg";
import img6 from "../../assets/img/image6.jpg";
import img7 from "../../assets/img/image7.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <div className="mt-[6rem] -z-40 ">
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="  bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200"
    >
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10"> <Image src={img1} alt="image 1" /></SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10">        <Image src={img2} alt="image 2" />      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10">        <Image src={img3} alt="image 3" />      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10">        <Image src={img4} alt="image 4" />      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10">        <Image src={img5} alt="image 5" />      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10">        <Image src={img6} alt="image 6" />      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-[#fff] pb-10">        <Image src={img7} alt="image 7" />      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;
