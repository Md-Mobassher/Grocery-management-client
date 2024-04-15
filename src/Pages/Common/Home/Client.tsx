import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import { Autoplay, EffectFlip, Pagination } from "swiper/modules";

import client1 from "../../../assets/clients/client-1.png";
import client2 from "../../../assets/clients/client-2.png";
import client3 from "../../../assets/clients/client-3.png";
import client4 from "../../../assets/clients/client-4.png";
import Title from "@/components/common/Title";
import Container from "@/components/common/Container";

const Client = () => {
  return (
    <div className="mb-5">
      <Container>
        <Title title="OUR CLIENTS" />

        <div className="py-5">
          <Swiper
            modules={[Autoplay, EffectFlip, Pagination]}
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000 }}
            effect="slide"
            speed={3000}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="flex justify-center"
          >
            <SwiperSlide>
              <img src={client1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={client2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={client3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={client4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Client;