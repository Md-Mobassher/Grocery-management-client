import Banner from "@/pages/Common/Home/Banner";
import Categories from "@/components/common/Categories";
import Client from "@/pages/Common/Home/Client";
import Offer from "@/pages/Common/Home/Offer";
import NewProducts from "../Shop/NewProducts";
import BestSeller from "../Shop/BestSeller";

const Home = () => {
  return (
    <div className=" lg:py-5 md:py-3 py-2">
      <Banner />
      <Categories />
      <NewProducts />
      <BestSeller />
      <Offer />
      <Client />
    </div>
  );
};

export default Home;
