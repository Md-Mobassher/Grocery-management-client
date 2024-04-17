import { TProduct } from "@/types/product.type";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <button
      className="hover:bg-green-500 transition-all duration-300 hover:text-white text-md w-full font-semibold text-green-500 rounded-3xl px-6 border border-green-400 py-2 mt-4 text-center cursor-pointer"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
