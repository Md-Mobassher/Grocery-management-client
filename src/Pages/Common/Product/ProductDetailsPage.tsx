import ProductDetails from "./ProductDetails";
import ProductRating from "./ProductRating";
import ProductSpecification from "./ProductSpecification";

const ProductDetailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-3 md:px-5 px-4 mt-5 ">
      <ProductDetails />
      <ProductSpecification />
      <ProductRating />
    </div>
  );
};

export default ProductDetailsPage;
