import Banner from "@/pages/Common/Home/Banner";
import Categories from "@/pages/Common/Shop/Categories";
import Client from "@/pages/Common/Home/Client";
import Offer from "@/pages/Common/Home/Offer";
import NewProducts from "../Shop/NewProducts";
import BestSeller from "../Shop/BestSeller";
import Container from "@/components/common/Container";

const Home = () => {
  return (
    <div className=" lg:py-5 md:py-3 py-2">
      <Banner />
      <Categories />
      <Container>
        <NewProducts />
      </Container>

      <BestSeller />
      <Offer />
      <Client />
    </div>
  );
};

export default Home;
