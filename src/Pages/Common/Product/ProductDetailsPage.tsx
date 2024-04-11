import ProductDetails from "./ProductDetails";
import ProductSpecification from "./ProductSpecification";

const ProductDetailsPage = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-3 md:px-5 px-4 mt-5 ">
      <ProductDetails />
      <ProductSpecification />
    </div>
  );
};

export default ProductDetailsPage;
