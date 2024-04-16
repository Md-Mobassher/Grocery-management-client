import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  IoDiamond,
  IoHeartSharp,
  IoShieldCheckmark,
  IoStar,
  IoStorefrontSharp,
} from "react-icons/io5";
import { BsShieldSlash } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { TProduct } from "@/types/product.type";

const ProductDetails = ({ imageUrl, name, price }: Partial<TProduct>) => {
  const [favourite, setFavourite] = useState(false);

  return (
    <div className="">
      <div className="border rounded">
        <div className="lg:flex md:flex justify-between gap-3">
          <div className="lg:p-5 md:p-4 p-3 flex flex-col justify-center items-center gap-3 relative">
            <div className="absolute top-5 right-8">
              {favourite ? (
                <CiHeart
                  onClick={() => setFavourite(!favourite)}
                  className="size-10 cursor-pointer"
                />
              ) : (
                <IoHeartSharp
                  onClick={() => setFavourite(!favourite)}
                  className="size-10 cursor-pointer text-green-500"
                />
              )}
            </div>
            <div className="flex max-h-[550px]">
              {imageUrl && imageUrl.length > 0 && (
                <img src={imageUrl[0]} alt="" />
              )}
            </div>
            <div className="flex gap-1 py-2">
              <IoStar className="text-orange-500" />
              <IoStar className="text-orange-500" />
              <IoStar className="text-orange-500" />
              <IoStar className="text-orange-500" />
              <IoStar className="text-orange-500" />
            </div>
          </div>
          <div className="lg:p-5 md:p-4 p-3">
            <h3 className="text-xl font-semibold">{name}</h3>
            <h2 className="lg:text-3xl text-2xl font-bold text-green-500 lg:my-4 my-3">
              $ {price}
            </h2>
            <div className="flex gap-3">
              <p className="border rounded-3xl inline-block px-2 py-1">41</p>
              <p className="border rounded-3xl inline-block px-2 py-1">41</p>
              <p className="border rounded-3xl inline-block px-2 py-1">41</p>
            </div>
            <div className="mt-5 flex gap-5 justify-start items-center">
              <LuMinusCircle className="size-6 cursor-pointer" />
              <p>1</p>
              <FiPlusCircle className="size-6 cursor-pointer" />
              <Button className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 ">
                Order Now
              </Button>
            </div>
          </div>
          <div className=" m-4 p-5 border rounded my-3 w-auto  bg-green-50">
            <div>
              <h4 className="font-bold text-sm mb-2">Delivery Charge</h4>
              <div className="flex justify-between gap-5">
                <p className="text-sm">On BKash Payment</p>
                <p className="font-bold text-green-500 ">Free</p>
              </div>
              <div className="flex justify-between gap-5">
                <p className="text-sm">Cash On Delivery</p>
                <p className="font-bold text-green-500">$ 55</p>
              </div>
            </div>
            <hr className="my-4 " />
            <div>
              <h4 className="font-bold text-sm mb-2">Return & Warranty</h4>
              <div className="flex gap-2 justify-start items-center">
                <IoShieldCheckmark className="text-green-400 size-5" />

                <p className="text-sm"> 100% Original</p>
              </div>
              <div className="flex gap-2 justify-start items-center mt-1">
                <IoShieldCheckmark className="text-green-400 size-5" />

                <p className="text-sm"> 7 Days Return</p>
              </div>
              <div className="flex gap-2 justify-start items-center mt-1">
                <BsShieldSlash className="size-5" />

                <p className="text-sm"> No Warranty</p>
              </div>
            </div>
            <hr className="my-4 " />
            <div>
              <div className="flex gap-2 justify-between items-center">
                <div>
                  <div className="flex justify-start items-center gap-4">
                    <IoStorefrontSharp className="text-green-400 size-5" />

                    <p className="text-sm font-bold">Merchant</p>
                  </div>
                  <div>
                    <p className="text-md font-semibold text-green-500 mt-2">
                      Mobassher
                    </p>
                  </div>
                </div>

                <IoDiamond className="size-5 text-green-500" />
              </div>
              <div className="flex justify-between items-center gap-3 mt-4">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs font-semibold text-center">
                    Total Order{" "}
                  </p>
                  <p className="text-md font-semibold text-green-500">39</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs font-semibold text-center">
                    Positive Review
                  </p>
                  <p className="text-md font-semibold text-green-500">0%</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs font-semibold text-center">
                    Merchant Score
                  </p>
                  <p className="text-md font-semibold text-green-500">0</p>
                </div>
              </div>
            </div>
            <hr className="my-4 " />
            <div className="flex justify-center items-center">
              <a
                href="https://dev-mobassher.web.app"
                target="_blank"
                className="text-green-400 font-semibold"
              >
                View Merchant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
