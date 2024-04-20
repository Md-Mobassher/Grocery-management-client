import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Section from "@/components/common/Section";
import { useGetAllProductsQuery } from "@/redux/features/admin/productManagement.api";
import { TProduct } from "@/types/product.type";
import ProductCard from "../Product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Loading from "@/components/common/Loading";

const BestSeller = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProductsQuery(undefined);
  const navigate = useNavigate();
  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-5">
          <Title title="Best Seller" />
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
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          draggable={true}
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
          className="w-full h-full "
        >
          {isLoading && <Loading />}

          {isError && (
            <div className="flex justify-center items-center">
              <p className="text-center">No Product Found.</p>
            </div>
          )}

          {isSuccess &&
            products.data.map((product: TProduct) => (
              <SwiperSlide className="flex visible h-full" key={product._id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default BestSeller;
