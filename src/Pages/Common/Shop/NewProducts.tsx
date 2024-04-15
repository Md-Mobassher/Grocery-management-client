import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Section from "@/components/common/Section";
import { useGetAllProductsQuery } from "@/redux/features/admin/productManagement.api";
import { TProduct } from "@/types/product.type";
import ProductCard from "../Product/ProductCard";

const NewProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
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
      <div className="min-h-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products ? (
          products.data.map((product: TProduct) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-center">No Product Found.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default NewProducts;
