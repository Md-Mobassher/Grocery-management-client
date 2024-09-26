/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import { Autoplay, EffectFlip } from "swiper/modules";

import client1 from "../../../assets/clients/client-1.png";
import client2 from "../../../assets/clients/client-2.png";
import client3 from "../../../assets/clients/client-3.png";
import client4 from "../../../assets/clients/client-4.png";
import client6 from "../../../assets/clients/client-6.png";
import client7 from "../../../assets/clients/client-7.png";
import client8 from "../../../assets/clients/client-8.png";
import Title from "@/components/common/Title";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

type TClient = {
  id: number;
  img: any;
};
const clients: TClient[] = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },

  {
    id: 6,
    img: client6,
  },
  {
    id: 7,
    img: client7,
  },
  {
    id: 8,
    img: client8,
  },
];

const Client = () => {
  return (
    <Section>
      <Container>
        <Title title="OUR CLIENTS" />

        <div className="pt-10">
          <Swiper
            modules={[Autoplay, EffectFlip]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            effect="slide"
            speed={3000}
            breakpoints={{
              1500: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              400: {
                slidesPerView: 3,
              },
              200: {
                slidesPerView: 2,
              },
            }}
            className="flex justify-center items-center"
          >
            {clients.map((client: TClient) => (
              <SwiperSlide key={client.id} className="h-full">
                <img
                  src={client.img}
                  alt="client image"
                  className="flex justify-center items-center md:w-[200px] w-[150px] h-[150px] lg:h-[200px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
};

export default Client;
