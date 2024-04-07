import BestSeller from "./BestSeller";
import NewProducts from "./NewProducts";

const Shop = () => {
  return (
    <div className=" lg:py-5 md:py-3 py-2">
      <NewProducts />
      <BestSeller />
    </div>
  );
};

export default Shop;
