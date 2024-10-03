import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { TProduct } from "@/types/product.type";
import AddToCartButton from "@/components/common/AddToCartButton";

const ProductCard = ({
  _id,
  name,
  price,
  discount,
  previousPrice,
  imageUrl,
}: TProduct) => {
  const navigate = useNavigate();

  return (
    <div className="border hover:border-green-400 rounded hover:shadow-2xl shadow-green-500 hover:bg-white transition-all duration-300 relative group">
      {discount && (
        <p className="absolute bg-green-200 px-2 py-1 rounded-lg inline text-md font-semibold">
          {discount}
        </p>
      )}

      <div
        onClick={() => navigate(`/product/${_id}`)}
        className="cursor-pointer lg:px-4 px-3 pt-3 lg:pt-4"
      >
        <div className="h-52 flex">
          {imageUrl && imageUrl.length > 0 && (
            <img
              src={imageUrl[0]}
              alt={name || "Product Image"}
              className="w-full h-48 object-contain bg-white group-hover:scale-110 transition-all duration-500"
            />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className=" text-sm font-semibold text-green-500">In Stock</p>
          <div className="flex gap-[1px] py-1">
            <IoStar className="text-orange-500" />
            <IoStar className="text-orange-500" />
            <IoStar className="text-orange-500" />
            <IoStar className="text-orange-500" />
            <IoStar className="text-orange-500" />
          </div>
          <div className="flex gap-3 text-xl font-bold">
            {previousPrice && (
              <p className="text-slate-400 line-through">${previousPrice}</p>
            )}
            <p className="text-green-500 text-bold">৳{price}</p>
          </div>
        </div>
      </div>
      <div className="lg:px-4 px-3 pb-3 lg:pb-4">
        <AddToCartButton product={{ _id, name, price, discount, imageUrl }} />
      </div>
    </div>
  );
};

export default ProductCard;
