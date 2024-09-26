import Title from "../../../components/common/Title";
import Container from "../../../components/common/Container";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import Section from "../../../components/common/Section";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import { Autoplay, EffectFlip } from "swiper/modules";
import Loading from "@/components/common/Loading";
import CategoryCard from "@/pages/Common/Product/CategoryCard";
import { useGetAllCategoriesQuery } from "@/redux/features/admin/categoryManagement.api";
import { TCategory } from "@/types/category.types";

const Categories = () => {
  const navigate = useNavigate();
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllCategoriesQuery(undefined);

  return (
    <Section>
      <Container>
        <div className="flex justify-between items-center mb-5 md:mb-8 lg:mb-10">
          <Title title="Categories" />
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
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
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
              <p className="text-center">No Category Found.</p>
            </div>
          )}

          {isSuccess &&
            categories?.data?.map((category: TCategory) => (
              <SwiperSlide className="flex visible h-full" key={category._id}>
                <CategoryCard {...category} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Categories;
