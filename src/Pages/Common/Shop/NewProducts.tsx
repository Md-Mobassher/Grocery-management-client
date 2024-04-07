import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Product from "./Product";
import Section from "@/components/common/Section";

const NewProducts = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <div className="flex justify-between items-center mb-5">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Section>
  );
};

export default NewProducts;
