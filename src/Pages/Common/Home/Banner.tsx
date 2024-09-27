import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner2.jpg";
import banner3 from "@/assets/banner/banner3.jpg";
import { Button } from "../../../components/ui/button";

const Banner = () => {
  return (
    <div className="container mx-auto lg:px-8 md:px-6 px-4 lg:h-[550px] md:h-[450px] h-[300px] mt-3">
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
        modules={[Autoplay, Pagination]}
        className="w-full h-full rounded-lg mb-12"
      >
        <SwiperSlide className="flex visible h-full">
          <div
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="border flex justify-start items-center w-full h-full"
          >
            <div className="lg:px-20 md:px-10 px-6 lg:max-w-xl max-w-xs">
              <div className="flex justify-start items-center uppercase font-semibold pb-2 ">
                <p className="lg:text-lg text-md">Exclusive Offer</p>
                <p className="bg-green-200 px-3 py-2 ml-2 rounded-xl bg-gradient-to-r lg:text-lg text-md">
                  -20% OFF
                </p>
              </div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:pb-5 pb-3">
                Specialist in the grocery store
              </h2>
              <p>Only this week. Don't miss...</p>
              <div className="flex justify-start items-center mt-2 lg:mb-5 mb-3">
                <p>from </p>
                <p className="text-3xl font-semibold text-green-400 ml-2">
                  $7.99
                </p>
              </div>
              <Button className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 ">
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex visible h-full">
          <div
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="border flex justify-start items-center w-full h-full"
          >
            <div className="lg:px-20 md:px-10 px-6 lg:max-w-xl max-w-xs">
              <div className="flex justify-start items-center uppercase font-semibold pb-2 ">
                <p className="lg:text-lg text-md">Exclusive Offer</p>
                <p className="bg-green-200 px-3 py-2 ml-2 rounded-xl bg-gradient-to-r lg:text-lg text-md">
                  -20% OFF
                </p>
              </div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:pb-5 pb-3">
                Feed your family the best
              </h2>
              <p>Only this week. Don't miss...</p>
              <div className="flex justify-start items-center mt-2 lg:mb-5 mb-3">
                <p>from </p>
                <p className="text-3xl font-semibold text-green-400 ml-2">
                  $8.99
                </p>
              </div>
              <Button
                className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 "
                type="submit"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex visible h-full">
          <div
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="border flex justify-start items-center w-full h-full"
          >
            <div className="lg:px-20 md:px-10 px-6 lg:max-w-xl max-w-xs">
              <div className="flex justify-start items-center uppercase font-semibold pb-2 ">
                <p className="lg:text-lg text-md">Exclusive Offer</p>
                <p className="bg-green-200 px-3 py-2 ml-2 rounded-xl bg-gradient-to-r lg:text-lg text-md">
                  -20% OFF
                </p>
              </div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:pb-5 pb-3">
                Grocery full of inspiration
              </h2>
              <p>Only this week. Don't miss...</p>
              <div className="flex justify-start items-center mt-2 lg:mb-5 mb-3">
                <p>from </p>
                <p className="text-3xl font-semibold text-green-400 ml-2">
                  $6.99
                </p>
              </div>
              <Button
                className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 "
                type="submit"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
