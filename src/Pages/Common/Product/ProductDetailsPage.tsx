import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductRating from "./ProductRating";
import ProductSpecification from "./ProductSpecification";
import { useGetSingleProductQuery } from "@/redux/features/admin/productManagement.api";
import { TProduct } from "../../../types/product.type";
import Loading from "@/components/common/Loading";

const ProductDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: productData,
    isLoading,
    isError,
  } = useGetSingleProductQuery(id);
  console.log(productData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="w-full h-96">
        <p>Error loading Product. Please try again later.</p>
      </div>
    );
  }

  const { ...product } = productData?.data as TProduct;

  return (
    <div className="max-w-7xl mx-auto lg:px-3 md:px-5 px-4 mt-5 ">
      <ProductDetails {...product} />
      <ProductSpecification {...product} />
      <ProductRating {...product} />
    </div>
  );
};

export default ProductDetailsPage;
