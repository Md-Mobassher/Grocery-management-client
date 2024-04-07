import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import Product from "./Product";
import Section from "@/components/common/Section";

const BestSeller = () => {
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
      </Container>
    </Section>
  );
};

export default BestSeller;
