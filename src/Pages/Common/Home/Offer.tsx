import Container from "@/components/common/Container";
import bg1 from "../../../assets/bg/bg-1.webp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Section from "@/components/common/Section";

const Offer = () => {
  const navigate = useNavigate();
  return (
    <div
      id="offer"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Section>
        <Container>
          <div className="max-w-2xl flex flex-col lg:justify-start md:justify-start justify-center items-center lg:py-20 md:py-16 py-10">
            <h2 className="text-3xl font-bold overflow-hidden">
              Special Discount For <br /> All Grocery Products
            </h2>

            <p className="mt-5 ">
              There is a big opportunity for all of our customers. If you buy
              any grocery items in our shop, you will get maximum 40% discount
              because of the Eid-Ul-Fitor.
            </p>
            <p className="text-xl font-semibold mt-3">Happy Shopping</p>

            <div className="mt-5">
              <Button
                className="bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-3xl px-6 "
                onClick={() => navigate(`/shop`)}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Offer;