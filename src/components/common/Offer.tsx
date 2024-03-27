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
      <div className=" mt-5 flex justify-center items-center p-5">
        <div className="">
          <h2 className="text-4xl font-bold italic">
            Special Discount For All
          </h2>
          <h2 className="text-4xl font-bold italic">Grocery Products</h2>
          <p className="mt-4 ">
            There is a big opportunity for all of our customers. If you buy any
            grocery items in our shop, you will get maximum 40% discount because
            of the Eid-Ul-Fitor.{" "}
          </p>
          <p>Happy Shopping</p>

          <Button type="submit">Shop Now</Button>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Offer;
