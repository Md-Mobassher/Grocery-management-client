import { TProduct } from "@/types/product.type";
import { PiArrowFatRightFill } from "react-icons/pi";

const ProductSpecification = ({
  name,
  _id,
  type,
  size,
  brand,
  model,
}: Partial<TProduct>) => {
  return (
    <div className="mt-4 border rounded">
      <div className=" m-4">
        <div className="flex flex-wrap justify-between items-center  bg-green-50 p-2 rounded">
          <h3>
            <span className="font-bold">Product Description :</span> {name}
          </h3>
          <h4>
            <span className="font-bold">Deal Code:</span> {_id}
          </h4>
        </div>
        <div className="pt-2">
          <ul>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Product type: {type}</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Fabric: Linen</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Size: {size}</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Work: Print</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Round Sleeve</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Work: Print</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Semi-long</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Color Guarantee</span>
            </li>
            <li className="flex flex-wrap gap-2 justify-start items-center">
              <PiArrowFatRightFill />
              <span>Fashionable & Elegant Design</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-between items-center  bg-green-50 p-2 rounded mt-5">
          <h3>
            <span className="font-bold">Product Specification :</span> {name}
          </h3>
          <h4>
            <span className="font-bold">Deal Code:</span> {_id}
          </h4>
        </div>

        <div className="pt-2 lg:flex md:flex lg:justify-between md:justify-between justify-start items-start gap-3">
          <div className="flex flex-col gap-4">
            <h4>
              <span className="font-bold">Brand:</span> {brand}
            </h4>
            <div>
              <h4 className="font-bold">Specifications:</h4>
              <ul className="mt-1">
                <li className="flex flex-wrap gap-2 justify-start items-center">
                  <PiArrowFatRightFill />
                  <span>Not Applicable</span>
                </li>
              </ul>
            </div>
            <h4>
              <span className="font-bold">Package Includes:</span> Raiyan
            </h4>
          </div>
          <div className="flex flex-col gap-4 lg:mt-0 mt-2">
            <div>
              <h4 className="font-bold">Model:</h4>
              {model}
              <ul className="mt-2">
                <li className="flex flex-wrap gap-2 justify-start items-center">
                  <PiArrowFatRightFill />
                  <span>Not Applicable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  bg-green-50 p-2 rounded mt-6">
          <h3 className="text-red-600">Note / Conditions</h3>
          <h3> </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
