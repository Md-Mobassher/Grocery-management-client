import Banner from "@/pages/Common/Home/Banner";
import Categories from "@/components/common/Categories";
import Client from "@/pages/Common/Home/Client";
import Offer from "@/pages/Common/Home/Offer";

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
