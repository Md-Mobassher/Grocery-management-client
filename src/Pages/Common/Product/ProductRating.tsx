import Ratings from "@/components/common/Ratings";
import { TProduct } from "@/types/product.type";
import { IoStar } from "react-icons/io5";

const ProductRating = ({ name, _id }: Partial<TProduct>) => {
  return (
    <div className="mt-4 border rounded mb-10">
      <div className=" m-4">
        <div className="flex flex-wrap justify-between items-center  bg-green-50 p-2 rounded">
          <h3>
            <span className="font-semibold">Ratings & Reviews:</span> {name}
          </h3>
          <h3>
            <span className="font-semibold">Deal Code: </span>
            {_id}
          </h3>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Buyers Rating ( 1):</h3>
          <div className="mt-2 flex flex-wrap justify-center lg:gap-10 gap-5">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-end gap-2">
                <h1 className="text-4xl text-green-500">5.0 </h1>
                <h3 className="text-xl font-semibold">/ 5</h3>
              </div>
              <div className="flex gap-1 py-2">
                <IoStar className="text-orange-500" />
                <IoStar className="text-orange-500" />
                <IoStar className="text-orange-500" />
                <IoStar className="text-orange-500" />
                <IoStar className="text-orange-500" />
              </div>
            </div>

            <div className="lg:ml-16 md:ml-10 ml-5">
              <Ratings value={100} />
              <Ratings value={75} />
              <Ratings value={50} />
              <Ratings value={25} />
              <Ratings value={0} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Buyers Reviews ( 1):</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
