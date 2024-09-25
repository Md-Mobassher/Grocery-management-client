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
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <Section>
        <Container>
          <div className="max-w-2xl flex flex-col lg:justify-start md:justify-start justify-center items-center lg:py-12 md:py-12 py-10">
            <h2 className="text-3xl font-bold overflow-hidden">
              Special Discount For <br /> All Grocery Products
            </h2>

            <p className="mt-5 text-center py-2">
              Take advantage of our Eid-Ul-Fitor offer with up to 40% off on all
              grocery items! From fresh produce to pantry staples, enjoy
              unbeatable savings on everything you need. Stock up on your
              favorites and save big during this limited-time offer.
            </p>
            <p className="text-2xl font-bold mt-3">Happy Shopping</p>

            <div className="mt-8">
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
