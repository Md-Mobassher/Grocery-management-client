import { IoStar } from "react-icons/io5";
import item from "../../../assets/category/dairy-1.jpg";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="border hover:border-green-400 rounded lg:p-4 md:p-3 p-3 hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 cursor-pointer relative"
      onClick={() => navigate(`/product/1`)}
    >
      <p className="absolute bg-green-200 px-2 py-1 rounded-lg inline  text-md font-semibold">
        20%
      </p>
      <div>
        <img src={item} alt="" />
      </div>
      <div>
        <h3 className="text-md font-bold">
          All Natural Italian-Style Chicken Meatballs
        </h3>
        <p className="lg:text-lg text-md font-semibold text-green-500">
          In Stock
        </p>
        <div className="flex gap-1 py-2">
          <IoStar className="text-orange-500" />
          <IoStar className="text-orange-500" />
          <IoStar className="text-orange-500" />
          <IoStar className="text-orange-500" />
          <IoStar className="text-orange-500" />
        </div>
        <div className="flex gap-3 text-xl font-bold">
          <p className="text-slate-400 line-through">$20.00</p>
          <p className="text-green-500">$18.00</p>
        </div>
        <div>
          <div className="hover:bg-green-500 transition-all duration-300 hover:text-white text-md font-semibold text-green-500 rounded-3xl px-6 border border-green-400 py-2 mt-4 text-center">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
