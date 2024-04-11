import Ratings from "@/components/common/Ratings";
import { IoStar } from "react-icons/io5";

const ProductRating = () => {
  return (
    <div className="mt-4 border rounded">
      <div className=" m-4">
        <div className="flex flex-wrap justify-between items-center bg-slate-200 p-2 rounded">
          <h3>
            <span className="font-semibold">Ratings & Reviews :</span> Printed
            Linen Semi Long Panjabi
          </h3>
          <h3>Deal Code: 1415462</h3>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Buyers Rating ( 1):</h3>
          <div className="mt-2 flex justify-start ">
            <div className="flex flex-col ">
              <div className="flex justify-center items-end gap-1">
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

            <div className="ml-16">
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
