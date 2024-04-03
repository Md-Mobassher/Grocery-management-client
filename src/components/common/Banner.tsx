import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner1.jpg";
import banner3 from "@/assets/banner/banner3.jpg";
import bannergif from "@/assets/banner/sidebar-banner.gif";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-stretch gap-5 max-h-[550px]">
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="max-w-4xl h-full"
          >
            <SwiperSlide className="flex visible">
              <div
                style={{ backgroundImage: `url(${banner1})`, height: "550px" }}
              >
                <p>slide1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${banner2})`, height: "550px" }}
              >
                <p>slide1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${banner3})`, height: "550px" }}
              >
                <p>slide1</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex">
          <img
            className="rounded-lg border lg:max-w-96 "
            src={bannergif}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
