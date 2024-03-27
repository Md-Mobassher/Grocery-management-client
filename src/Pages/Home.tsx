import Banner from "@/components/common/Banner";
import Categories from "@/components/common/Categories";
import Client from "@/components/common/Client";
import Offer from "@/components/common/Offer";

const Home = () => {
  return (
    <div className=" lg:py-5 md:py-3 py-2">
      <Banner />
      <Categories />
      <Client />
      <Offer />
    </div>
  );
};

export default Home;
