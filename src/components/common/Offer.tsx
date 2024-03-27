import bg1 from "../../assets/bg/bg-1.webp";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <div
      id="offer"
      style={{
        backgroundImage: `url(${bg1})`,
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto flex lg:justify-start md:justify-start items-center my-16 p-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold overflow-hidden italic">
            Special Discount For <br /> All Grocery Products
          </h2>

          <p className="mt-5 ">
            There is a big opportunity for all of our customers. If you buy any
            grocery items in our shop, you will get maximum 40% discount because
            of the Eid-Ul-Fitor.
          </p>
          <p className="text-xl font-semibold mt-3">Happy Shopping</p>

          <div className="mt-5">
            <Button className="bg-green-400 hover:bg-green-500 " type="submit">
              Shop Now
            </Button>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Offer;
