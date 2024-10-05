import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Section from "@/components/common/Section";
import { useGetAllProductsQuery } from "@/redux/features/admin/productManagement.api";
import { TProduct } from "@/types/product.type";
import ProductCard from "../Product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import Loading from "@/components/common/Loading";
import Container from "@/components/common/Container";

const NewProducts = () => {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProductsQuery(undefined);
  console.log(products);

  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-5  md:mb-8 lg:mb-10">
          <Title title="New Products" />
          <div>
            <Button
              className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 flex gap-2"
              onClick={() => navigate(`/shop`)}
            >
              View All <FaArrowRight />
            </Button>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, EffectFlip]}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 2000 }}
          effect="slide"
          speed={3000}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            360: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full h-full"
        >
          {isLoading && <Loading />}

          {isError && (
            <div className="flex justify-center items-center">
              <p className="text-center">Error Fetching New Product.</p>
            </div>
          )}

          {isSuccess &&
            products?.data?.map((product: TProduct) => (
              <SwiperSlide className="flex visible h-full" key={product._id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default NewProducts;
