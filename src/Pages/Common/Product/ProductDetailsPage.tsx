import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductRating from "./ProductRating";
import ProductSpecification from "./ProductSpecification";
import { useGetSingleProductQuery } from "@/redux/features/admin/productManagement.api";
import { TProduct } from "../../../types/product.type";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading bikes. Please try again later.</div>;
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
